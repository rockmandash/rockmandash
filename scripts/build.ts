import fs from 'fs-extra';
import path from 'path';
import util from 'util';
import _glob from 'glob';
import { exec as _exec } from 'child_process';
import * as Constant from '../src/constant';
import * as Regex from '../src/regex';
import replaceAll from '../src/functions/array-string/replaceAll';
import stripJSDoc from '../src/functions/jsdoc/stripJSDoc';

const glob = util.promisify(_glob);
const exec = util.promisify(_exec);

(async () => {
  // =================================================================================
  // remove build folder first
  // =================================================================================

  const buildFolder = path.resolve(__dirname, '../build');

  await fs.remove(buildFolder);

  // =================================================================================
  // generate temp typescript config
  // =================================================================================

  const tempTsconfigFolder = path.resolve(__dirname, '../tempTsconfig');
  await fs.ensureDir(tempTsconfigFolder);

  const tsconfig = await fs.readJson(
    path.resolve(__dirname, '../tsconfig.json')
  );

  const tsconfigBuild = (() => {
    let config = { ...tsconfig };
    config.compilerOptions.outDir = '../build/esm/development';
    config.include = ['../src'];
    config.exclude = ['../src/__tests__', '../src/macro.js'];
    return config;
  })();

  await fs.writeJson(
    `${tempTsconfigFolder}/tsconfig.build.json`,
    tsconfigBuild
  );

  // =================================================================================
  // excute typescript compiler
  // =================================================================================

  const tscStdResult = await exec(
    `tsc --project ${tempTsconfigFolder}/tsconfig.build.json`
  );

  if (tscStdResult.stdout) console.log('stdout:', tscStdResult.stdout);
  if (tscStdResult.stderr) console.log('stderr:', tscStdResult.stderr);

  // =================================================================================
  // generating index file that exports everything
  // =================================================================================

  const functionsFolder = path.resolve(__dirname, '../src/functions');

  const All_Function_FilePaths = await glob(`${functionsFolder}/**/*.ts`);

  const environmentNames = ['production', 'development'];

  await fs.ensureDir(`${buildFolder}/esm/production`);

  await Promise.all(
    environmentNames.flatMap(environmentName => {
      const finalData = All_Function_FilePaths.map(functionFilePath => {
        const functionName = path.basename(functionFilePath, '.ts');
        const category = path.basename(path.dirname(functionFilePath));
        return `export { default as ${functionName} } from './${environmentName}/functions/${category}/${functionName}';`;
      })
        .concat(
          Object.keys(Constant).map(
            key => `export { ${key} } from './${environmentName}/constant';`
          )
        )
        .concat(
          Object.keys(Regex).map(
            key => `export { ${key} } from './${environmentName}/regex';`
          )
        )
        .join('\n');

      return ['js', 'd.ts'].map(extension =>
        fs.writeFile(
          `${buildFolder}/esm/${environmentName}.${extension}`,
          finalData
        )
      );
    })
  );

  // =================================================================================
  // babel transpile remove invariant
  // =================================================================================

  const tempBabelrcFolder = path.resolve(__dirname, '../tempBabelrc');
  await fs.ensureDir(tempBabelrcFolder);

  await fs.writeJson(`${tempBabelrcFolder}/minify.babelrc`, {
    comments: false,
    plugins: [
      'babel-plugin-strip-invariant',
      'minify-mangle-names',
      'minify-constant-folding',
      'minify-dead-code-elimination',
      'minify-flip-comparisons',
      'minify-guarded-expressions',
      'minify-infinity',
      'minify-simplify',
      'minify-type-constructors',
      'transform-member-expression-literals',
      'transform-merge-sibling-variables',
      'transform-minify-booleans',
      'transform-property-literals',
      'transform-simplify-comparison-operators',
      'transform-undefined-to-void'
    ]
  });

  const babelEsmStdResult = await exec(
    `babel ${buildFolder}/esm/development --out-dir ${buildFolder}/esm/production --copy-files --config-file ${tempBabelrcFolder}/minify.babelrc`
  );

  if (babelEsmStdResult.stdout)
    console.log('stdout:', babelEsmStdResult.stdout);
  if (babelEsmStdResult.stderr)
    console.log('stderr:', babelEsmStdResult.stderr);

  // =================================================================================
  // cjs
  // =================================================================================

  await fs.writeJson(`${tempBabelrcFolder}/commonjs.babelrc`, {
    plugins: [
      [
        '@babel/plugin-transform-modules-commonjs',
        {
          loose: true,
          noInterop: true,
          strict: true
        }
      ]
    ]
  });

  const babelCjsStdResult = await exec(
    `babel ${buildFolder}/esm --out-dir ${buildFolder}/cjs --copy-files --config-file ${tempBabelrcFolder}/commonjs.babelrc`
  );

  if (babelCjsStdResult.stdout)
    console.log('stdout:', babelCjsStdResult.stdout);
  if (babelCjsStdResult.stderr)
    console.log('stderr:', babelCjsStdResult.stderr);

  // =================================================================================
  // rollup
  // =================================================================================

  const rollupResult = await exec(
    `rollup -c ${path.resolve(__dirname, '../rollup.config.js')}`
  );

  if (rollupResult.stdout) console.log('stdout:', rollupResult.stdout);
  if (rollupResult.stderr) console.log('stderr:', rollupResult.stderr);

  // =================================================================================
  // copy files
  // =================================================================================

  fs.copyFile(
    path.resolve(__dirname, '../LICENSE'),
    path.resolve(__dirname, '../build/LICENSE')
  );

  fs.copyFile(
    path.resolve(__dirname, '../README.md'),
    path.resolve(__dirname, '../build/README.md')
  );

  fs.copyFile(
    path.resolve(__dirname, '../src/macro.js'),
    path.resolve(__dirname, '../build/macro.js')
  );

  const developmentDefinition = await fs.readFile(
    path.resolve(__dirname, '../build/esm/development.d.ts'),
    'utf8'
  );

  const newDevelopmentDefinition = replaceAll(
    developmentDefinition,
    './development/',
    './esm/development/'
  );

  fs.writeFile(`${buildFolder}/macro.d.ts`, newDevelopmentDefinition);

  const {
    name,
    version,
    license,
    author,
    description,
    keywords,
    repository,
    bugs,
    homepage,
    sideEffects,
    dependencies
  } = await fs.readJson(path.resolve(__dirname, '../package.json'));

  const newPkg = {
    name,
    version,
    license,
    author,
    description,
    keywords,
    repository,
    bugs,
    homepage,
    sideEffects,
    dependencies
  };

  fs.writeJson(`${buildFolder}/package.json`, newPkg, {
    spaces: 2
  });

  // =================================================================================
  // docs
  // =================================================================================

  const docFolder = path.resolve(__dirname, '../docs');
  const websiteFolder = path.resolve(__dirname, '../website');

  await fs.ensureDir(docFolder);

  const JestTestFolder = path.resolve(__dirname, '../src/__tests__');

  const FunctionsDetailData = await Promise.all(
    All_Function_FilePaths.map(async filePath => {
      const fileName = path.basename(filePath, '.ts');
      const category = path.basename(path.dirname(filePath));
      const fileData = await fs.readFile(filePath, 'utf8');
      const fileDeclarationData = await fs.readFile(
        path.resolve(
          buildFolder,
          `./esm/development/functions/${category}/${fileName}.d.ts`
        ),
        'utf8'
      );
      const fileJestData = await fs.readFile(
        `${JestTestFolder}/${category}/${fileName}.test.ts`,
        'utf8'
      );

      return {
        name: fileName,
        category,
        declarations: fileDeclarationData
          .split('\n')
          .filter(line => line.startsWith(`declare`)),
        sourceCode: fileData,
        jsdocs: stripJSDoc(fileData),
        jest: fileJestData
      };
    })
  );

  FunctionsDetailData.forEach(
    ({ name, declarations, sourceCode, jsdocs, jest }) => {
      let markdownData = `---
id: ${name}
title: ${name}
---

${jsdocs[0].replace(/@example[\s\S]*/, '')}

\`\`\`typescript
import { ${name} } from 'rockmandash/macro';
\`\`\`

## Declarations

${declarations
  .map(
    declaration => `\`\`\`typescript
${declaration}
\`\`\`
`
  )
  .join('\n')}

## Usage

\`\`\`typescript
${jest}
\`\`\`

## Source Code

\`\`\`typescript
${sourceCode}
\`\`\`

`;

      fs.writeFile(`${docFolder}/${name}.md`, markdownData);
    }
  );

  [...Object.entries(Constant), ...Object.entries(Regex)].forEach(
    ([name, value]) => {
      let markdownData = `---
id: ${name}
title: ${name}
---

\`\`\`typescript
import { ${name} } from 'rockmandash';
\`\`\`

## Declarations

\`\`\`typescript
export const ${name} = ${value};
\`\`\`

`;

      fs.writeFile(`${docFolder}/${name}.md`, markdownData);
    }
  );

  const categories = FunctionsDetailData.reduce<{ [key: string]: string[] }>(
    (prevValue, current) => {
      if (prevValue[current.category]) {
        prevValue[current.category].push(current.name);
      } else {
        prevValue[current.category] = [current.name];
      }
      return prevValue;
    },
    {}
  );

  fs.writeFile(
    `${websiteFolder}/sidebars.json`,
    JSON.stringify({
      'docs-other': {
        README: ['README'],
        ...categories,
        Constant: Object.keys(Constant),
        Regex: Object.keys(Regex)
      }
    })
  );

  let README_DATA = await fs.readFile(
    path.resolve(__dirname, '../README.md'),
    'utf8'
  );

  README_DATA =
    `---
id: README
title: README
---

` + README_DATA;

  fs.writeFile(path.resolve(__dirname, '../docs/README.md'), README_DATA);

  // =================================================================================
  // remove temp files
  // =================================================================================

  fs.remove(tempBabelrcFolder);
  fs.remove(tempTsconfigFolder);
})();
