export const normalizeProduct = ({ node }) => {
  const variant = node.variants.edges[0].node
  return {
    id: node.id,
    title: node.title,
    price: variant.price,
    image: {
      src: variant.image.src
    }
  }
}