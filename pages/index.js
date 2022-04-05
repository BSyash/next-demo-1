import Navbar from '../Components/Navbar'
import Image from "next/image"
import Head from 'next/head'
import Script from "next/script"
const index = () => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <Navbar />
      <Script strategy='lazyOnload' onLoad={() => console.log("run script")} />

      {/* <Image src="https://images.unsplash.com/photo-1640622658353-c6cecbe91488?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" width={500} height={500} /> */}

    </>
  )
}

export default index