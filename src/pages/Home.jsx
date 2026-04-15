import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />

      <section className="home">
        <div className="content">
          <h3>E-learning is a better way of learning</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Mollitia repellat aperiam libero, beatae debitis iusto quia sit aliquid placeat facilis?
          </p>
          {/* Link to="/course" replaces href="course.html" */}
          <Link to="/course" className="btn">get started</Link>
        </div>

        <div className="image">
          <img src="/images/Gemini_Generated_Image_5lp6z35lp6z35lp6.png" alt="e-learning" />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Home
