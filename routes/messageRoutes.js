module.exports = app => {
    const bodyParser = require('body-parser');
    let userMessages;
    
    if (process.env.NODE_ENV != 'production') {
        app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        })

        app.use(bodyParser.json());
    }

    app.post("/api/sendmessage", (req, res) => {

        const message = {
            id: req.id,
            date: req.date,
            time: req.time,
            email: req.email,
            subject: req.subject,
            body: req.body
        }

        userMessages = [
            message.body
        ];

        let messageData = require('../dummyData/messageDummyData');

        messageData.forEach(message => {
            userMessages.push(message)
        });

        messageData = messageData.push(message.body);

        res.send(userMessages);
    })

    app.get('/api/getmail', (req, res) => {

        const messageData = require('../dummyData/messageDummyData');
        res.send(messageData);
    })
}