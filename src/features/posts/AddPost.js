import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './postsSlice';
import { selectAllUsers } from '../users/userSlice';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();
    const handleSubmit = () => {
        if (title && content && userId) {
            dispatch(addPost(title, content,userId))
            setTitle('');
            setContent('');
            setUserId('');
        }
    }
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
    return (
        <form action="">
            <h1>Add post</h1>
            <label>Select User</label>
            <select onChange={(e)=>setUserId(e.target.value)} value={userId}>
                <option value={''}></option>
                {users.map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>
            <label>Title</label>
            <input
                placeholder='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required = {true}
            />
            <label>Content</label>
            <input
                placeholder='content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required = {true}
            />
            <button disabled={!canSave} type='button' onClick={handleSubmit}>Save</button>
        </form>
    )
}

export default AddPost










