import React from "react";
import Avatar from "react-avatar-edit";
import img from '../images/example.jpeg'
import '../style/portrait.css'

export default class Portrait extends React.Component {
    constructor(props) {
        super(props);
        const src = img;
        this.state = {
          preview: null,
          src,
        };
        this.onCrop = this.onCrop.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this);
      }

      onClickToggle() {
        const portrait = document.querySelector('#portrait>div')
        portrait.classList.toggle('hidden')
      }
    
      onClose() {
        this.onClickToggle()
      }
    
      onCrop(preview) {
        this.setState({ preview });
      }
    
      onBeforeFileLoad(elem) {
        if (elem.target.files[0].size > 1024*1000) {
          alert("File is too big! Size should less than 1MB");
          elem.target.value = "";
        }
      }
    
      render() {
        return (
          <div id="portrait">
            <img  src={this.state.preview} alt="Preview" onClick={this.onClickToggle} />
            <Avatar
              width={390}
              height={295}
              onCrop={this.onCrop}
              onClose={this.onClose}
              onBeforeFileLoad={this.onBeforeFileLoad}
              src={this.state.src}
            />
          </div>
        );
      }
      componentDidMount() {
        const portrait = document.querySelector('#portrait>div')
        portrait.classList.add('hidden')
      }
}