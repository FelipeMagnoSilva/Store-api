import supplierService from '../services/supplier.service.js'

async function creatSupplier(req, res, next) {
    try {
        let supplier = req.body
        if (!supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address) {
            throw new Error("name, CNPJ, phone, email e adress são obrigatórios.")
        }
        //supplierService
        res.send(await supplierService.creatSupplier(supplier))
        logger.info(`POST /supplier - ${JSON.stringify(supplier)}`)
    } catch (err) {
        next(err)
    }
}

async function getSuppliers(req, res, next){
    try{
        res.send(await supplierService.getSuppliers()) 
        logger.info(`GET/supplier`)
    }catch(err){
        next(err)
    }
}


async function getSupplier(req, res, next){
    try{    
        res.send( await supplierService.getSupplier(req.params.id))
        logger.info(`GET/supplier/:id ${req.params.id}`)
    }catch(err){
        next(err)
    }
}

async function deleteSupplier(req, res, next){
    try{
        res.send(await supplierService.deleteSupplier(req.params.id))
        logger.info(`DELETE/supplier/:id ${req.params.id}`)
    }catch(err){
        next(err)
    }
}

async function updateSupplier(req, res, next){
    try{
        let supplier = req.body
        if(!supplier.supplierId || !supplier.name || !supplier.cnpj || !supplier.phone || !supplier.email || !supplier.address){
            throw new Error("supplierId, name, CNPJ, phone, email e adress são obrigatórios.")
        }

        res.send(await supplierService.updateSupplier(supplier))
        logger.info(`PUT/supplier ${JSON.stringify(supplier)}`)
    }catch(err){
        next(err)
    }
}


export default {
    creatSupplier,
    getSuppliers,
    getSupplier,
    deleteSupplier,
    updateSupplier
}