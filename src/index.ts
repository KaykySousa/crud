import { app } from "./app"

const PORT = 3000

app.listen(PORT, () => {
	console.log("The server is running on port " + PORT)
})
