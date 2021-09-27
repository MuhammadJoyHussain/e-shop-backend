import express from 'express'
import {
    addOrderItems,
    getOrderId,
    updateOrderToPaid,
    getOrders,
    updateOrderToDelivered
} from '../controller/orderController.js'
import { protect, admin } from '../middlewere/authMiddlewere.js'
const router = express.Router()

router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders)
router.route('/:id').get(protect, getOrderId)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered)

export default router