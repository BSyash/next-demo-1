import React from 'react'
// import { useRouter } from 'next/router'
export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    const paths = data.map((ele) => {
        return {
            params: {
                pageNo: ele.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pageNo
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await resp.json()
    return {
        props: {
            data
        }
    }
}

const pageNo = ({ data }) => {
    // const route = useRouter()
    // const pageNum = route.query.pageNo
    return (
        <div>
            <div>{data.id}</div>
            <div>{data.title}</div>
            <div>{data.body}</div>
            <date dateString={"January 1, 2020"} />
        </div>
    )
}

export default pageNo