import Header from "./assets/Components/Header.jsx"
import TopLinks from "./assets/Components/topLinks.jsx"
import AboutPortions from "./assets/Components/AboutPortions.jsx"
import SkillTabs from "./assets/Components/SkillTabs.jsx"
import SkillSpan from "./assets/Components/SkillSpan.jsx"
import Projects from "./assets/Components/Projects.jsx"
import Experiences from "./assets/Components/Experiences.jsx"
import Contacts from "./assets/Components/Contacts.jsx"
import Footer from "./assets/Components/Footer.jsx"

const App = () => {
  return(
    <>
      <head>
      <title>Portfolio</title>
      </head>

      <body>
        <nav className ="sticky top-0 z-10 border-b border-stone-200 bg-white">
          <div className ="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
              <Header name ="Sean Riley Dela Cruz" link ="#top" />
            <div className ="flex gap-6 text-sm text-stone-600">
                <Header name ="About" link ="#about" />
                <Header name ="Skill" link ="#skills" />
                <Header name ="Projects" link ="#projects" />
                <Header name ="Experience" link ="#experience" />
                <Header name ="Contacts" link ="#contact" />
            </div>
          </div>
        </nav>

        <header id = "#top" className ="max-w-4xl mx-auto px-6 pt-20 pb-16 scroll-mt-16">
          <p className ="text-sm font-medium text-stone-500"> Hi! I am </p>
          <h1 className ="mt-2 text-5xl font-semibold tracking-tight">Sean Riley Dela Cruz</h1>
          <p className ="mt-4 max-w-xl text-lg leading-relaxed text-stone-600">Third year IT student</p>

          <TopLinks />
        </header>

        <main>

          <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <p className="mt-2 text-stone-600">A little about who I am</p>
            <p className ="mt-6 max-w-2xl leading-relaxed text-stone-700">I grew up in cebu city</p>

            <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <AboutPortions name="Course" desc="BS Information Technology" />
              <AboutPortions name="Year Level" desc="Third year" />
              <AboutPortions name="School" desc="CIT-U" />
              <AboutPortions name="Based in" desc="Cebu City" />
            </dl>
          </section>

          <section id ="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
            <p className="mt-2 text-stone-600">What I work with.</p>

            <div className ="mt-8 grid gap-8 sm:grid-cols-3">
              <SkillTabs name="Languages">
                <SkillSpan label="HTML"/>
                <SkillSpan label="CSS"/>
                <SkillSpan label="JavaScript"/>
                <SkillSpan label="Java"/>
              </SkillTabs>

              <SkillTabs name="Frameworks">
                <SkillSpan label="React"/>
                <SkillSpan label="Tailwind CSS"/>
                <SkillSpan label="Bootstrap"/>
              </SkillTabs>

              <SkillTabs name="Tools">
                <SkillSpan label="Git" />
                <SkillSpan label="VS Code" />
                <SkillSpan label="MySQL" />
                <SkillSpan label="Figma" />
              </SkillTabs>
            </div>
          </section>

          <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <p className="mt-2 text-stone-600">Things I have built</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">

              <Projects 
                date="2026" 
                title="About Me in React" 
                desc="My first React project, rebuilt from a plain HTML page." 
                lang="React · Tailwind CSS"
                link="https://github.com/juandelacruz/CSIT340-Lab1-DelaCruz"
                linkDesc="View on GitHub" />

              <Projects  
                date="2025"
                title="Canteen Queue"
                desc="A page that shows how long the canteen line is so students can decide when to go."
                lang="HTML · CSS · JavaScript"
                link="https://github.com/juandelacruz/canteen-queue"
                linkDesc="View on GitHub" />

              <Projects
                date="2025"
                title="Clinic Records"
                desc="A desktop app for our database class that keeps visit records for a small clinic."
                lang="Java · MySQL"
                link="https://github.com/juandelacruz/clinic-records"
                linkDesc="View on GitHub" />

            </div>
          </section>

          <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
            <p className="mt-2 text-stone-600">Where I have learned and worked.</p>

            <ol className="mt-8 space-y-8 border-l border-stone-200">
              <Experiences
                date ="2024 – Present"
                title="BS Information Technology"
                where="Cebu Institute of Technology – University"
                desc="Taking up web development, databases, and systems analysis." />

              <Experiences
                date ="2025"
                title="Student Assistant"
                where="CCS Computer Laboratory"
                desc="Set up lab machines and helped students with software installs." />
            </ol>
          </section>
          
          <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 text-stone-600">Say Hi!</p>

            <ul className="mt-8 space-y-3">
              <Contacts name="Email" link="mailto:juan.delacruz@cit.edu" desc="juan.delacruz@cit.edu" />
              <Contacts name="GitHub" link="https://github.com/juandelacruz" desc="github.com/juandelacruz" />
              <Contacts name="LinkedIn" link="https://linkedin.com/in/juandelacruz" desc="linkedin.com/in/juandelacruz" />
            </ul>
          </section>

        </main>

        <Footer desc="© 2026 Juan dela Cruz. Built with React and Tailwind CSS for CSIT340." />

      </body>
    </>
  )
}

export default App