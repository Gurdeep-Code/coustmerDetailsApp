import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomersLists } from '../redux/fetchCustomers/customersAction';
import { useNavigate } from 'react-router-dom';
import Filter from './Filter';
import '../css/custList.css';

function CustomersList() {
  const dispatch = useDispatch();
  const { customersList, loading } = useSelector(state => state);
  const navigate = useNavigate();
  const imagePath = 'https://randomuser.me/api/portraits/men/';
  useEffect(() => dispatch(fetchCustomersLists())
    , []);

  const CustomersList = customersList.map((items) =>
    <tr className='detailRow' key={items.id} onClick={() => navigate(`/UserDeatils/${items.id}`, { state: items })}>
      <td><img src={`${imagePath}${items.id}.jpg`} /></td>
      <td>{items.name}</td>
      <td>{items.phone}</td>
      <td>{items.email}</td>
      <td>{items.city}</td>
      <td>{items.country}</td>
    </tr>);

  return (
    <div className='custList'>
      <h2><b>Customers List</b></h2>
      <b><Filter /></b><br/><br/>
      {loading ? <b>Loading ....</b> :
        <>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>City</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {CustomersList}
            </tbody>
          </table>
        </>}
    </div>
  )
}

export default CustomersList