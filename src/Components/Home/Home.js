import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';
import './home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import fakeData from '../../fakeData'
import LocationItem from './LocationItem'
import 'swiper/swiper.scss'; 
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import { Container, Row, Col ,Jumbotron,Button } from 'react-bootstrap';
import { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y ,Autoplay]);

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [booking, setBooking] = useState({})
 

  useEffect(() => {
    const activeItem = fakeData.find((loctaion, index) => index.toString() === slideIndex.toString())
    setBooking(activeItem)
  }, [slideIndex])

  const onClickHandler = swiper => {
    if (swiper.clickedSlide) {
      if (swiper.clickedSlide.attributes) {
        var a = swiper.clickedSlide.attributes.getNamedItem('data-swiper-slide-index').value;
        setSlideIndex(a);
      }
    }
  }
  return (
    <Container className="pr-0 mt-5 pt-5">
      <Row sm={4} xl={4}>

        <Col xs={6}>
              
             
          <Jumbotron className="bg-transparent px-0">
            <h1 className="font-weight-bold">{booking.name}</h1>
            <p>{booking.description?.slice(0, 150)} ...</p>
            <Link to={`/booking/${booking.id}`}> <Button className="px-4 py-2" variant="warning" >Booking ... </Button></Link> 
          </Jumbotron>
            
                   
        </Col>
        <Col sm={8} xl={8}>
          <Swiper
            spaceBetween={15}
            slidesPerView={2.3}
            navigation
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
            loop={true}
            onClick={(swiper) => onClickHandler(swiper)}
            onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
          
          >
            {fakeData.map(slideContent=> {
              return <SwiperSlide key={slideContent.id}>
                 {({ isActive }) => (
                <LocationItem Location={slideContent} isActive={isActive}></LocationItem>
                 )}
              </SwiperSlide>;
            })}
           
          </Swiper>
        </Col>
      </Row>

    </Container>
  );
};

export default Home;