var axios = require('axios');
var data = JSON.stringify({
  "action": "public sale",
  "network": "homestead"
});

var config = {
  method: 'post',
  url: 'https://www.juuni.xyz/api/mint-signature',
  headers: { 
    'Content-Type': 'application/json', 
    'Cookie': '__Host-next-auth.csrf-token=b095a356d9d6f2aa5aa3ad34f142386c85c90df94aee4cc1e7ac739105e06d7e%7C426adf367726dedfc0bcc5801530a125e7232c51b04e50f51a35279cd9b84261; __Secure-next-auth.callback-url=https%3A%2F%2Fwww.juuni.xyz; __Secure-next-auth.session-token='
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
