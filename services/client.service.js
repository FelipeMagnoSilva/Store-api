import clientRepositorie from '../repositories/client.repositorie.js'

async function creatClient(client) {
    return await clientRepositorie.insertClient(client)
}

async function getClients(){
    return clientRepositorie.getClients()
}

async function getClient(id){
    return clientRepositorie.getClient(id)
}

async function deleteClient(id){
    return clientRepositorie.deleteClient(id)
}

async function updateClient(client){
    return await clientRepositorie.updateClient(client)
}

export default {
    creatClient,
    getClients,
    getClient,
    deleteClient,
    updateClient
}