import React, { Component } from 'react';
import './AlertModal.css';
import Modal from 'react-bootstrap/Modal';

class AlertPage extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
    this.launchVideo = this.launchVideo.bind(this);
    // document.getElementById("movieContainer").style.display = "none";
  }

  componentDidMount() {
    document.getElementById("movieContainer").style.display="none";
  }

  launchVideo() {
    document.getElementById("emojiBreakContainer").style.display = "none";
    document.getElementById("movieContainer").style.display = "flex";
    console.log("launchVideo")
    // document.getElementById("movieContainer").src = "https://www.youtube.com/watch?v=yGeJ745bB_8";
    // document.getElementById("myVideo").load();

  }

  // https://www.youtube.com/watch?v=yGeJ745bB_8

  render() {
    return (
      <div id="alertModalContainer">
        <Modal show={true} aria-labelledby="contained-modal-title-vcenter" sieze="xl" centered >
          <Modal.Header closeButton>
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
                <iframe src="https://www.youtube.com/embed/yGeJ745bB_8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AlertPage;