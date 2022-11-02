import axios from 'axios'

export function createDetails(details: object) {
  axios({
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    url: 'http://localhost:3050/api/create',
    data: JSON.stringify(details)
  }).then((resp) => {
    console.log("resp>>>>", resp);
    console.log(resp?.data?.message);
  }).catch((err) => {
    console.log(err)
  })
}
