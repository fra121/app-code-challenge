import PersonItem from './PersonItem/PersonItem';
import './PersonList.css';

function PersonList(props) {

  return (
    <section className="PersonList">
      {
        props.people.map((person, index)=> <PersonItem personChange={props.personChange} key={index} person={person} />)
      }
    </section>
  );
}

export default PersonList;
