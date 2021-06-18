const pool = require('./database.js');
const queries = require('./queries')




// get players
const getPlayers = (req,res) => {
  pool.query(queries.getPlayers, (error,results) => {
      if (error) throw error;
      res.status(200).json(results.rows)
  }) 

  
}

// request for players by id
const getPlayersById = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getPlayersById,[id], (error,results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
        console.table(results.rows)
    }) 
  
  }
const updatePlayers = (req,res) =>{
  const id = parseInt(req.params.id);
  const {name} = req.body;
  
  pool.query(queries.getPlayersById, [id],(error, results) => {
    const noPlayerFound = !results.rows.length;
    if (noPlayerFound){
      res.send('Player does not exist in the database');
    }
  })

  pool.query(queries.updatePlayers,[name], (error,results)=>{
    if (error) throw error;
    res.status(200),send('player updated successfully')
  })
}
// adding players
  const addPlayers = (req,res) =>{
     console.log(req.body);
  const {name, club, position, avatar, id } = req.body
  pool.query(queries.checkNameExists,[name],( error , results)=> {
    if (results.rows.length) 
       res.status(201).send('player EXIST')
     
   })
    pool.query(queries.addPlayers,[name, club, position, avatar, id],( error , results)=> {
     if (error) throw error;
        res.status(201).send('player added succesfully')
      
    })
  }

  // removing players
  const deletePlayers = (req,res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deletePlayers, [id],(error, results) => {
      const noPlayerFound = !results.rows.length;
      if (noPlayerFound){
        res.send('Player does not exist in the database');
      }
  
    pool.query(queries.deletePlayers, [id],(error, results) => {
      
      if (error)throw error;
     res.status(200).send('Player removed successfully')
    })
    })
  }
// adding avatars
//   app.post('/player/avatar', upload.single('avatar'), (req,res)=>{
//     console.log('image uploading...');
//     console.log(req.file)
//     res.send('success')
// })

module.exports = {
getPlayers,
getPlayersById,
addPlayers,
deletePlayers,
updatePlayers,
};