import axios from 'axios'

export async function createDetails(details: object) {
  axios({
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    url: 'http://localhost:3050/api/create',
    data: JSON.stringify(details)
  }).then((resp) => {
    console.log("resp from actions>>>>", resp);
    alert("Created successfully");
    return resp;
  }).catch((err) => {
    console.log(err)
  })
}
