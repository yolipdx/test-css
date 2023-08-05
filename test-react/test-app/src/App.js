import logo from './logo.svg';
import './App.css';
import Form from './components/test-snapshot/Form';
import BucketList from './components/test-mutation-list/TestListMutation';
import Messenger from './components/test-preserving-and-resetting-state/ChatApp';

import 'element-theme-default';

import { AiFillBell } from "react-icons/ai";



function App() {

  const style = {
    width: 500,
    height: 500,
    color: 'red',
  };

  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475 110"><path class="flame" d="m36.9.9 5 8.7c1 1.8 1 4 0 5.8l-29.8 51.7 14.1 24.4c2.2 3.8 6.3 6.2 10.7 6.2s8.5-2.4 10.7-6.2l14.1-24.4-3.7-6.6-16 27.7c-1 1.8-3 2.9-5 2.9-2.1 0-4-1.1-5-2.9l-12.3-21.1 27.7-48 5 8.7c1 1.8 1 4 0 5.8l-19.3 33.5 3.8 6.6 21-36.4 13.8 23.9c2.1 3.7 2.1 8.2 0 11.9l-14 24.3c-2.1 3.7-8.8 12-20.8 12s-18.6-8.3-20.8-12l-14-24.3c-2.1-3.7-2.1-8.2 0-11.9z"></path><g class="text" transform="translate(102 25)"><path d="m0 1.8h9.7v57.3h-9.7z"></path><circle cx="22.7" cy="6.6" r="5.7"></circle><path d="m17.8 19.3h9.8v39.8h-9.8z"></path><path d="m53.3 18.3c-11.1 0-20.1 7.8-20.1 20.2s7.8 20 20.2 20c4.9 0 10.1 2.5 10.1 8s-4.4 8.6-10.1 8.6-10.4-3.4-10.4-8.6h-9.8c0 10.7 8.6 17.8 20.2 17.8 11.5 0 19.9-6.8 19.9-17.8 0-5.1-1.6-9.9-8.2-13.2 6.5-3 8.4-9.9 8.4-14.9 0-12.3-9.1-20.1-20.2-20.1zm.1 32.1c-5.7 0-10.4-4.9-10.4-11.9 0-6.9 4.7-12 10.4-12s10.3 5.2 10.3 12c0 6.9-4.7 11.9-10.3 11.9z"></path><path d="m101.9 18.3c-4.5 0-8.8 1.4-12.4 5.9v-22.5h-9.8v57.3h9.8v-20.2c0-5.9 4-10.8 9.8-10.8 5.2 0 9 3.1 9 10.3v20.7h9.8v-21.4c.1-11.7-4.9-19.3-16.2-19.3z"></path><path d="m142 52.3c-1.2 0-2.2-.4-2.8-1.2s-.9-2-.9-3.8v-19.6h7.9l.9-8.5h-8.7v-10.9l-9.9 1.1v9.9h-7.5v8.5h7.5v19.8c0 4.1 1 7.2 2.9 9.3s4.8 3.2 8.5 3.2c1.7 0 3.3-.2 5-.7s3.2-1.2 4.5-2.1l-3.4-6.3c-1.3.9-2.7 1.3-4 1.3z"></path><path d="m182.3 37.7c-4-2.5-8.7-2.8-13.3-3.1-2.7-.2-6.8-.8-6.8-4.3 0-2.5 2.6-3.9 7.3-3.9 3.8 0 7.1.9 9.9 3.5l5.5-6.4c-4.6-4-9.3-5.2-15.6-5.2-7.3 0-16.9 3.2-16.9 12.4 0 3.8 2 7.3 5.3 9.3 3.7 2.3 8.5 2.6 12.6 3.1 2.8.3 7.4 1 6.6 4.9-.5 2.7-3.8 3.5-6.1 3.6-2.5.1-5-.1-7.5-.7-2.6-.7-4.7-1.9-7-3.4l-5 6.3c.3.2.6.5.6.5 6.4 5.3 15.3 7 23.4 5.2 6.1-1.4 11.3-5.8 11.3-12.4.2-3.7-1-7.4-4.3-9.4z"></path><path d="m214.6 18.3c-4.5 0-9.8 1.9-12.9 6.3l-.3-5.4h-9.5v57.3l9.8-1.1v-21c2.8 4.3 8.9 5.7 13.1 5.7 12.7 0 20.1-9.5 20.1-21 0-11.7-8.1-20.8-20.3-20.8zm-.8 33.3c-6.7 0-11.2-6.1-11.2-12.3s4.2-12.8 11.2-12.8c7.1 0 11.2 6.7 11.2 12.8.1 6.2-4.5 12.3-11.2 12.3z"></path><path d="m247.7 42.7c1.1 4.7 5.4 8.8 12.4 8.8 3.6 0 8.4-1.8 10.7-4.1l6.3 6.2c-4.2 4.3-11.1 6.4-17.1 6.4-12.4 0-21.4-8.2-21.4-20.9 0-12 9.3-20.8 20.7-20.8 12 0 22 8.2 21 24.4zm23.1-7.5c-1.1-4.7-5.8-8.8-11.5-8.8-5.3 0-10.2 3.6-11.6 8.8z"></path><path d="m293.1 42.7c1.1 4.7 5.4 8.8 12.4 8.8 3.6 0 8.4-1.8 10.7-4.1l6.3 6.2c-4.2 4.3-11.1 6.4-17.1 6.4-12.4 0-21.4-8.2-21.4-20.9 0-12 9.3-20.8 20.7-20.8 12 0 22 8.2 21 24.4zm23.2-7.5c-1.1-4.7-5.8-8.8-11.5-8.8-5.3 0-10.2 3.6-11.6 8.8z"></path><path d="m349.4 60.1c4.5 0 9.8-1.9 12.9-6.3l.3 5.3h9.5v-57.3h-9.8v22.2c-2.8-4.3-9-5.6-13.2-5.6-12.7 0-20 9.4-20 21s8.1 20.7 20.3 20.7zm.7-33.3c6.7 0 11.2 6.1 11.2 12.3s-4.2 12.8-11.2 12.8c-7.1 0-11.2-6.7-11.2-12.8 0-6.2 4.5-12.3 11.2-12.3z"></path></g></svg>
      <List />
      <i className="el-icon-delete" />
      <i className="el-icon-message-solid"></i>
      {/* <i className="el-icon-delete"></i> */}
      <i class="el-icon-message-solid"></i>
      <AiFillBell />
    </div>
    
  );
}

export default App;


const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}

function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      {/* <del>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </del> */}
      <del>test false: [{false}] ==</del>
    </li>
  );
  return (
    <Messenger />
  );
}