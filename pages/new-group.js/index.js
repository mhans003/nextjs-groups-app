import { useRouter } from 'next/router';
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

    return <NewGroupForm onAddGroup={handleOnAddGroup}></NewGroupForm>
}

export default NewGroup;