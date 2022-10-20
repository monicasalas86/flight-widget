const PORT = 8000
const axios = require('axios')
const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.get('/flights', (req, res) => {
  const options ={
    url: 'https://1060f78d-1000-4ddd-b722-7d54ec0a4cd4-us-east1.apps.astra.datastax.com/api/rest/v2/namespaces/flights/collections/departures',
    headers: {
      accept: 'application/json',
      'X-Cassandra-Token': 'AstraCS:odArAbmjxZjhwkxYvSLtbtZc:8428fbc850c2ffd8647ece24ffe733b7dbc7d03ce2a0a2d607cf7da9b7734e02'
    }
  }

  axios.request(options).then(response => {
    console.log(response.data)
    res.json(response.data)
  }).catch(error => {
    console.log(error)
  })
})

app.listen(PORT, () => console.log('running on port ' + PORT))
