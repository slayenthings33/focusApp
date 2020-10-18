import React, { Component } from 'react';
import './AlertModal.css';
import Modal from 'react-bootstrap/Modal';
import { Alert } from 'bootstrap';

class AlertModal extends Component {
  constructor(props){
    console.log(props);
    super(props);
    this.state = {
      showModal: this.props.showModal,
    };
    this.launchVideo = this.launchVideo.bind(this);
    // this.handleOpenModal = this.handleOpenModal.bind(this);
    // this.handleClosenModal = this.handleCloseModal.bind(this);
    // document.getElementById("movieContainer").style.display = "none";
  }

  // componentDidMount() {
  //   document.getElementById("movieContainer").style.display="none";
  // }

  componentDidUpdate() {
    console.log("**************************")
    console.log(this.state)
  }

  launchVideo() {
    document.getElementById("emojiBreakContainer").style.display = "none";
    document.getElementById("movieContainer").style.display = "flex";
    console.log("launchVideo")
  }

  // handleOpenModal() {
  //   this.setState({showModal: true});
  // }
  // handleCloseModal() {
  //   this.setState({showModal: false});
  // }

  render() {
    console.log(this.state.showModal)
    return (
      <div id="alertModalContainer">
        <Modal show={this.state.showModal} aria-labelledby="contained-modal-title-vcenter" size="xl" centered >
          <Modal.Header closeButton /* onClick={this.handleCloseModal} */>
            <Modal.Title class="emojiText">Break Time!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div id="emojiBreakContainer">
                    <span class="emojiText" id="emojiQuestionText">How are you feeling?</span>
                  <div id="modalIconContainer">
                    <div className="modalIconCollumn">
                      <img src="img/happy.png" alt="" className="modalIcons" onClick={this.launchVideo}/>
                      <span class="emojiText">Happy</span>
                    </div>
                    <div className="modalIconCollumn">
                      <img src="img/tired.png" alt="" className="modalIcons" onClick={this.launchVideo}/>
                      <span class="emojiText">Tired</span>
                    </div>
                    <div className="modalIconCollumn">
                      <img src="img/stressed.png" alt="" className="modalIcons" onClick={this.launchVideo}/>
                      <span class="emojiText">Stressed</span>
                    </div>
                </div>
              </div>
              <div id="movieContainer">
              <iframe src="https://www.youtube.com/embed/Nnd5Slo02us" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AlertModal;