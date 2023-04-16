// Import stylesheets
import './style.css';


const form: HTMLFormElement = document.querySelector('#defineform');
// holds baseURL for Dictionary API
const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en_US/';

//async function handles the form 
form.onsubmit = async () => {
  const formData = new FormData(form);
  const text = formData.get('defineword') as string;
  console.log(text);
  // gets the first word user entered

  try {
    // fetch to send request to Dictionary API
    const response = await fetch(API_URL + text);
    // await to parse the response body as JSON
    // and log to console
    const data = await response.json(); 
    console.log(data);
  } catch (error) {
    // handles any errors during API request 
    console.error(error); 
  }


  return false; // prevent reload
};