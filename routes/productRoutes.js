import express from 'express'
import { deleteProduct, getProductById, getProducts } from '../controller/productController.js'
const router = express.Router()
import { protect, admin } from '../middlewere/authMiddlewere.js'

router.route('/').get(getProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct)

export default router