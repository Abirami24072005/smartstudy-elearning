import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TOTAL_LESSONS = 3

const courses = [
  {
    id: 1,
    img: '/images/course1.jpg',
    title: 'Full-Stack Development',
    price: 4999,
    duration: '6 months',
    lectures: '120 lectures',
    modules: '12 modules',
    level: 'Beginner to Advanced',
    certification: true,
    description: 'Learn to build complete web applications from scratch. Covers HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB with real-world projects.',
    topics: ['HTML & CSS', 'JavaScript & React', 'Node.js & Express', 'MongoDB & REST APIs', 'Git & Deployment'],
  },
  {
    id: 2,
    img: '/images/course2.jpg',
    title: 'Data Science',
    price: 5999,
    duration: '5 months',
    lectures: '100 lectures',
    modules: '10 modules',
    level: 'Intermediate',
    certification: true,
    description: 'Master data analysis, visualization, and machine learning using Python, Pandas, NumPy, and Scikit-learn on real industry datasets.',
    topics: ['Python & Pandas', 'Data Visualization', 'Machine Learning', 'Statistics', 'Capstone Project'],
  },
  {
    id: 3,
    img: '/images/course3.jpg',
    title: 'Security & Networking',
    price: 3999,
    duration: '4 months',
    lectures: '90 lectures',
    modules: '9 modules',
    level: 'Intermediate',
    certification: true,
    description: 'Understand cybersecurity fundamentals, ethical hacking, and network protocols. Hands-on labs and penetration testing simulations included.',
    topics: ['Network Protocols', 'Ethical Hacking', 'Firewalls & VPNs', 'Cryptography', 'Penetration Testing'],
  },
  {
    id: 4,
    img: '/images/course4.jpg',
    title: 'AI & Ethics',
    price: 2999,
    duration: '3 months',
    lectures: '70 lectures',
    modules: '7 modules',
    level: 'Beginner',
    certification: true,
    description: 'Explore artificial intelligence, deep learning, and the ethical responsibilities of AI development with real-world case studies.',
    topics: ['AI Fundamentals', 'Deep Learning', 'Bias & Fairness', 'AI in Society', 'Policy & Regulation'],
  },
  {
    id: 5,
    img: '/images/course5.jpg',
    title: 'DevOps & Cloud Infrastructure',
    price: 6999,
    duration: '5 months',
    lectures: '110 lectures',
    modules: '11 modules',
    level: 'Advanced',
    certification: true,
    description: 'Learn DevOps with AWS, Docker, Kubernetes, and CI/CD pipelines. Automate deployments and manage scalable cloud infrastructure.',
    topics: ['Docker & Kubernetes', 'AWS & Azure', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging'],
  },
  {
    id: 6,
    img: '/images/course6.jpg',
    title: 'Creative Tech & Game Development',
    price: 4599,
    duration: '6 months',
    lectures: '130 lectures',
    modules: '12 modules',
    level: 'Beginner to Advanced',
    certification: true,
    description: 'Build 2D and 3D games using Unity and Unreal Engine. Learn game physics, animations, and how to publish your game on multiple platforms.',
    topics: ['Unity & C#', 'Game Physics', '3D Modelling', 'Unreal Engine', 'Publishing & Monetization'],
  },
]

function Course() {
  const navigate = useNavigate()

  const [completed, setCompleted] = useState(
    () => JSON.parse(localStorage.getItem('completedLessons')) || []
  )

  function selectCourse(title, price) {
    navigate(`/price?course=${encodeURIComponent(title)}&price=${price}`)
  }

  function completeLesson(lesson) {
    if (!completed.includes(lesson)) {
      const updated = [...completed, lesson]
      setCompleted(updated)
      localStorage.setItem('completedLessons', JSON.stringify(updated))
    }
  }

  const percent = Math.round((completed.length / TOTAL_LESSONS) * 100)

  return (
    <>
      <Navbar />

      <h1 className="heading">Popular Courses</h1>

      <section className="course">
        {courses.map(c => (
          <div className="box" key={c.id}>

            {/* Price badge */}
            <span className="amount">₹{c.price.toLocaleString('en-IN')}</span>

            {/* Course image */}
            <img src={c.img} alt={c.title} />

            {/* Stars */}
            <div className="stars">
              {[1,2,3,4,5].map(s => <i key={s} className="fas fa-star"></i>)}
            </div>

            {/* Title */}
            <h3>{c.title}</h3>

            {/* Level */}
            <span className="course-level">
              <i className="fas fa-signal"></i> {c.level}
            </span>

            {/* Description */}
            <p>{c.description}</p>

            {/* What you'll learn */}
            <div className="course-topics">
              <p className="topics-heading">
                <i className="fas fa-check-circle"></i> What you'll learn
              </p>
              <ul>
                {c.topics.map(t => (
                  <li key={t}><i className="fas fa-check"></i> {t}</li>
                ))}
              </ul>
            </div>

            {/* Certificate badge */}
            {c.certification && (
              <div className="cert-badge">
                <i className="fas fa-certificate"></i> Certificate of Completion Included
              </div>
            )}

            {/* Enroll button */}
            <a
              href="#"
              className="btn"
              onClick={e => { e.preventDefault(); selectCourse(c.title, c.price) }}
            >
              Buy Now
            </a>

            {/* Icons row */}
            <div className="icons">
              <p><i className="far fa-clock"></i> {c.duration}</p>
              <p><i className="fas fa-play-circle"></i> {c.lectures}</p>
              <p><i className="fas fa-book"></i> {c.modules}</p>
            </div>

          </div>
        ))}
      </section>

      <Footer />
    </>
  )
}

export default Course