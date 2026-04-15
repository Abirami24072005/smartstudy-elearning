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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});