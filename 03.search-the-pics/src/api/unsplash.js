import axios from 'axios';

// Customized instance of Axios
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 5839bc034e0e1c07f3ca3b81ba818ec02b5e70cceccac76c2b3c99eb1bc57336'
  }
});
