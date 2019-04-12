function macro(obj) {
  obj.state.file.path.node.body.forEach(node => {
    if (node.type === 'ImportDeclaration') {
      if (node.source.value.includes('rockmandash/macro')) {
        if (process.env.NODE_ENV === 'production') {
          node.source.value = 'rockmandash/esm/production';
        } else {
          node.source.value = 'rockmandash/esm/development';
        }
      }
    }
  });

  return { keepImports: true };
}

module.exports = require('babel-plugin-macros').createMacro(macro);
