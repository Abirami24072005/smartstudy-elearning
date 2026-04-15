import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Price() {
  const [searchParams] = useSearchParams()

  // Pre-fill from URL if coming from Course page (e.g. /price?course=React&price=59.90)
  const [courseName, setCourseName] = useState(searchParams.get('course') || '')
  const [coursePrice, setCoursePrice] = useState(searchParams.get('price') || '')
  const [email, setEmail] = useState('')
  const [upi, setUpi] = useState('')
  const [loading, setLoading] = useState(false)
  const [payResult, setPayResult] = useState(null)

  // updateButton() from script.js — now automatic via React state
  const payBtnLabel = coursePrice ? `Pay ₹${coursePrice}` : 'Pay Now'

  // makePayment() from script.js
  async function makePayment() {
    setLoading(true)
    try {
      const res = await fetch('/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ course: courseName, price: coursePrice, email, upi })
      })
      const data = await res.json()
      setPayResult({ course: courseName, price: coursePrice, transactionId: data.transactionId })
    } catch {
      alert('Payment failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />

      <section className="price">
        <div className="payment-card">
          <div className="payment-container">

            {payResult ? (
              // Success screen — replaces the innerHTML swap in script.js
              <div className="success-box" style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ fontSize: '4rem', color: 'green' }}>✔</div>
                <h2>Payment Successful</h2>
                <p style={{ fontSize: '2rem', color: 'var(--pink)', margin: '1rem 0' }}>₹{payResult.price}</p>
                <p>{payResult.course}</p>
                <p style={{ fontSize: '1.4rem', color: '#999', margin: '.5rem 0' }}>
                  Txn ID: {payResult.transactionId}
                </p>
                <a href="/" className="btn" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                  Go to Home
                </a>
              </div>
            ) : (
              // Payment form — exact same structure as your price.html
              <>
                <h2>Secure Payment</h2>

                <div className="input-group">
                  <label>Course Name</label>
                  <input
                    type="text"
                    id="courseName"
                    placeholder="Enter course name"
                    value={courseName}
                    onChange={e => setCourseName(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label>Amount (₹)</label>
                  {/* oninput="updateButton()" → onChange updates state, button label updates automatically */}
                  <input
                    type="number"
                    id="coursePrice"
                    placeholder="Enter amount"
                    value={coursePrice}
                    onChange={e => setCoursePrice(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>

                <div className="input-group">
                  <label>UPI ID</label>
                  <input
                    type="text"
                    id="upi"
                    placeholder="example@upi"
                    value={upi}
                    onChange={e => setUpi(e.target.value)}
                  />
                </div>

                {/* onclick="makePayment()" → onClick calls makePayment */}
                <button
                  className="pay-btn"
                  id="payBtn"
                  onClick={makePayment}
                  disabled={loading}
                >
                  {loading ? 'Processing...' : payBtnLabel}
                </button>

                <p className="secure-text">🔒 100% Secure Payment</p>
              </>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Price