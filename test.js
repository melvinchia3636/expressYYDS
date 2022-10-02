const axios = require("axios");

axios("http://localhost:3000/play/anymethod", {
  method: "CONNECT",
  data: {
    name: "Melvin",
  },
})
  .then((res) => console.log(res))
  .catch((err) => console.log(err.response));
