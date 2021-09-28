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

  // Usually I would do this using a query on a backend
  function filterTheList(list) {
    let filteredList = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i].dob.age < 18) {
        continue;
      }
      const timezone = +list[i].location.timezone.offset.replace(':', '');

      if (timezone >= -100 && timezone <= 100) {
        filteredList.push(list[i]);

        if (filteredList.length === 15) {
          break;
        }
      }
    }

    return filteredList;
  }

  useEffect(() => {
    new PersonService().getAll()
      .then(result => {
        setList(filterTheList(result.results));
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
