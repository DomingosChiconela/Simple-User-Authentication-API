
import  express from "express"

import { login, logout, signup } from "../controllers/authController"




export const  authRoute =  express.Router()

authRoute.post("/signup",signup)
authRoute.post("/login",login)
authRoute.post("/logout",logout)











