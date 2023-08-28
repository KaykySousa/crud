export class HTTPError extends Error {
	constructor(public message: string, public readonly statusCode: number = 400) {
		super(message)
	}
}
