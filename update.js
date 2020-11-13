const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log(error)
    }

    const db = client.db(databaseName)

    /**
     * Update single document
     * */
    db.collection('task').update({
        _id: new ObjectID('5fae4b1d93457615c265747f')
    }, {
        $set: {
            title: 'Go to doctor',
            description: 'There is a doctor appointment'
        }
    }).then((result) => {
        console.log('Individual update')
        console.log(result.result)
    }).catch((error) => {
        console.log('Individual error')
        console.log(error)
    })

    /**
     * Update multiple document
     * */
    db.collection('task').updateMany({
        completed: false
    }, {
        $set: {
            completed: true,
        }
    }).then((result) => {
        console.log('Multiple update')
        console.log(result.result)
    }).catch((error) => {
        console.log('Multiple error')
        console.log(error)
    })
})