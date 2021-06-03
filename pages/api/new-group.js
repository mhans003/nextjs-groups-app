//API routes run on the server and are not designed to return React components. 
//This allows us to handle RESTful routes here from within the Next.js app.

import { MongoClient } from 'mongodb';

const handler = (req, res) => {
    //Create new group.
    if (req.method === 'POST') {
        //Pull out request body.
        const data = req.body;
        //Connect to DB and create client object.
        const client = MongoClient.connect(process.env.DB_CONNECTION);
        const db = client.db();
        //Identify collection.
        const groupsCollection = db.collection('groups');
        //Insert into this collection.
        const result = await groupsCollection.insertOne(data);
        console.log(result);
        //Send back response.
        res.status(201).json({message: "Group Inserted"});
    }
}

export default handler;