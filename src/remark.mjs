import stripMarkdown from 'strip-markdown'
import { toString } from 'mdast-util-to-string'

export function excerpt() {
  return function (tree, { data }) {
    let value = structuredClone(tree)
    value = stripMarkdown({ keep: ['blockquote'], remove: ['image', 'imageReference'] })(value)
    value = toString(value).trim()
    const trimmedExcerpt =
      value.at(159) === ' '
        ? value.substring(0, 159).trim()
        : value.substring(0, 159).trim().split(' ').slice(0, -1).join(' ')
    data.astro.frontmatter.excerpt = `${trimmedExcerpt}…`
  }
}