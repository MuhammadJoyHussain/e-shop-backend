import express from 'express'
import asynctHandler from 'express-async-handler'
const router = express.Router()
import Product from './../models/ptoductModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

router.get('/',
    asynctHandler(async (req, res) => {
        const products = await Product.find({})

        res.json(products)
    })
)

// @desc    Fetch single products
// @route   GET /api/products
// @access  Public

router.get('/:id',
    asynctHandler(async (req, res) => {
        const product = await Product.findById(req.params.id)

        if (product) {
            res.json(product)
        } else {
            res.status(404)
            throw new Error('Product Not Found')
        }
        res.json(product)
    })
)

export default router