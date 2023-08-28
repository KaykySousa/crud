import { CreationAttributes } from "sequelize"
import { User } from "../models/User"

export class UserRepository {
	async create({ name, email }: CreationAttributes<User>) {
		return await User.create({ name, email })
	}

	async findAll() {
		return await User.findAll()
	}

	async findById(id: number) {
		return await User.findByPk(id)
	}

	async findByEmail(email: string) {
		return await User.findOne({
			where: {
				email,
			},
		})
	}

	async delete(id: number) {
		const deleted = await User.destroy({
			where: {
				id,
			},
		})

		return !!deleted
	}

	async update(id: number, { name, email }: CreationAttributes<User>) {
		const updated = await User.update(
			{
				name,
				email,
			},
			{
				where: {
					id,
				},
			}
		)

		return !!updated[0]
	}
}
