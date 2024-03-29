class Api {
  constructor({ headers }) {
    this._baseUrl =
      process.env.NODE_ENV === 'production'
        ? 'https://api.juliebook.students.nomoredomainssbs.ru'
        : 'http://localhost:3000';
    this._headers = headers;
  }

  setToken(token) {
    this._headers.authorization = `Bearer ${token}`;
  }

  _processResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  };

  getInitialCards() {
    const url = this._baseUrl + '/cards';
    return fetch(url, {
      headers: this._headers,
    })
      .then(this._processResponse)
      .catch((err) => {
        console.log(err); // log the error to the console
        throw err;
      });
  }

  getUserInfo() {
    const url = this._baseUrl + '/users/me';
    return fetch(url, {
      headers: this._headers,
    })
      .then(this._processResponse)
      .catch((err) => {
        console.log(err); // log the error to the console
        throw err;
      });
  }

  patchUserAvatar(info) {
    const url = this._baseUrl + '/users/me/avatar';
    // TO DO: check to make sure the url leads to a valid image
    //https://www.codegrepper.com/code-examples/javascript/frameworks/jquery/how+to+check+if+image+url+is+valid+javascript
    return fetch(url, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(info),
    })
      .then(this._processResponse)
      .catch((err) => {
        console.log(err); // log the error to the console
        throw err;
      });
  }

  patchUserInfo(info, token) {
    const url = this._baseUrl + '/users/me';
    return fetch(url, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(info),
      authorization: `Bearer ${token}`,
    })
      .then(this._processResponse)
      .catch((err) => {
        console.log(err); // log the error to the console
        throw err;
      });
  }

  deleteCard(id) {
    const url = this._baseUrl + '/cards/' + id;
    return fetch(url, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._processResponse)
      .catch((err) => {
        console.log(err); // log the error to the console
        throw err;
      });
  }

  uploadCard(info) {
    const url = this._baseUrl + '/cards';
    return fetch(url, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(info),
    })
      .then(this._processResponse)
      .catch((err) => {
        console.log(err); // log the error to the console
        throw err;
      });
  }

  likeCard(id) {
    const url = this._baseUrl + '/cards/' + id + '/likes/';
    return fetch(url, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(this._processResponse)
      .catch((err) => {
        console.log(err); // log the error to the console
        throw err;
      });
  }

  unlikeCard(id) {
    const url = this._baseUrl + '/cards/' + id + '/likes/';
    return fetch(url, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._processResponse)
      .catch((err) => {
        console.log(err); // log the error to the console
        throw err;
      });
  }
}

export default Api;
