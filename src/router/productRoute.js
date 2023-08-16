import express from 'express'
import getProduct from '../controllers/product/getProduct.js'
import listProducts from '../controllers/product/listProducts.js'
import createProduct from '../controllers/product/createProduct.js'
import updateProduct from '../controllers/product/updateProduct.js'
import deleteProduct from '../controllers/product/deleteProduct.js'

const router = express.Router()

router.get('/', getProduct)
router.get('/list', listProducts)
router.post('/', createProduct)
router.put('/', updateProduct)
router.delete('/', deleteProduct)

export default router