import GroupDetail from '../components/groups/GroupDetail';

const Group = () => {
    return (
        <GroupDetail
            image="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            title="Group 1"
            address="placeholder address"
            description="placeholder description"
        />
    );
};

//Needed to use getStaticProps so that we can pre-generate all possible paths (all dynamic values).
export async function getStaticPaths() {
    return {
        //Fallback property set to false since we are hard-coding all possible paths for now.
        fallback: false,
        paths: [
            {
                params: {
                    groupId: 'g1'
                }
            },
            {
                params: {
                    groupId: 'g2'
                }
            }
        ]
    }
}

//Use context parameter in this case so that we can use params parameter to get ID from URL.
export async function getStaticProps(context) {
    //Get single group using ID.
    const groupId = context.params.groupId;

    //For now, use fixed data.
    return {
        props: {
            id: groupId,
            image: "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
            title: "Group 1",
            address: "placeholder address",
            description: "placeholder description"
        }
    }
}

export default Group;