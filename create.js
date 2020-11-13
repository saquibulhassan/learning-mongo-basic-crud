const MongoClient = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error) {
        return console.log(error)
    }

    const db = client.db(databaseName)

    /**
     * Insert single document
     * */
    db.collection('task').insertOne({
        title: 'Get up ',
        description: 'Buy grocery product from nearest shop',
        completed: false
    })


    /**
     * Insert multiple document
     * */
    db.collection('task').insertMany([
        {
            title: 'Buy Grocery',
            description: 'Buy grocery product from nearest shop',
            completed: false
        },
        {
            title: 'Go to Office',
            description: 'Go to work timely',
            completed: false
        },
        {
            title: 'Enjoy Movie',
            description: 'Enjoy movie in theater at 8 PM',
            completed: false,
            ticketPurchase: false,
        }
    ], {}, (error, result) => {
        if(error) {
            return console.log(error)
        }

        console.log(result.ops)
    })
})