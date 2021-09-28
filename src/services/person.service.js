import env from '/environments/environment'

export class PersonService {
  getAll() {
    return fetch(env.apiBaseUrl + '?results=15')
      .then(response => response.json());
  }
}