import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import sjimg1 from '/public/sjimg1.webp'
import sjimg2 from '/public/sjimg2.webp'
import sjimg3 from '/public/sjimg3.webp'
// import CategoryNav from './categoryNav';
function Home() {
    return (
      <>
      {/* <CategoryNav/> */}
      <div style={{marginTop:'4rem', padding:'1rem'}}>
      <Carousel fade>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <img
          className="d-block w-100"
          style={{ height: '500px', objectFit: 'cover' }}
          src={sjimg1}
          alt="First slide"
        />
            <Carousel.Caption>
              <h3>Shivam Jewellers</h3>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Second slide" /> */
            <img
          className="d-block w-100"
          style={{ height: '500px', objectFit: 'cover' }}
          src={sjimg2}
          alt="First slide"
        />}
            <Carousel.Caption>
              <h3>Shivam Jewellers</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <img
          className="d-block w-100"
          style={{ height: '500px', objectFit: 'cover' }}
          src={sjimg3}
          alt="First slide"
        />
            <Carousel.Caption>
              <h3>Shivam Jewellers</h3>
              {/* <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      </>
        
      );
}

export default Home;