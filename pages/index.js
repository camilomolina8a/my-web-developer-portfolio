import Head from 'next/head'
import { Navbar, Hero, About,Projects, Contact} from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Portfolio</title>
        <meta name="description" content="Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}
