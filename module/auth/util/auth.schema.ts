import { userSchema } from "../../user/util/user.schema";
import { LoginDTO, RegisterDTO } from "../types/auth.dto";
import { ZodType } from "zod";

export const registerDTOSchema = userSchema.pick({
    name: true,
    email: true,
    password: true,
    avatar: true
    })satisfies ZodType<RegisterDTO>;



    export const loginDTOSchema = userSchema.pick({ 
        email: true,
        password: true
    })satisfies ZodType<LoginDTO>;