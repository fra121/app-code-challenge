import './Details.css';
import { Link } from 'react-router-dom';
import ArrowBack from 'assets/arrow_back.svg';

function Details(props) {
  const person = props.person;

  const formatedDate = new Date(person.dob.date).toLocaleDateString("en-US");

  return (
    <div>
      <Link to="/">
        <img src={ArrowBack} className="back-icon" />
      </Link>

      <div className="details-container">
        <img src={person.picture.large} alt="Profile" className="profile-photo" />
        <h2>{person.name.title} {person.name.first} {person.name.last}</h2>
        <div>{formatedDate}</div>
        <div>{person.location.street.name} {person.location.street.number}, {person.location.city}, {person.location.state}, {person.location.country}</div>
        <div>{person.email}</div>
        <div>{person.phone}</div>
      </div>
    </div>
  );
}

export default Details;
