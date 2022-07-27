import { Carousel } from 'react-bootstrap';

function CarouselStrap(props) {

  const propImages = props.images
  const propArtist = props.artist;
  const propLink = props.link;
  console.log(props.images);
  console.log(props.artist)
  return (
    
    <Carousel>
      
      <Carousel.Item>
        <div>
          <img
            className="images"
            src={ propImages }
            alt="First slide"
          />
        <Carousel.Caption>
          <h2>Art by { propArtist }</h2>
          <a href={ propLink }>Click Me For Another!</a>
        </Carousel.Caption>
        
      </div>
     </Carousel.Item>

    </Carousel>

  )

}

export default CarouselStrap;