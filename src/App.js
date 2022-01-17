
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


// api key:  dMHvzUBF




function App() {
  const apiKey = 'dMHvzUBF';
  const [art, setArt] = useState([]);
  const [userInput, SetUserInput] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  

  // Make API call to Rijks Museum API
  useEffect(() => {
    axios ({
      url: 'https://www.rijksmuseum.nl/api/en/collection',
      method: 'GET',
      dataResponse: 'json',
      params: {
        key: apiKey,
        imgonly: true,
        q: searchTerm, 
      }
    }).then ((response) => {
        console.log(response);
        setArt(response.data.artObjects);
    });
  }, [searchTerm] );
  
const handleInput = (event) => {
  console.log ('Is this working', event.target.value);
  SetUserInput(event.target.value);
  
}

const handleSubmit = (event) => {
  event.preventDefault();
  setSearchTerm(userInput);
  }

  return (
    <div className="App">
      <h1>Art's Art Museum of Artful Art</h1> 
      <h2>🌽We present you with our most top cob art collection.🌽</h2>

    <form onSubmit= { handleSubmit}>
      <label htmlFor="search"> Search for art:</label>
    </form>
    <form>
      <label htmlFor="search"> Search for art:</label>
      <input type='text' id='search' onChange ={ handleInput } value ={userInput}/>
      <button>Looky Looky!</button>
    </form>

    {art.map ((artwork) => {
    return (
      <div key ={artwork.id}>
      <h2>{artwork.longTitle}</h2>
      <img src ={artwork.webImage.url} alt={artwork.title} />
      </div>
    ) 
  }
  )}

    </div>
  );
}

export default App;
