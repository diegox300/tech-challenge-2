// src/app.ts
import express from 'express'
import postRoutes from './routes/post.routes'

const app = express()

app.use(express.json()) // it parses incoming requests with JSON payloads without this middleware, req.body will be undefined
app.use('/posts', postRoutes)

export default app
