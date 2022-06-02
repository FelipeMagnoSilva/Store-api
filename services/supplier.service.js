import supplierRepositorie from '../repositories/supplier.repositorie.js'

async function creatSupplier(supplier) {
    return await supplierRepositorie.insertSupplier(supplier)
}

async function getSuppliers(){
    return supplierRepositorie.getSuppliers()
}

async function getSupplier(id){
    return supplierRepositorie.getSupplier(id)
}

async function deleteSupplier(id){
    return supplierRepositorie.deleteSupplier(id)
}

async function updateSupplier(supplier){
    return await supplierRepositorie.updateSupplier(supplier)
}

export default {
    creatSupplier,
    getSuppliers,
    getSupplier,
    deleteSupplier,
    updateSupplier
}