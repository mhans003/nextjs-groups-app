import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewGroupForm.module.css';

const NewGroupForm = props => {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = event => {
        //Using useRef hook, capture the input data.
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const groupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription,
        };

        props.onAddGroup(groupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Group Title</label>
                    <input type='text' required id='title' maxLength='50' ref={titleInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Group Image</label>
                    <input type='url' required id='image' ref={imageInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id='address' maxLength='100' ref={addressInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        id='description'
                        required
                        rows='5'
                        maxLength='5000'
                        ref={descriptionInputRef}
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Group</button>
                </div>
            </form>
        </Card>
    );
}

export default NewGroupForm;

