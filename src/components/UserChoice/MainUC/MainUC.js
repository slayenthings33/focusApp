import React, { Component } from 'react';
import './MainUC.css';
import Button from '../../Button/Button';
import Carousel from 'react-bootstrap/Carousel';



class MainUC extends Component {
  constructor(props){
    super(props);
    this.state = {
      nextBtn:this.props.nextBtn,
    };
    // let ControlledCarousel = () => {
    //   const [index, setIndex] = useState(0);
    
    //   const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    //   };
  }
  
  
  
  // activeIndex={index} onSelect={handleSelect}
  render() {
    return (
      <div id="contentContainer">
        <Carousel >
      <Carousel.Item>
        <img
          className="carouselImg"
          src="img/carouselImg/yogaVidPic.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 class="ucTitle">Yoga at Your Desk</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg"
          src="img/carouselImg/funnyPetVidsPic.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 class="ucTitle">Funny Animal Videos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImg"
          src="img/carouselImg/shortVidPic.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 class="ucTitle">Purl | Pixar Shorts</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {<Button nextBtn={this.state.nextBtn}/>}
      </div>
  );
}
}

export default MainUC;
        {/* // <div id="content">
        // <div id="fakeImg">
        //   <img id="ucPic" src="/img/yogaVidPic.jpg" alt=""/>
        // </div>
        // <p id="ucImgTitle">The title is - This</p>
        // </div>
        // <div id="btnContainer">
        //   <div id="likeBtnContainer">
        //     <img className="ucBtns" src="/img/like.png" alt=""/><img className="ucBtns" src="/img/dislike.png" alt=""/>
        //   </div>
        // </div> */}