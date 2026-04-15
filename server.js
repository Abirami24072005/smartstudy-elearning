import express from 'express'
import cors from 'cors'

const app = express()

// Allow all origins (for deployment)
app.use(cors())

app.use(express.json())

app.post('/pay', (req, res) => {
  const { course, price, email, upi } = req.body

  setTimeout(() => {
    res.json({
      status: "success",
      transactionId: "TXN" + Math.floor(Math.random() * 1000000)
    })
  }, 1500)
})

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000")
})