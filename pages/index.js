import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Michael | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building  exceptional digital experiences." />
        <link rel="icon" href="" /> 
        {/* insert logo address in link to display fav icon */}
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}
