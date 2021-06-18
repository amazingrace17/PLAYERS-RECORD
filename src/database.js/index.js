const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'trial',
   password: 'Tifemi@odus17',
   port : 5432,
})

pool.on('connect',()=>{
    console.log('database connected succesfully')
})

pool.on('error',()=>{
 console.log(`ERROR: ${error}`)
})
module.exports = pool;  