console.log("Loading dotenv...")

const dotenv = require("dotenv")
dotenv.config()

console.log("Razorpay Key from ENV:", process.env.RAZORPAY_KEY)
console.log("Razorpay Secret from ENV:", process.env.RAZORPAY_SECRET)

const Razorpay = require("razorpay")

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
})

module.exports = instance
