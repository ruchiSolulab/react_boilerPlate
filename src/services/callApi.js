/* axios with abort */

import axios from 'axios';

const callAPI = (
  apiURL,
  apiMethod,
  apiData = null,
  resolveDataAsReponse = false,
  contentType = 'application/json',
  headerRequired = true,
) => {
  let responseData = {};

  let headers = {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDgwNTA1NzU4ODAsInVzZXIiOnsiX2lkIjoiNWUxNTgyNjc0N2FiZTkzYTJjYjlmMTA2IiwicGhvdG8iOiIvdXNlclByb2ZpbGUvZGVmYXVsdC11c2VyLnBuZyIsImZpcnN0TmFtZSI6ImFycGl0IiwiY3JlYXRlZFRpbWUiOiIyMDIwLTAxLTA4VDA3OjE5OjAzLjY3NloiLCJlbWFpbCI6W3siaXNWZXJpZmllZCI6ZmFsc2UsInByaW1hcnkiOnRydWUsIl9pZCI6IjVlMTU4MjY4NDdhYmU5M2EyY2I5ZjEwOSIsImVtYWlsIjoiYXJwaXRAc29sdWxhYi5jbyJ9XSwicGhvbmUiOlt7ImlzVmVyaWZpZWQiOmZhbHNlLCJwcmltYXJ5Ijp0cnVlLCJfaWQiOiI1ZTE1ODI2ODQ3YWJlOTNhMmNiOWYxMDgiLCJudW1iZXIiOjc4MDI4NDE5MTksImNvdW50cnlDb2RlIjoiKzkxIn1dLCJfX3YiOjB9LCJpYXQiOjE1ODE1MjQ3MTF9.PFcArZwituGorLAXXKvsFjmpjkj2j_guB5fLc0hX5jw',
    'Content-Type': contentType,
  };

  return new Promise((resolve, reject) => {
    axios({
      url: apiURL,
      method: apiMethod,
      data: apiData,
      headers,
    })
      .then(response => {
        if (resolveDataAsReponse) {
          resolve(apiData);
        } else {
          resolve(response);
        }
      })
      .catch(err => {
        if (!axios.isCancel(err) && err.response) {
          reject(err.response);
        }
      });
  });


};

export default callAPI;
