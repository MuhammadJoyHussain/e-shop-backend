import express from 'express'
import { deleteProduct, getProductById, getProducts, createProduct, updateProduct } from '../controller/productController.js'
const router = express.Router()
import { protect, admin } from '../middlewere/authMiddlewere.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)

export default router