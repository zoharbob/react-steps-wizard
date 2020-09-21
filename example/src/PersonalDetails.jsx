import React from 'react';
import { Views } from './App';

const PersonalDetails = ({ setData, data }) => {

    const handleChange = e => {
        setData({
            [e.target.name]: e.target.value
        }, Views.PERSONAL_DETAILS);
    }

    return (
        <div style={{padding: 10}}>
            <h1>Personal Details</h1>
            <div>
                <form>
                    <div style={{marginTop: 10}}>
                        <input placeholder="full name" name="name" onChange={handleChange} value={data.name} /> 
                    </div>

                    <div style={{marginTop: 10}}>
                        <input placeholder="age" name="age" onChange={handleChange} value={data.age} />
                    </div>
                    
                    <div style={{marginTop: 10}}>
                        <input placeholder="city" name="city" onChange={handleChange} value={data.city} />
                    </div>

                    <div style={{marginTop: 10}}>
                        <input placeholder="phone" name="phone" onChange={handleChange} value={data.phone} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PersonalDetails;