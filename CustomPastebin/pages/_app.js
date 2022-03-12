import Head from 'next/head'
import Image from 'next/image'
// import 'bootstrap/scss/bootstrap.scss'
import '../styles/globals.scss'
import '../styles/globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        
      </Head>

      <div className="container">
        <Nav />
        <Component {...pageProps} />
      </div>

      <Footer />
    </>
  )
}

export default MyApp
