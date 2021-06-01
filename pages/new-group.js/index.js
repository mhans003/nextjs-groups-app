import NewGroupForm from '../../components/groups/NewGroupForm';

const NewGroup = () => {
    //Helper function to add new group (NewGroupForm component expects onAddGroup function passed as props)
    const handleOnAddGroup = enteredData => {
        console.log(enteredData);
    };

    return <NewGroupForm onAddGroup={handleOnAddGroup}></NewGroupForm>
}

export default NewGroup;