
if (process.env.NODE_ENV === 'development'){
    module.exports = {
        REACT_APP_API_URL: 'http://localhost:8080'
    }  
} else {
    module.exports = {
        REACT_APP_API_URL: 'https://trasktracker-backend.herokuapp.com'
    }
}

