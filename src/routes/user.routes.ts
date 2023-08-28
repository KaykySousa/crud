import { Router } from "express"
import { UserController } from "../controllers/UserController"
import { catchError } from "../utils/catchError"

export const userRouter = Router()

userRouter.get("/", catchError(UserController.findAll))
userRouter.get("/:id", catchError(UserController.findOne))
userRouter.post("/", catchError(UserController.create))
userRouter.delete("/:id", catchError(UserController.delete))
userRouter.patch("/:id", catchError(UserController.update))
