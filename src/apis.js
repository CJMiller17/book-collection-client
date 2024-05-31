import axios from "axios"

const baseURL = "http://127.0.0.1:8000"

export const getToken = ({ auth, username, password }) => {
    return axios.post(`${baseURL}/token/`, { // This made the .then possible
        username: username,
        password: password
    })
        .then(response => {
            console.log("Axios Get Token Response: ", response)
            auth.setAccessToken(response.data.access)
            return response.data.access // New info on current render || Returned something to check
        })
        .catch(error => {
            console.log("Get Token Error: ", error)
            auth.setAccessToken(undefined)
    })
}

// USER related functions

export const readUser = ({ auth }) => {
    console.log("Fetch User Auth:", auth)
    axios({
        method: "get",
        url: `${baseURL}/profile/`,
        headers: {
            Authorization: `Bearer ${auth.accessToken}`
        }
    })
        .then(response => {
        console.log("Fetch User Response: ", response)
        })
        .catch(error => {
        console.log("Fetch User Error: ", error)
    })
}

export const createUser = ({ username, password, firstName, lastName }) => {
    axios({
        method: "post",
        url: `${baseURL}/create-user/`,
        data: {
            username: username,
            password: password,
            first_name: firstName,
            last_name: lastName
        }
    })
        .then(response => {
        console.log("Create User: ", response)
        })
        .catch(error => {
        console.log("Create User Error: ", error)
    })
}

// BOOK related functions

export const createBook = ({ auth, title, author, genre, favorite, rating }) => {
    axios({
        method: "post",
        url: `${baseURL}/books/`,
        headers: {
            Authorization: `Bearer ${auth.accessToken}`
        },
        data: {
            title: title,
            author: author,
            genre: genre,
            favorite: favorite,
            rating: rating
        },
    })
        .then((response) => {
            console.log("Create Book: ", response);
        })
        .catch((error) => {
            console.log("createBook Error: ", error);
        });
};

export const readBooks = ({ auth }) => {
  console.log("Fetch Books Auth:", auth)
    return axios({
        method: "get",
        url: `${baseURL}/books/`,
        headers: {
            Authorization: `Bearer ${auth.accessToken}`
        }
    })
        .then(response => {
            console.log("Fetch Book Response: ", response)
            // return response.data.length ? response.data : []
            return response.data
        })
        .catch(error => {
        console.log("Fetch Book Error: ", error)
    })
}

export const updateBook = ({ auth, id, book }) => {
  axios({
    method: "put",
    url: `${baseURL}/books/${id}`,
    headers: {
      Authorization: `Bearer ${auth.accessToken}`,
      },
    data: book // The heck is this??
  })
    .then((response) => {
      console.log("Update Book: ", response);
    })
    .catch((error) => {
      console.log("Update Book Error: ", error);
    });
};

export const deleteBook = ({ auth, id }) => {
  return axios({
    method: "delete",
    url: `${baseURL}/books/${id}`,
    headers: {
      Authorization: `Bearer ${auth.accessToken}`,
    },
  })
    .then((response) => {
      console.log("Delete Book: ", response);
    })
    .catch((error) => {
      console.log("Delete Book Error: ", error);
    });
};