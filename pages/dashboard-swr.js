import useSWR from "swr"

const fetcher = async () => {
    const resp = await fetch("http://localhost:5555/dashboard")
    const data = await resp.json()
    console.log(data);
    return data[0]
}

const DashboardSwr = () => {
    const { data, error } = useSWR('/dashboard', fetcher)
    if (error) {
        return <h1>failed to load !</h1>
    }
    if (!data) {
        return "loading..."
    }
    return (
        <div>
            { console.log(data,"++++++++++")}
            <h2> posts { data?.posts}</h2>
            <h2>likes { data?.likes}</h2>
            <h2>followers { data?.followers}</h2>
            <h2>followings { data?.following}</h2>
        </div>
    )
    
}

export default DashboardSwr