import saleRepositorie from '../repositories/sale.repositorie.js'
import clientRepositorie from '../repositories/client.repositorie.js'
import productRepositorie from '../repositories/product.repositorie.js'

async function creatSale(sale) {
    const error = []
    if(!await clientRepositorie.getClient(sale.client_id)){
        error.push('client_id não existe.')
    }

    const product = await productRepositorie.getProduct(sale.product_id)
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

async function getSales(productID) {
    if (productID){
        return saleRepositorie.getSalesByProductId(productID)
    }
    return saleRepositorie.getSales()
}

async function getSale(id) {
    return saleRepositorie.getSale(id)
}

async function deleteSale(id) {
    const sale = await saleRepositorie.getSale(id)
    if(sale){
        const res = await saleRepositorie.deleteSale(id)
        let product = await productRepositorie.getProduct(sale.product_id)
        product.stok++
        await productRepositorie.updateProduct(product)
        return res
    } else {
        throw new Error('O id da sale informado nao existe.')
    }
}

async function updateSale(sale) {
    const error = []
    if(!await saleRepositorie.getSale(sale.sale_id)){
        error.push('sale_id não existe.')
    }
    if(!await clientRepositorie.getClient(sale.client_id)){
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