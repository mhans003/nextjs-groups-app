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

const Home = () => {
    return <GroupList groups={placeholderData}></GroupList>;
} 

export default Home;