import saleService from '../services/sale.service.js'

async function creatSale(req, res, next) {
    try {
        let sale = req.body
        if (!sale.value, !sale.date, !sale.client_id, !sale.product_id) {
            throw new Error("value, date, client_id e product_id ão obrigatórios.")
        }
        //saleService
        res.send(await saleService.creatSale(sale))
        logger.info(`POST /sale - ${JSON.stringify(sale)}`)
    } catch (err) {
        next(err)
    }
}

async function getSales(req, res, next){
    try{
        res.send(await saleService.getSales(req.query.product_id)) 
        logger.info(`GET/sale`)
    }catch(err){
        next(err)
    }
}


async function getSale(req, res, next){
    try{    
        res.send( await saleService.getSale(req.params.id))
        logger.info(`GET/sale/:id ${req.params.id}`)
    }catch(err){
        next(err)
    }
}

async function deleteSale(req, res, next){
    try{
        res.send(await saleService.deleteSale(req.params.id))
        logger.info(`DELETE/sale/:id ${req.params.id}`)
    }catch(err){
        next(err)
    }
}

async function updateSale(req, res, next){
    try{
        let sale = req.body
        if(!sale.sale_id, !sale.value, !sale.date, !sale.client_id){
            throw new Error('Informe o id, value, date, client_id da sale.')
        }

        res.send(await saleService.updateSale(sale))
        logger.info(`PUT/sale ${JSON.stringify(sale)}`)
    }catch(err){
        next(err)
    }
}


export default {
    creatSale,
    getSales,
    getSale,
    deleteSale,
    updateSale
}