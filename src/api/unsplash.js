import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID fd0d04e720b832fdbefba3c5f1fd70ddfadd3434a171f9c8398ccea0bc6f0232",
  },
});