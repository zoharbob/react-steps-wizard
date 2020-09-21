import React from 'react';
import { Views } from './App';

const Expectations = ({ setData, data }) => {

    const handleChange = e => {
        setData({[e.target.name]: e.target.value}, Views.EXPECTATIONS);
    }

    return (
        <div style={{padding: 10}}>
            <h3>What are your expectations from us?</h3>
            <textarea cols="50" rows="10" onChange={handleChange} name="expectations" value={data.expectations} />
        </div>
    )
}

export default Expectations;