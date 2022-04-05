import Navbar from '../../Components/Navbar'
import Link from 'next/link'

export const getStaticProps = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await resp.json()
  return {
    props: {
      data
    }
  }
}
const index = ({ data }) => {
  return (
    <>
      <Navbar />
      {
        data.slice(0, 6).map((val) => {
          return (
            <div key={val.id}>
              <div>{val.id}</div>
              <Link href={`/blogs/${val.id}`}>{val.title}</Link>

            </div>
          )
        })}
    </>
  )
}

export default index