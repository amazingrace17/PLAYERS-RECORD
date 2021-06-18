const getPlayers = 'SELECT * FROM players';

const getPlayersById = "SELECT * FROM players where id = $1";

const addPlayers = 'INSERT INTO players (name, club, position, avatar, id) VALUES ($1, $2,$3, $4 , $5 )';
const deletePlayers = "DELETE FROM players WHERE id = $1 "
const checkNameExists = 'SELECT n FROM players WHERE n.name = $1';

const updatePlayers = 'UPDATE players Set name = $1 WHERE id = $2'

module.exports = {
    getPlayers,
    getPlayersById,
   checkNameExists,
   addPlayers,
   deletePlayers,
   updatePlayers,
};