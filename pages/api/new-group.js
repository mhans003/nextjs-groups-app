//API routes run on the server and are not designed to return React components. 
//This allows us to handle RESTful routes here from within the Next.js app.

import { MongoClient } from 'mongodb';

const handler = async (req, res) => {
    //Create new group.
    if (req.method === 'POST') {
        try {
            //Pull out request body.
            const data = req.body;
            //Connect to DB and create client object.
            console.log(process.env.DB_CONNECTION)
            const client = await MongoClient.connect(process.env.DB_CONNECTION);
            const db = client.db();
            //Identify collection.
            const groupsCollection = db.collection('groups');
            //Insert into this collection.
            const result = await groupsCollection.insertOne(data);
            console.log(result);
            //Send back response.
            res.status(201).json({message: "Group Inserted"});
        } catch(error) {
            console.log(error);
            res.status(500).json({message: "An error occurred while inserting records."});
        }
    }
}

export default handler;