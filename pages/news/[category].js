export async function getServerSideProps(context) {
    const { params, req, res, query } = context
    // console.log("query => ",query);
    // console.log("req => ", req.headers.cookie, "res => ", res);
    // res.setHeader('Set-cookie',["name=bigscal"])
    const { category } = params
    const resp = await fetch(`http://localhost:5555/news?category=${category}`)
    const data = await resp.json()
    return {
        props: {
            artcles: data,
            category
        }
    }
}

function ArticleListtedCategory({ artcles, category }) {
    return (
        <>
            <div>categpry is {category}</div>
            {
                artcles.map(artcle => <div>
                    <div>{artcle.id}</div>
                    <h1>{artcle.title} {artcle.description}</h1>
                </div>
                )
            }
        </>
    )
}

export default ArticleListtedCategory