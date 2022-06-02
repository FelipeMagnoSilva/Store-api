import clientService from '../services/client.service.js'

async function creatClient(req, res, next) {
    try {
        let client = req.body
        if (!client.name || !client.cnpj || !client.phone || !client.email || !client.address) {
            throw new Error("name, CNPJ, phone, email e adress são obrigatórios.")
        }
        //clientService
        res.send(await clientService.creatClient(client))
        logger.info(`POST /client - ${JSON.stringify(client)}`)
    } catch (err) {
        next(err)
    }
}

async function getClients(req, res, next){
    try{
        res.send(await clientService.getClients()) 
        logger.info(`GET/client`)
    }catch(err){
        next(err)
    }
}


async function getClient(req, res, next){
    try{    
        res.send( await clientService.getClient(req.params.id))
        logger.info(`GET/client/:id ${req.params.id}`)
    }catch(err){
        next(err)
    }
}

async function deleteClient(req, res, next){
    try{
        res.send(await clientService.deleteClient(req.params.id))
        logger.info(`DELETE/client/:id ${req.params.id}`)
    }catch(err){
        next(err)
    }
}

async function updateClient(req, res, next){
    try{
        let client = req.body
        if(!client.client_id || !client.name || !client.cnpj || !client.phone || !client.email || !client.address){
            throw new Error('Informe o id do cliente.')
        }

        res.send(await clientService.updateClient(client))
        logger.info(`PUT/client ${JSON.stringify(client)}`)
    }catch(err){
        next(err)
    }
}


export default {
    creatClient,
    getClients,
    getClient,
    deleteClient,
    updateClient
}