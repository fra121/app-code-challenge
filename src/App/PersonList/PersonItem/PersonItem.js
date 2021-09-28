import './PersonItem.css';

function PersonItem(props) {
  const person = props.person;

  return (
    <div className="PersonItem flex-row">
      <img className="profile-image" alt="Profile" src="https://unsplash.com/photos/Ye4M0JVY29o/download?force=true&w=640"/>
      <div className="name-container flex-column justify-center">
        <div>{person.name}</div>
      </div>
    </div>
  );
}

export default PersonItem;
