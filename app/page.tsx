import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200">
      <div className="container mx-auto px-4 py-8">
        <section id="home">
          <Introduction />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  )
}


