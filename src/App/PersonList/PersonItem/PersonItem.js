import './PersonItem.css';

function PersonItem(props) {
  const person = props.person;

  return (
    <div className="PersonItem flex-row" onClick={() => {props.personChange(person)}}>
      <img className="profile-image" alt="Profile"
        src={person.picture.large} />
      <div className="name-container flex-column justify-center">
        <div>{person.name.title} {person.name.first}</div>
        <div>{person.name.last}</div>
      </div>
    </div>
  );
}

export default PersonItem;
