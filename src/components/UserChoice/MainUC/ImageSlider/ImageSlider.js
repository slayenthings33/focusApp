import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './ImageSlider.css';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "img/carouselImg/yogaVidPic.jpg",
        "img/carouselImg/funnyPetVidsPic.jpg",
        "img/carouselImg/shortVidPic.jpg",
        "img/carouselImg/tedVidPic.jpg"
      ],
      imageTitles: [
        "Yoga with Adriene",
        "Cat vs. Skeleton Mouse",
        "Purl | A Pixar Animated Short",
        "How to leave the world better than you found it"
      ],
      index: 0,
      redirect: null,
      // nextPage: '/AboutUs',
    };
  }

  nextImage = () => {
    // console.log(this.state.index)
    console.log(this.state.images.length - 1)
    this.setState({
      index: this.state.index + 1
    })
    this.nextPage();
  }

  nextPage = () => {
    if (this.state.index === this.state.images.length - 1) {
      this.setState({ redirect: "/AboutUs" });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div id="carouselContainer">
        <div>
          <img id="imgSliderImg" src={this.state.images[this.state.index]} alt="" />
          <p id="ucImgSliderTitle">{this.state.imageTitles[this.state.index]}</p>
        </div>
        <div id="likeBtnsContainer">
          <img id="likeBtn" src="img/like.png" alt="" className="ucLikeBtns" onClick={this.nextImage} />
          <img id="dislikeBtn" src="img/dislike.png" alt="" className="ucLikeBtns" onClick={this.nextImage} />
          {/* <button class="imgSliderBtns" >Next Image</button> */}
        </div>
      </div>
    );
  }
}

export default ImageSlider;