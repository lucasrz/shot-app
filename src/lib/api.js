import axios from 'axios';
import { reject } from 'q';
const clientdID = 'c4a540e4eb65bd1f82d84c04e27adc6adc470f70396faa99ecb2ddc32c6a6021';
const clientSecret = 'f7a677c862679bc86a81a5c7efd1511c5c1cb754decd8f5f717c8252423f7e8c';

async function getShots() {
  return auth().then(res => {
    if(!res.data.access_token) {
      reject();
    }
    const accessToken = res.data.access_token;

    return axios
            .get(`https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`)
              .then(res => res.data);
  })
}

async function getShot(action) {
  return auth().then(res => {
    if(!res.data.access_token) {
      reject();
    }

    const accessToken = res.data.access_token;
    return axios
            .get(`https://api.dribbble.com/v2/shots/${action.id}?access_token=${accessToken}`)
              .then(res => res.data);
  })  
}

function auth() {
  return axios.get(`https://dribbble.com/oauth/authorize?client_id=${clientdID}`).then(res => {
    console.log("(res.request.responseURL:", res.request.responseURL);
    const url = new URL(res.request.responseURL);
    const code = url.searchParams.get('code');
    if(!code) {
      reject();
    }

    const authData = {
      client_id: clientdID,
      client_secret: clientSecret,
      code: code,
    }
    return axios.post(`https://dribbble.com/oauth/token`, authData).then(res => res)
  }, err => console.log(err))
}

export {
  getShot,
  getShots,
  auth
}