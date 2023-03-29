const fetch = require('node-fetch')

const getAll = (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        const info = users.map((elem) => {
            return {
                id : elem.id,
                name : elem.name,
                email : elem.email,
                city : elem.address.city
            }
        })
        res.json(info)
      });
}

const getUserById = (req, res) => {
    const {id} = req.params;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(users => {
        const info = {
                id : users.id,
                name : users.name,
                email : users.email,
                city : users.address.city
            }
            res.json(info)
        })
};




module.exports = {
    getAll,
    getUserById
}