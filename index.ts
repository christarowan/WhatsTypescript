import './style.css';

const form: HTMLFormElement = document.querySelector('#defineform');

form.onsubmit = async () => {
  const formData = new FormData(form);
  const text = formData.get('defineword') as string;
  
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v3/entries/en/${text}`);
    const data = await response.json();

    // Access the definition from the API response
    const definition = data[0]?.meaning?.noun?.[0]?.definition;
    console.log(definition);
    
  } catch (error) {
    console.error('Failed to fetch word definition:', error);
  }

  return false; // prevent reload
};

