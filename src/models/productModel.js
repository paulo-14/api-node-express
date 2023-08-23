import db from '../database/db.js';

const get = async (id) => {
    return await db.query('SELECT * FROM products WHERE id = ?;', [id])
}

const list = async () => {
    return await db.query('SELECT * FROM products;')
}

const create = async (product) => {
    const {name} = product
    return await db.query('INSERT INTO products (name) VALUES (?);', [name])
}

const update = async (product) => {
    const {id, name} = product
    return await db.query('UPDATE products SET name = ? WHERE id = ?;', [name, id])    
}

const remove = async (id) => {
    return await db.query('DELETE FROM products WHERE id = ?;', [id])
}

export default {get, list, create, update, remove}