import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Head from 'next/head';
import NewGroupForm from '../../components/groups/NewGroupForm';

const NewGroup = () => {
    const router = useRouter();
    //Helper function to add new group (NewGroupForm component expects onAddGroup function passed as props)
    const handleOnAddGroup = async enteredData => {
        //Using entered data, post new group.
        const response = await fetch('/api/new-group', {
            method: 'POST',
            body: JSON.stringify(enteredData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        //Get data and log it.
        const data = await response.json();
        console.log(data);
        //Navigate back to homepage
        router.push('/');
    };

    return (
        <Fragment>
            <Head>
                <title>Add New Group</title>
                <meta
                    name="description"
                    content="Post new groups to inform new or returning members"
                />
            </Head>
            <NewGroupForm onAddGroup={handleOnAddGroup}></NewGroupForm>
        </Fragment>
    );
}

export default NewGroup;