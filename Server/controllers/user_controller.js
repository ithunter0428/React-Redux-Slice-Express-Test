'use strict'

const axios = require('axios');

const getRandomUser = async (req, res, next) => {
  try {
    const options = {
        method: "GET",
        url: `https://randomuser.me/api/`,
    };
    const response = await axios.request(options);
    res.json(response.data.results[0]);
  }
  catch (err) {
      console.log(err);
  }
}

module.exports = {
  getRandomUser,
}
