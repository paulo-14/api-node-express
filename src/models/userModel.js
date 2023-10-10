import db from '../database/db.js';
import { z } from 'zod'

const userSchema = z.object({
    id: z.number({
        required_error: 'ID é obrigatório',
        invalid_type_error: 'ID deve ser um número',	
    }),
    name: z.string({
        required_error: 'Nome é obrigatório',
        invalid_type_error: 'Nome deve ser uma string',
    })
      .min(3, {message:'Nome deve ter no mínimo 3 caracteres'})
      .max(200, {message: 'Nome deve ter no máximo 200 caracteres'}),  
    email: z.string({
        required_error: 'Email é obrigatório',
        invalid_type_error: 'Email deve ser uma string',
    })
      .email({message: 'Email inválido'})
      .min(5, {message:'Email deve ter no mínimo 5 caracteres'})
      .max(500, {message: 'Email deve ter no máximo 500 caracteres'}),   
    pass: z.string({
        required_error: 'Senha é obrigatória',
        invalid_type_error: 'Senha deve ser uma string',
    })
    //.regex(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,500}$'), {message: 'Senha deve ter no mínimo 8 caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial'}),
      .min(6, {message:'Senha deve ter no mínimo 6 caracteres'})
      .max(500, {message: 'Senha deve ter no máximo 500 caracteres'}),
    photo: z.string({
        required_error: 'Foto é obrigatória',
        invalid_type_error: 'Foto deve ser uma string',
    })
        .url({message: 'A foto deve ser uma url válida'})
})

const validateCreateUser = (user) => {
    const partialUserSchema = userSchema.partial({id: true})
    return partialUserSchema.safeParse(user)
}

const validateUpdateUser = (user) => {
    const partialUserSchema = userSchema.partial({pass: true})
    return partialUserSchema.safeParse(user)
}

const get = async (id) => {
    return await db.query('SELECT * FROM users WHERE id = ?;', [id])
}

const list = async () => {
    return await db.query('SELECT * FROM users;')
}

const create = async (user) => {
    const {name, email, pass, photo} = user
    return await db.query('INSERT INTO users (name, email, pass, photo) VALUES (?, ?, ?, ?);', [name, email, pass, photo])
}

const update = async (user) => {
    const {id, name, email, pass, photo} = user
    return await db.query('UPDATE users SET name = ?, email = ?, pass = ?, photo = ? WHERE id = ?;', [name, email, pass, photo, id])    
}

const remove = async (id) => {
    return await db.query('DELETE FROM users WHERE id = ?;', [id])
}

export default {get, list, create, update, remove, validateCreateUser, validateUpdateUser}