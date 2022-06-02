import pg from 'pg'

async function connect(){
    if (global.connection){
        return global.connection.connect()
    }
    
    const pool = new pg.Pool({
        connectionString: "postgres://cmldfqzv:KxeOrYLBJ8koXUe8xrtdQ629VSdAHHAp@fanny.db.elephantsql.com/cmldfqzv"
    })
    global.connection = pool
    return pool.connect()
}

export {
    connect
}