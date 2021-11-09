const express = require('express')
const router = express.Router()
const {v4: uuidv4} = require('uuid')

let users = []

//sending all users
router.get('/', (req,res)=>{
    res.send(users)
})

//sending users by their id
router.get('/:id', (req,res)=>{
    const {id} = req.params
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
})

//posting users
router.post('/', (req,res)=>{
    let user = req.body
    const userId = uuidv4()
    const userWithId = {...user, id:userId}
    users.push(userWithId)
    res.send(`user with the name ${user.firstName} added to the db`)
})

//updating users
router.patch('/:id', (req,res)=>{
    const {id} = req.params
    const {firstName, lastName, age} = req.body
    const userToBeUpdated = users.find((user)=> user.id == id)
    
    if(firstName){
        user.firstName = firstName
    }

    if(lastName){
        user.lastName = lastName
    }

    if(age){
        user.age = age
    }

    res.send(`user with the id ${id} has been updated`)
})

//deleting users
router.delete('/:id', (req,res)=>{
    const {id} = req.params
    users = users.filter((user)=> user.id !== id)
    res.send(`user with the id: ${id} deleted from the db`)
})

module.exports = router