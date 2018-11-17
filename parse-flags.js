const DEFAULT_FLAGS = ['TODO', 'FIXME', 'HACK']

const santize = current => current.toUpperCase().trim()

module.exports = function parseFlags (input = '', { flags = DEFAULT_FLAGS } = {}) {
  const flagPattern = `(${flags.map(santize).join('|')})`
  const pattern = new RegExp(`${flagPattern}:\\B(.+)\\n`, 'g')
  const matches = input.match(pattern)

  if (!matches) {
    return []
  }

  return matches.reduce((acc, current) => {
    const colonIndex = current.indexOf(':')
    const hashIndex = current.indexOf('#')

    const data = {
      flag: current.slice(0, colonIndex),
      desc: current.slice(colonIndex + 1, hashIndex).trim(),
      tags: [],
      pairs: {}
    }

    current.slice(hashIndex).split(' ').forEach(current => {
      if (current[0] === '#') {
        if (current.includes('=')) {
          const [key, value] = current.split('=')
          data.pairs[key.slice(1)] = value.trim()
        } else {
          const tag = current.slice(1).trim()
          data.tags.push(tag)
        }
      }
    })

    acc.push(data)
    return acc
  }, [])
}
