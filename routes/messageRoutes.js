module.exports = app => {
    let message;
    app.post("/api/sendmessage", (req, res) => {
        message = req.body; 
        res.send(message);
    })
}