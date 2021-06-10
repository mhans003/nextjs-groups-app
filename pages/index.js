//Use Head for metadata.
import Head from 'next/head';
import { Fragment } from 'react';
import { MongoClient } from 'mongodb';
import GroupList from '../components/groups/GroupList';

//Props come from pre-rendering process on the server.
const Home = props => {
    return (
        <Fragment>
            <Head>
                <title>NextGroup</title>
                <meta
                    name="description"
                    content="Post or find new groups to attend"
                />
            </Head>
            <GroupList groups={props.groups}></GroupList>
        </Fragment>
    );
} 

//This code will only execute on the server-side, during the build process.
//This takes the place of client-side retrieval of data and needing to use useEffect/useState to get groups data.
//Instead, data is retrieved on server and sent to this component via props.
//Alternative is to use getServerSideProps, which doesn't run on build, but always on server after deployment.
export async function getStaticProps() {
    //Fetch data to get groups.
    //Since this code will run on the server, we can connect to MongoDB here directly.
    const client = await MongoClient.connect(process.env.DB_CONNECTION);
    const db = client.db();
    //Identify collection.
    const groupsCollection = db.collection('groups');
    //get the stored data as an array.
    const groups = await groupsCollection.find().toArray();
    //close the connection.
    client.close();

    return {
        //Map through the fetched group data to transform the ID field and grab all properties.
        props: {
            groups: groups.map(group => ({
                title: group.title,
                address: group.address,
                image: group.image,
                id: group._id.toString()
            }))
        },
        //Revalidate property utilizes incremental static generation.
        //Takes the number of seconds to wait before generating another request.
        //This means the page will not only be generated at build, but regenerated at the server every x seconds.
        revalidate: 10
    };
}

export default Home;