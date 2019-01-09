const dummyData = require('../dummyData/dummyData');

module.exports = app => {
    app.post('/test/post', (req, res) => {
        const data = req.body; 
        console.log(data);
        res.send(data);
    });

    app.get('/test/api/all', (req, res) => {
        res.send(dummyData); 
    }); 

    app.get('/test/api/:id', (req, res)  => {
        const id = req.params.id; 
        let dummyRecord; 
        dummyData.forEach(record => {
            if(record.id == id){
                dummyRecord = record; 
                res.send(dummyRecord);
            }
        });
        res.send(
            {
                "error": "error"
            }
        )
    })
};