import Contact from "../components/Contact";
import About from "../components/Profile/About"
import '../assets/styles/profile.css'
import Experience from "../components/Profile/Experience";

export default function Profile() {
  return (
    <section className="profile">
      <section className="profile__intro">
        <h1>Hey 👋🏼 I'm Chinyere</h1>
      </section>
      <About />
      <Experience />
      <Contact />
    </section>
  )
}
