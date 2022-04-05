
export async function getServerSideProps() {
    const resp = await fetch("http://localhost:5555/news")
    const data = await resp.json();
    return {
        props: {
            articles: data
        }
    }
}

const News = ({articles}) => {
    return (
        <div>
            {
                articles?.map(article => <div key={article.id}>
                    <h1>{article.id} {article.title} | { article.description}</h1>
                </div>)
        
            }
        </div>
    )
}

export default News