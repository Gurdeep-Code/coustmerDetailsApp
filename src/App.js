import CustomersList from './components/CustomersList'
import UserDetails from './components/UserDetails';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path='/' element ={<CustomersList />}/>
          <Route path='UserDeatils/:userId' element ={<UserDetails />}/>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
