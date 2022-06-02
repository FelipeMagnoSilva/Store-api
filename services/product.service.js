import productRepositorie from '../repositories/product.repositorie.js'
import supplierRepositorie from '../repositories/supplier.repositorie.js'

async function creatProduct(product) {
    if (await supplierRepositorie.getSupplier(product.supplier_id)){
        return await productRepositorie.insertProduct(product)
    }
    throw new Error('supplier_id informado não existe.')
}

async function getProducts(){
    return productRepositorie.getProducts()
}

async function getProduct(id){
    return productRepositorie.getProduct(id)
}

async function deleteProduct(id){
    return productRepositorie.deleteProduct(id)
}

async function updateProduct(product){
    if (await supplierRepositorie.getSupplier(product.supplier_id)){
        return await productRepositorie.updateProduct(product)
    }
    throw new Error('supplier_id informado não existe.')
}

export default {
    creatProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}