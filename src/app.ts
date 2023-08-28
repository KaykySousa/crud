import express from "express"
import { userRouter } from "./routes/user.routes"
import { errorHandler } from "./utils/errorHandler"

export const app = express()
app.use(express.json())

app.use("/users", userRouter)

app.use(errorHandler)

app.use("*", (req, res) => {
	return res.status(404).json({
		status: 404,
		message: "Route not found",
	})
})
