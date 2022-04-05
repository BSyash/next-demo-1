export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          productId: "1"
        }
      }
    ],
    fallback: false
  }
}
export async function getStaticProps(context) {
  const { params } = context
  const resp = await fetch(`http://localhost:5555/products/${params.productId}`)
  const data = await resp.json()
  return {
    props: {
      productData: data
    }
  }
}

const PerticulerProduct = ({ productData }) => {
  return (
    <div>
      <h2>{productData.id}</h2>
      <h1>{productData.title}</h1>
      <h3>{productData.price}</h3>
      <p>{productData.description}</p>
    </div>
  )
}

export default PerticulerProduct