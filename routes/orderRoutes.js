import express from 'express'
import {
    addOrderItems,
    getOrderId,
    updateOrderToPaid
} from '../controller/orderController.js'
import { protect } from '../middlewere/authMiddlewere.js'
const router = express.Router()

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderId)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router