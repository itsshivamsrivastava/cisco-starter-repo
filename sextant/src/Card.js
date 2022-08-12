import React from 'react';
import { Link } from 'react-router-dom';
import UsersIPaddress from './UsersIPaddress';

const Card = () => {
    return (
        <div className='section'>
            <div className='card'>
                <div className='card-body'>
                    <h2 className='card-title'>User's IP Address is</h2>
                </div>
                <UsersIPaddress />
            </div>
        </div>
    );
}

export default Card;