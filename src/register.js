import {MongoClient} from 'mongodb'
const client = new MongoClient('mongodb+srv://admin:1234@cluster.ogl8u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
const users = client.db().collections('users')

let email = 'useremail'
let password = 'userpassword'
let name ='username'

const register = async (email, password, name) => {
  try {
    await client.connect()
    await client.db('users')
    users.insertOne(email, password, name)
  } catch (error) {
    console.log(error)    
  }
}

register();