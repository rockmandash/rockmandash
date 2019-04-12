import { reJSDoc } from '../../regex';

/**
 * Strip JSDoc text from given string.
 */

function stripJSDoc(sourceCode: string): string[] {
  const JSDocs = sourceCode.match(reJSDoc);

  if (JSDocs === null) {
    return [];
  } else {
    return JSDocs.map(JSDoc => {
      const JSDocLines = JSDoc.split('\n');
      if (JSDocLines.length < 3) {
        return '';
      } else {
        return JSDocLines.slice(1, JSDocLines.length - 1)
          .map(JSDocLine => JSDocLine.replace(/^ *\* ?/, ''))
          .join('\n');
      }
    });
  }
}

export default stripJSDoc;
