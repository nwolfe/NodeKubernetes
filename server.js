const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;

let userRouter = express.Router()

userRouter.get('*', (req, res) => {
	res.status(200).json({hello: 'Nate, you have been onboarded'})
});

app.use(userRouter)

app.listen(PORT, () => {
	console.log('Hello Nate, welcome to Pipelines For Containers')
});
