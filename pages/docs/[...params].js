import React from 'react'
import { useRouter } from 'next/router'

const Doc = () => {
    const router = useRouter();
    const { params = [] } = router.query
    if (params.length === 2) {
        return <h1> no is {params[0]} and funda is {params[1]}</h1>
    } else if (params.length === 1) {
        return <><h1>no is {params[0]}</h1>
            <style jsx>
                {`
            h1{
                color:red;
            }
            `}
            </style></>
    }
    return <>
        <h1>doc file</h1>
        <style jsx>
            {`
            h1{
                color:'red';
            }
            `}
        </style>
    </>

}

export default Doc