import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCoustmersLists } from '../redux/fetchCoustmers/coustmersAction';
import { useNavigate } from 'react-router-dom';
import Filter from './Filter';
import '../css/cousList.css';

function CoustmersList() {
  const dispatch = useDispatch();
  const { coustmersList, loading } = useSelector(state => state);
  const navigate = useNavigate();
  const imagePath = 'https://randomuser.me/api/portraits/men/';
  useEffect(() => dispatch(fetchCoustmersLists())
    , []);

  const CoustmersList = coustmersList.map((items) =>
    <tr className='detailRow' key={items.id}>
      <td><img onClick={() => navigate(`/UserDeatils/${items.id}`, { state: items })}
        src={`${imagePath}${items.id}.jpg`} /></td>
      <td>{items.name}</td>
      <td>{items.phone}</td>
      <td>{items.email}</td>
      <td>{items.city}</td>
      <td>{items.country}</td>
    </tr>);

  return (
    <div className='cousList'>
      <h2><b>CoustmersList</b></h2>
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
              {CoustmersList}
            </tbody>
          </table>
        </>}
    </div>
  )
}

export default CoustmersList