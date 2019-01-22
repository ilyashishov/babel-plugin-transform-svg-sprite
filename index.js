const path = require('path')
const crypto = require('crypto')
const fs = require('fs')

module.exports = function (conf) {
    const types = conf.types;

    function replaceSVG(filename, path) {
        let data = fs.readFileSync(path)
        const md5 = crypto.createHash('md5').update(data).digest('hex')
        return {id: `${filename.replace('.svg', '')}__${md5}`}
    }

    return {
        visitor: {
            CallExpression: {
                enter: function enter(nodePath, state) {
                    const callee = nodePath.get('callee')
                    const arg = nodePath.get('arguments')[0]

                    if (callee.isIdentifier() && callee.equals('name', 'require') && arg && arg.isStringLiteral() && path.extname(arg.node.value) === '.svg') {
                        const srcPath = path.dirname(path.resolve(state.file.opts.filename))
                        nodePath.replaceWith(types.valueToNode(replaceSVG(path.basename(arg.node.value), path.resolve(srcPath, arg.node.value))))
                    }
                }
            }
        }
    }
}
