import {z} from 'zod'

export const registerSchema = z.object({
username: z.string({required_error:'Username es requerido'}),
email: z.string({required_error:'Email es requerido' }).email({message:'Email invalido'}),
password: z.string({
    required_error:'Password es requerido',
}).min(6,{message:'La contraseña debe de ser de almenos 6 carácteres'}),

});



export const loginSchema = z.object({
    username: z.string({required_error:'Username es requerido'}),
    email: z.string({required_error:'Email es requerido'
    }).email({message:'Email invalido'}),
    password: z.string({
        required_error:'Password es requerido',
    }).min(6,{message:'La contraseña debe de ser de almenos 6 carácteres'}),
    

});

