import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const teachers = [
  { id: 1, img: '/images/teacher new 1.png', name: 'Sarah Johnson' },
  { id: 2, img: '/images/teacher new 2.png', name: 'Elena Petrova' },
  { id: 3, img: '/images/teacher new 3.png', name: 'Dr.David' },
  { id: 4, img: '/images/teacher new 4.png', name: 'john deo' },
]

function Teacher() {
  return (
    <>
      <Navbar />

      <h1 className="heading">experienced teachers</h1>

      <section className="teacher">
        {teachers.map(t => (
          <div className="box" key={t.id}>
            <img src={t.img} alt={t.name} />
            <h3>{t.name}</h3>
            <span>teacher</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>
        ))}
      </section>

      {/* Home banner at the bottom — same as teacher.html */}
      <section className="home">
        <div className="content">
          <h3>E-learning is a better way of learning</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <Link to="/course" className="btn">get started</Link>
        </div>
        <div className="image">
          <img src="/images/home-img.svg" alt="" />
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Teacher
