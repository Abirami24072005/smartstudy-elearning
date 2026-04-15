import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className="footer">
      <div className="box-container">

        <div className="box">
          <h3>about us</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, maxime!</p>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <Link to="/">home</Link>
          <Link to="/course">course</Link>
          <Link to="/teacher">teacher</Link>
          <Link to="/price">price</Link>
          <Link to="/review">review</Link>
          <Link to="/contact">contact</Link>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <a href="#">facebook</a>
          <a href="#">twitter</a>
          <a href="#">instagram</a>
          <a href="#">linkedin</a>
        </div>

        <div className="box">
          <h3>contact us</h3>
          <p><i className="fas fa-phone"></i> +123-456-7890</p>
          <p><i className="fas fa-envelope"></i> studysmart@gmail.com</p>
          <p><i className="fas fa-map-marker-alt"></i> mumbai, india - 400104</p>
        </div>

      </div>
      <div className="credit">
        created by <span>Abirami</span> | all rights reserved
      </div>
    </section>
  )
}

export default Footer
