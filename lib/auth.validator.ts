import * as  z from "zod";


const Login =z.object({
  email:z.email(),
  password:z.string().min(3,'')
})

const Signin =z.object({
  email:z.email(),
  password:z.string("min 12 characters")

})

export { Login,Signin}
