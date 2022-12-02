import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { postInputSampleData } from '../../store/action/SampleAction';
import { createBrowserHistory } from "history";

const InputSample = () => {
    const [nama, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const history = createBrowserHistory({ window });

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('1. Masuk Haddle Submit')

        //Mengirim data pada api
        dispatch(postInputSampleData({company: nama, email: email, contact: contact}));

        history.push('/sample-page')
    } 

    return (
        <div>
        <h4>Input Data</h4>
        <Link to='/sample-page'>Kembali</Link>
        <form onSubmit={(event) => handleSubmit(event)} style={{display: 'flex', flexDirection: 'column', width: '20%', padding: '20px', gap: '20px'}}>
            <input type='text' name='nama' placeholder='Masukan Nama...' onChange={(event) => setName(event.target.value)}/>
            <input type='email' name='email' placeholder='Masukan Email...' onChange={(event) => setEmail(event.target.value)}/>
            <input type='contact' name='contact' placeholder='Masukan Contact...' onChange={(event) => setContact(event.target.value)}/>

            <button type='submit'>Submit</button>
        </form>
        </div>
    );
}

export default InputSample;
