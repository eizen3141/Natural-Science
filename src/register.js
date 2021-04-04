let MongoClient = require('mongodb').MongoClient
let url = 'mongodb+srv://admin:1234@cluster.ogl8u.mongodb.net/natural-science?retryWrites=true&w=majority'

export default function register(email, password, name) {
  MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
    if (err) throw err
    var dbo = db.db('natural-science')
    var account = dbo.collection('users').findOne(email)
    if(account.email === email) return false
    dbo.collection('users').insertOne({email: email, password: password, name: name})
    return true
  })
}
