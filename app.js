import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 3000
console.log(process.env.PORT)


app.get('/', (req, res) => {
	res.send(`
		<h1>Curso ExpressJS v2</h1>
		<p>Esto es una aplicion nodejn con expressjs</p>
		<p>Corre en el puerto ${PORT}</p>
		`)
})

app.listen(PORT, () => {
	console.log(`Servidor: https://localhost:${PORT}`)
})
