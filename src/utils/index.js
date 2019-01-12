export const normalizeProduct = ({ node }) => {
  const variant = node.variants.edges[0].node
  return {
    id: node.id,
    slug: node.slug,
    title: node.title,
    price: variant.price,
    image: {
      src: variant.image.src
    }
  }
}

export const formatTitleForUrl = (title = '') => {
  const matchSpaces = /\s/g
  return title.toLowerCase().replace(matchSpaces, '_')
}