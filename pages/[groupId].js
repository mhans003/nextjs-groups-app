import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';
import GroupDetail from '../components/groups/GroupDetail';

const Group = props => {
    return (
        <Fragment>
            <Head>
                <title>{props.groupData.title}</title>
                <meta
                    name="description"
                    content={props.groupData.description}
                />
            </Head>
            <GroupDetail
                image={props.groupData.image}
                title={props.groupData.title}
                address={props.groupData.address}
                description={props.groupData.description}
            />
        </Fragment>
    );
};
  
//Needed to use getStaticProps so that we can pre-generate all possible paths (all dynamic values).
export async function getStaticPaths() {
    //Connect to MongoDB
    const client = await MongoClient.connect(process.env.DB_CONNECTION);
    const db = client.db();
    //Identify collection.
    const groupsCollection = db.collection('groups');
    //Fetch all group IDs from the DB.
    const groups = await groupsCollection.find({}, { _id: 1 }).toArray();
    //Close connnection.
    client.close();
    return {
        //
        fallback: false,
        //Get all paths for all possible IDs, using the IDs retrieved.
        paths: groups.map(group => ({ 
            params: { groupId: group._id.toString() }
        }))
    }
}

//Use context parameter in this case so that we can use params parameter to get ID from URL.
export async function getStaticProps(context) {
    //Get single group using ID.
    const groupId = context.params.groupId;
    //Connect to MongoDB
    const client = await MongoClient.connect(process.env.DB_CONNECTION);
    const db = client.db();
    //Identify collection.
    const groupsCollection = db.collection('groups');
    //Using this ID, get the desired group (we need to convert the ID back from a string to a Mongo object id).
    const thisGroup = await groupsCollection.findOne({_id: ObjectId(groupId)});
    //Close connection.
    client.close();

    //Return data retrieved as props (make sure to convert ID back to string).
    return {
        props: {
            groupData: {
                id: thisGroup._id.toString(),
                title: thisGroup.title,
                address: thisGroup.address,
                image: thisGroup.image,
                description: thisGroup.description
            }
        }
    }
}

export default Group; 