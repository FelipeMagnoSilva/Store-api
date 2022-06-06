import saleRepositorie from '../repositories/sale.repositorie.js'
import clientRepositorie from '../repositories/client.repositorie.js'
import productRepositorie from '../repositories/product.repositorie.js'

async function creatSale(sale) {
    const error = []
    if(!await clientRepositorie.getClient(sale.clientId)){
        error.push('client_id não existe.')
    }

    const product = await productRepositorie.getProduct(sale.productId)
    if(!product){
        error.push('product_id não existe.')
    }
    if(error.length >  0){
        throw error
    }

    if(product.stok > 0){
        const res =  await saleRepositorie.insertSale(sale)
        product.stok--
        await productRepositorie.updateProduct(product)
        return res
    }else{
        throw new Error('Produto sem estoque.')
    }
}

async function getSales(productId, supplierId) {
    if (productId){
        return await saleRepositorie.getSalesByProductId(productId)
    }
    if (supplierId){
        return await saleRepositorie.getSalesBySupplierId(supplierId)
    }
    return await saleRepositorie.getSales()
}

async function getSale(id) {
    return saleRepositorie.getSale(id)
}

async function deleteSale(id) {
    const sale = await saleRepositorie.getSale(id)
    if(sale){
        const res = await saleRepositorie.deleteSale(id)
        let product = await productRepositorie.getProduct(sale.productId)
        product.stok++
        await productRepositorie.updateProduct(product)
        return res
    } else {
        throw new Error('O id da sale informado nao existe.')
    }
}

async function updateSale(sale) {
    const error = []
    if(!await saleRepositorie.getSale(sale.saleId)){
        error.push('sale_id não existe.')
    }
    if(!await clientRepositorie.getClient(sale.clientId)){
        error.push('client_id não existe.')
    }
    if(error.length >  0){
        throw error
    }
    return await saleRepositorie.updateSale(sale)
}

export default {
    creatSale,
    getSales,
    getSale,
    deleteSale,
    updateSale
}