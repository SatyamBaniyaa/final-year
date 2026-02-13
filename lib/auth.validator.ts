import * as  z from "zod";


const Login =z.object({
  email:z.email(),
  password:z.string().min(3,'')
})

const SignUp =z.object({
  email:z.email(),
  name: z.string().min(3, "Name is required"),
  password:z.string("min 12 characters")

})

const home =z.object({
  prompt:z.string().min(3,"minimum 10 words")

})

export { Login, SignUp, home}
