import React from 'react';
import { useLocation,useParams } from 'react-router-dom';
import Filter from './Filter';
import '../css/cousList.css'

function UserDetails() {
    const location = useLocation();
    const {userId} =useParams();
    const imagePath = 'https://randomuser.me/api/portraits/men/';
    const { phone, name, email, city, country } = location.state;
    return (
        <div className='userDetails'>
            <h2><b>{name} Details</b></h2>
            <table>
                <tr>
                    <th>Image</th>
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td><img src={`${imagePath}${userId}.jpg`} /></td>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{city}</td>
                    <td>{country}</td>
                </tr>
            </table>
        </div>
    )
}

export default UserDetails