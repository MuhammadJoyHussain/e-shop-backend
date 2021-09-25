import asynctHandler from 'express-async-handler'
import Product from './../models/ptoductModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

const getProducts = asynctHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
})


// @desc    Fetch single products
// @route   GET /api/products
// @access  Public

const getProductById = asynctHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product Not Found')
    }
})

export {
    getProducts,
    getProductById
}