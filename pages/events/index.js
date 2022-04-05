import { useState } from "react"
import { useRouter } from "next/router"
const Events = ({ events }) => {
    const [allEvents, setAllEvents] = useState(events)
    const router = useRouter()
    const fetchSportsEvents = async () => {
        const resp = await fetch("http://localhost:5555/events?category=sports")
        const data = await resp.json()
        setAllEvents(data)
        router.push('/events/category=tech', undefined, { shallow: true })
    }
    return (
        <div>
            <h1>Events </h1>
            <button onClick={fetchSportsEvents}>Sports</button>
            {
                allEvents.map((event) => <div>
                    <h2>{event.id} | {event.events} | {event.eventDate} | {event.category}</h2>
                </div>)

            }

        </div>
    )
}

export default Events

export async function getServerSideProps(context) {
    const { query } = context
    const { category } = query
    const queryString = category ? "category=tech" : ""
    const resp = await fetch(`http://localhost:5555/events?${queryString}`)
    const data = await resp.json()
    return {
        props: {
            events: data
        }
    }
}
