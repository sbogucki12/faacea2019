module.exports = app => {
    const bodyParser = require('body-parser');
    const messageData = require('../dummyData/messageDummyData');
    let userMessages;

    // console.log(messageData);

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

        messageData.forEach(message => {
            userMessages.push(message)
        });


        // lastMessage = messageData[messageData.length - 1];
        // lastMessageId = parseInt(lastMessage.id, 10);
        // message.id = lastMessageId + 1;
        // messageData.push(message);
        // console.log(messageData[message.id])
        // console.log("function called")
        res.send(userMessages);
    })

    app.get('/api/getmail', (req, res) => {
        res.send(userMessages);
    })
}