const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const app = express();


app.use(cors());
app.use(express.json());







const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7splzic.mongodb.net/?retryWrites=true&w=majority`;
//console.log(uri)

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        const fileCollection = client.db('fileUploader').collection('files');
       



        app.post('/files', async (req, res) => {
            const users = req.body
            const result = await fileCollection.insertOne(files)
            res.send(result)
        });




        app.get('/files', async (req, res) => {
            const query = {};
            const files = await fileCollection.find(query).toArray()
            res.send(files)
        })

        
    }
    finally { }
}

run().catch(console.log);




app.get('/', async (req, res) => {
    res.send('File Uploader server is running');
});

app.listen(port, () => console.log(`File Uploader server is running on ${port}`));