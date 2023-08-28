import { NextFunction, Request, Response } from "express"
import { HTTPError } from "../errors/HTTPError"

export function errorHandler(error: unknown, req: Request, res: Response, next: NextFunction) {
	console.log(error)
	if (error instanceof HTTPError) {
		return res.status(error.statusCode).json({
			status: error.statusCode,
			message: error.message,
		})
	}

	return res.status(500).json({
		status: 500,
		message: "Internal server error",
	})
}
