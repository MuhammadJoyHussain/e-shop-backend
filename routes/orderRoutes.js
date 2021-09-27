import express from 'express'
import {
    addOrderItems,
    getOrderId,
    updateOrderToPaid,
    getOrders
} from '../controller/orderController.js'
import { protect, admin } from '../middlewere/authMiddlewere.js'
const router = express.Router()

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/:id').get(protect, getOrderId)
router.route('/:id/pay').put(protect, updateOrderToPaid)

export default router