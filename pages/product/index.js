
async function getStaticProps() {
    const resp = await fetch('http://localhost:5555/products')
    const data = await resp.json()
    return {
        props: {
            products: data
        },
        revalidate:10
    }
}

const Product = ({ products }) => {
    return (<>
        {
            products.map((val) =>
                <div key={val.id}>
                    <div>{val.id}</div>
                    <div>{val.title}</div>
                    <div>{val.price}</div>
                    <p>{val.description}</p>
                    <hr />
                </div>
            )

        }
    </>
    )
}

export default Product
export { getStaticProps}