import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPost } from './postsSlice';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = () => {
        if (title && content) {
            dispatch(addPost(title, content))
            setTitle('');
            setContent('');
        }
    }
    return (
        <form action="">
            <input
                placeholder='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                placeholder='content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type='button' onClick={handleSubmit}>Save</button>
        </form>
    )
}

export default AddPost