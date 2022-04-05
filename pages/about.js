import Navbar from "../Components/Navbar"
import Styles from "../styles/about.module.css"
import Head from "next/head"
const about = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Navbar/>
      <h1 className={Styles.heading}>about US</h1>
      </>
  )
}

export default about