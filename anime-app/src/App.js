import './App.css';
import CarouselStrap from "./CarouselStrap";
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
    const [homeImages, setHomeImages] = useState([]);
    const [artist, setArtist] = useState('');
    const [link, setLink] = useState('');
  
    useEffect(() => {
      getImages()
    }, [])
  
  
    async function getImages() {
      const res = await axios.get(`https://api.catboys.com/img`)
      console.log(res);
      setHomeImages(res.data.url)
      setArtist(res.data.artist)
      setLink(res.data.source_url)

    }
    

  
    return (
      <div className="App">
        <h1>Catboy Anime Station</h1>
        <CarouselStrap images={ homeImages } artist={ artist } link={ link }/>
        
      </div>
    );
  }
  
  export default App;