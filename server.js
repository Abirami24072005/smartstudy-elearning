import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

// ✅ ADD THIS HERE
app.get('/', (req, res) => {
  res.send("Backend is running 🚀")
})

// Your existing API
app.post('/pay', (req, res) => {
  const { course, price, email, upi } = req.body

  setTimeout(() => {
    res.json({
      status: "success",
      transactionId: "TXN" + Math.floor(Math.random() * 1000000)
    })
  }, 1500)
})

// PORT (already fixed)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`)
})