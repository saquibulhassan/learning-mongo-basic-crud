const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log(error)
    }

    const db = client.db(databaseName)

    /**
     * Delete single document
     * */
    db.collection('task').deleteOne({
        _id: ObjectID('5fae4b1d93457615c265747f')
    }).then((result) => {
        console.log('Single deleted')
        console.log(result.result)
    }).catch((error) => {
        console.log('Single error')
        console.log(error)
    })

    /**
     * Delete multiple document
     * */
    db.collection('task').deleteMany({
        title: 'Buy Grocery'
    }).then((result) => {
        console.log('Multiple deleted')
        console.log(result.result)
    }).catch((error) => {
        console.log('Multiple error')
        console.log(error)
    })
})