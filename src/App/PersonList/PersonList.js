import PersonItem from './PersonItem/PersonItem';
import './PersonList.css';

function PersonList(props) {
  return (
    <section className="PersonList">
      {
        props.people.map(person => <PersonItem key={person.id} person={person}/>)
      }
    </section>
  );
}

export default PersonList;
