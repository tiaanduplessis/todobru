const readDirRecur = require('read-dir-recur')

const parseFlags = require('./parse-flags')

module.exports = function whatTODO (opts = {}) {
  const { ignore, base, pattern, flags } = opts

  const dirs = readDirRecur({ readFile: true, pattern, ignore, base })

  let todos = []

  Object.keys(dirs).forEach(dir => {
    dirs[dir].forEach(file => {
      const current = parseFlags(file.content.toString(), { flags })

      if (current.length) {
        todos = [current.map(todo => Object.assign(file, todo)), ...todos]
      }
    })
  })

  return todos
}
