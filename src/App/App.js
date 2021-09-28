import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

import PersonList from './PersonList/PersonList';
import Header from './Header/Header';
import Details from './Details/Details';
import { PersonService } from 'services/person.service';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";

function App() {
  const [list, setList] = useState([]);
  const [selectedPerson, selectPerson] = useState({
    name: {
      first: ''
    }
  });

  const history = useHistory();

  function changeSelectedPerson(person) {
    selectPerson(person);
    history.push("/details");
  }

  useEffect(() => {
    new PersonService().getAll()
      .then(result => {
        setList(result.results);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/details">
            <Details person={selectedPerson} />
          </Route>
          <Route path="/">
            <PersonList personChange={changeSelectedPerson} people={list} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
