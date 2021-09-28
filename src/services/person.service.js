import { environment } from 'environments/enviroment';
export class PersonService {
  getAll(timezone = '', age = '') {
    let filters = `timezone=${timezone},age${age}`;

    return fetch(`${environment.apiBaseUrl}?inc=name,picture,dob,location,email,phone&results=15&${filters}`)
      .then(response => response.json());
  }
}