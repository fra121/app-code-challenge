import './App.css';

import PersonList from './PersonList/PersonList';
import Header from './Header/Header';

const list = [
  {
    id: 0,
    name: 'Name 1',
    image: 'img'
  }, {
    id: 1,
    name: 'Name 2',
    image: 'img'
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <PersonList people={list}/>
      </div>
    </div>
  );
}

export default App;
