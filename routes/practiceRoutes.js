module.exports = app => {
    app.post('/test/post', (req, res) => {
        const data = req.body; 
        console.log(data);
        res.send(data);
    });
};