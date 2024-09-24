import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
};

const slideImages = [
  {
    url: new URL('/public/assets/image1.jpg', import.meta.url).href,
  },
  {
    url: new URL('/public/assets/image3.jpg', import.meta.url).href,
  },
  {
    url: new URL('/public/assets/image4.jpg', import.meta.url).href,
  },
  {
    url: new URL('/public/assets/image5.jpg', import.meta.url).href,
  },
  
  {
    url: new URL('/public/assets/image7.jpg', import.meta.url).href,
  }
];

const buttonStyle = {
  width: '30px',
  background: 'none',
  border: '0px'
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}></button>,
  nextArrow: <button style={{ ...buttonStyle }}></button>,
  autoplay: true,
  interval: 3000,
  transitionDuration: 500
};

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="rounded-lg overflow-hidden border-4 border-amber-700">
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
              className="rounded-lg"
            >
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
