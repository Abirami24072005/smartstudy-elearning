import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// addReview() and displayReviews() from script.js are now React state:
//   document.getElementById("reviewContainer").innerHTML = ""  →  .map() in JSX
//   localStorage read/write stays exactly the same

function Review() {
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  // Load saved reviews from localStorage on first render
  // Same as: JSON.parse(localStorage.getItem("reviews")) || []
  const [reviews, setReviews] = useState(
    () => JSON.parse(localStorage.getItem('reviews')) || []
  )

  // Replaces addReview() from script.js
  function addReview() {
    if (name === '' || text === '') {
      alert('Please fill all fields')
      return
    }
    const newReview = { name, text }
    const updated = [...reviews, newReview]
    setReviews(updated)
    localStorage.setItem('reviews', JSON.stringify(updated))
    // Clear inputs — same as setting .value = "" in script.js
    setName('')
    setText('')
  }

  return (
    <>
      <Navbar />

      <h1 className="heading">student's review</h1>

      {/* Add Review form — same inputs as review.html */}
      <section className="add-review">
        <h2>Add Your Review</h2>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <textarea
          id="reviewText"
          placeholder="Write your review"
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
        {/* onClick replaces onclick="addReview()" */}
        <button onClick={addReview} className="btn">Submit</button>
      </section>

      {/* Review cards — replaces displayReviews() DOM loop with .map() */}
      <section className="review" id="reviewContainer">
        {reviews.map((r, i) => (
          <div className="box" key={i}>
            <div className="student">
              <div className="student-info">
                <img src="/images/student-1.png" alt={r.name} />
                <div className="info">
                  <h3>{r.name}</h3>
                  <span>student</span>
                </div>
              </div>
              <i className="fas fa-quote-right"></i>
            </div>
            <p className="text">{r.text}</p>
          </div>
        ))}
      </section>

      <Footer />
    </>
  )
}

export default Review
