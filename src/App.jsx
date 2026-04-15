import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home     from './pages/Home'
import Course   from './pages/Course'
import Teacher  from './pages/Teacher'
import Price    from './pages/Price'
import Review   from './pages/Review'
import Contact  from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      {/* The .container div that wraps every page in the original HTML */}
      <div className="container">
        <Routes>
          <Route path="/"        element={<Home />}    />
          <Route path="/course"  element={<Course />}  />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/price"   element={<Price />}   />
          <Route path="/review"  element={<Review />}  />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
