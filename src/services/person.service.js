import { environment } from 'environments/enviroment';
export class PersonService {
  getAll(timezone = '', age = '') {
    let filters = `timezone=${timezone},age${age}`;

    // Usually I would write the filter
    // here and do the filtering on the backend
    // but since the API doesn't support it I'll do 
    // it on the frontend and use result 1000 instead of 15
    return fetch(`${environment.apiBaseUrl}?inc=name,picture,dob,location,email,phone&results=1000&${filters}`)
      .then(response => response.json());
  }
}