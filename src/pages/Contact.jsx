import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
      <Navbar />

      <h1 className="heading">contact us</h1>

      <section className="contact">
        <div className="image">
          <img src="/images/contact-img.svg" alt="contact" />
        </div>

        {/* onSubmit={e => e.preventDefault()} replaces action="" */}
        <form onSubmit={e => e.preventDefault()}>
          <div className="inputBox">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
          </div>
          <input type="text" placeholder="subject" className="box" />
          <textarea placeholder="message" cols="30" rows="10"></textarea>
          <input type="submit" className="btn" value="send" />
        </form>
      </section>

      <Footer />
    </>
  )
}

export default Contact
