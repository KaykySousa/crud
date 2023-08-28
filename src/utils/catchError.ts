import { NextFunction, Request, Response } from "express"

export function catchError(action: (req: Request, res: Response) => any) {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await action(req, res)
		} catch (error) {
			next(error)
		}
	}
}
