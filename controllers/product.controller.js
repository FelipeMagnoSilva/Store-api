import productService from '../services/product.service.js'

async function creatProduct(req, res, next) {
    try {
        let product = req.body
        if (!product.name || !product.description || !product.value || !product.stok || !product.supplierId) {
            throw new Error("name, description, value, stok e supplierId são obrigatórios.")
        }
        //productService
        res.send(await productService.creatProduct(product))
        logger.info(`POST /product - ${JSON.stringify(product)}`)
    } catch (err) {
        next(err)
    }
}

async function getProducts(req, res, next){
    try{
        res.send(await productService.getProducts()) 
        logger.info(`GET/product`)
    }catch(err){
        next(err)
    }
}


async function getProduct(req, res, next){
    try{    
        res.send( await productService.getProduct(req.params.id))
        logger.info(`GET/product/:id ${req.params.id}`)
    }catch(err){
        next(err)
    }
}

async function deleteProduct(req, res, next){
    try{
        res.send(await productService.deleteProduct(req.params.id))
        logger.info(`DELETE/product/:id ${req.params.id}`)
    }catch(err){
        next(err)
    }
}

async function updateProduct(req, res, next){
    try{
        let product = req.body
        if(!product.productId || !product.name || !product.description || !product.value || !product.stok || !product.supplierId){
            throw new Error("productId, name, description, value, stok e supplierId são obrigatórios.")
        }

        res.send(await productService.updateProduct(product))
        logger.info(`PUT/product ${JSON.stringify(product)}`)
    }catch(err){
        next(err)
    }
}


export default {
    creatProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}