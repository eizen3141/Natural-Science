import {MongoClient} from 'mongodb'
const client = new MongoClient('mongodb+srv://admin:1234@cluster.ogl8u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
const users = client.db().collections('users')

const login = async () => {
  try {
    await client.connect()
    await client.db('users')
    
  } catch (error) {
    console.log(error)    
  }
}