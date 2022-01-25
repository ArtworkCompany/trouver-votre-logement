import './index.css';
import './i18n';

import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import InMemoryRealEstateGateway from './adapters/secondaries/InMemoryRealEstate.gateway';
import App from './App';
import { configureStore } from './store/store';

const realEstateGateway = new InMemoryRealEstateGateway();
realEstateGateway.feedWith([
  {
    id: '123abc',
    name: 'Logement 1',
    price: 100000,
    imageUrl:
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop',
  },
  {
    id: '456abc',
    name: 'Logement 2',
    price: 124000,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop',
  },
  {
    id: '789abc',
    name: 'Logement 3',
    price: 147520,
    imageUrl:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop',
  },
  {
    id: '112233abc',
    name: 'Logement 4',
    price: 180000,
    imageUrl:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop',
  },
]);

const store = configureStore({ realEstateGateway });

ReactDOM.render(
  <Provider {...{ store }}>
    <App />
  </Provider>,
  document.getElementById('root')
);
