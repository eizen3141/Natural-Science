let MongoClient = require('mongodb').MongoClient
let url = 'mongodb+srv://admin:1234@cluster.ogl8u.mongodb.net/natural-science?retryWrites=true&w=majority'

export default function login(email, password) {
  MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if (err) throw err
    let dbo = db.db('natural-science')
    let account = dbo.collection('users').findOne(email)
    db.close();
    if(account.email === email && account.password === password) return true
    return false
  })
}