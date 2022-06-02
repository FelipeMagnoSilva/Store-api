import express from 'express'
import cors from 'cors'
import winston from 'winston'
import clientRouter from './routers/client.router.js'
import supplierRouter from './routers/supplier.router.js'
import productRouter from './routers/product.router.js'
import saleRouter from './routers/sale.router.js'

const { combine, timestamp, label, printf } = winston.format
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`
})

global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: 'store-api.log' })
    ],
    format: combine(
        label({ label: 'Store-API' }),
        timestamp(),
        myFormat
    )
})

const app = express()
app.use(express.json())
app.use(cors())
app.use('/client', clientRouter)
app.use('/supplier', supplierRouter)
app.use('/product', productRouter)
app.use('/sale', saleRouter)
app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseURL} ${err.message}`)

    if (err.message) {
        res.status(400).send({ error: err.message })
    }else{
        res.status(400).send({ error: err })
    }
    
})

app.listen(3000, () => console.log('server up'))