import { useEffect, useState } from "react"

const Dashboard = () => {
    const [dashData, setdashData] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const resp = await fetch("http://localhost:5555/dashboard")
            const data = await resp.json()
            setdashData(data[0])
        }
        getData()
    }, [])

    return (
        <div>
            <h3>posts = {dashData?.posts}</h3>
            <h1>likes = {dashData?.likes}</h1>
            <h2>followers = {dashData?.followers}</h2>
            <h2>following = {dashData?.following}</h2>
        </div>
    )
}

export default Dashboard