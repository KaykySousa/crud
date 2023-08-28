import { Request, Response } from "express"
import { HTTPError } from "../errors/HTTPError"
import { UserRepository } from "../repositories/userRepository"

export class UserController {
	static async create(req: Request, res: Response) {
		const { name, email } = req.body

		if (!name || !email) throw new HTTPError("Missing parameters")

		const userRepository = new UserRepository()

		const userAlreadyExists = await userRepository.findByEmail(email)

		if (userAlreadyExists) throw new HTTPError("User already exists", 409)

		const user = await userRepository.create({ name, email })

		return res.status(201).json(user)
	}

	static async findAll(req: Request, res: Response) {
		const userRepository = new UserRepository()
		const users = await userRepository.findAll()

		return res.status(200).json(users)
	}

	static async findOne(req: Request, res: Response) {
		const { id } = req.params

		const userRepository = new UserRepository()
		const user = await userRepository.findById(Number(id))

		if (!user) throw new HTTPError("User not found", 404)

		return res.status(200).json(user)
	}

	static async delete(req: Request, res: Response) {
		const { id } = req.params

		if (!id) throw new HTTPError("Missing user id")

		const userRepository = new UserRepository()
		const deleted = await userRepository.delete(Number(id))

		if (!deleted) throw new HTTPError("User not found", 404)

		return res.status(200).json({ deleted })
	}

	static async update(req: Request, res: Response) {
		const { id } = req.params
		const { name, email } = req.body

		if (!id) throw new HTTPError("Missing user id")

		const userRepository = new UserRepository()
		const updated = await userRepository.update(Number(id), { name, email })

		if (!updated) throw new HTTPError("User not found", 404)

		return res.status(200).json({ updated })
	}
}
