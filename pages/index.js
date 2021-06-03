import GroupList from '../components/groups/GroupList';
//Temporary placeholder data to pass into the GroupsList component to render.
const placeholderData = [
    {
        id: "g1",
        title: "Awesome Group 1",
        image: "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
        address: "555 Street City, State",
        description: "This is a great group!"
    },
    {
        id: "g2",
        title: "Super Group 2",
        image: "https://images.unsplash.com/photo-1619537906775-d79054299429?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
        address: "555 Street City, State",
        description: "This is a super group!"
    }
]

//Props come from pre-rendering process on the server.
const Home = props => {
    return <GroupList groups={props.groups}></GroupList>;
} 

//This code will only execute on the server-side, during the build process.
//This takes the place of client-side retrieval of data and needing to use useEffect/useState to get groups data.
//Instead, data is retrieved on server and sent to this component via props.
//Alternative is to use getServerSideProps, which doesn't run on build, but always on server after deployment.
export async function getStaticProps() {
    //Fetch data.

    //For now, just use the placeholder data.
    return {
        props: {
            groups: placeholderData
        },
        //Revalidate property utilizes incremental static generation.
        //Takes the number of seconds to wait before generating another request.
        //This means the page will not only be generated at build, but regenerated at the server every x seconds.
        revalidate: 10
    };
}

export default Home;