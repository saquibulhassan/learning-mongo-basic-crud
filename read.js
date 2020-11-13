const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log(error)
    }

    const db = client.db(databaseName)

    /**
     * Fetch single document from collection
     * */
    db.collection('task').findOne({_id: new ObjectID('5fae4b1d93457615c265747f')}, {}, (error, result) => {
        console.log('Individual task')
        if(error) {
            return console.log(error)
        }

        console.log(result)
    })

    /**
     * Fetch multiple document from collection
     * */
    db.collection('task').find({completed: false}).toArray((error, result) => {
        console.log('Multiple task')
        if(error) {
            return console.log(error)
        }

        console.log(result)
    })
})