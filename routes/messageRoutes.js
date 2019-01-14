module.exports = app => {
    let messageData = require('../dummyData/messageDummyData');
    let message;
    app.post("/api/sendmessage", (req, res) => {
        message = req.body;
        lastMessage = messageData[messageData.length - 1];
        lastMessageId = parseInt(lastMessage.id, 10);
        message.id = lastMessageId + 1;
        messageData.push(message);
        res.send(messageData);
    })
}