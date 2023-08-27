import dotenv from 'dotenv'
import express from 'express'
import { connectDB } from './config/db.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()

const port = process.env.PORT || 5000
const app = express()

/**Routes */
app.use('/api/users', userRoutes)
app.get('/', (req, res) => res.send('Server is ready'))

/**Middleware */
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server stared on port ${port}`))
