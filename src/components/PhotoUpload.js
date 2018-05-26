import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import {CLOUDINARY_URL} from "../api/index";



class PhotoUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: ""
    };
    this.handleDrop = this.handleDrop.bind(this);
  }
  handleDrop = files => {
    const uploaders = files.map(file => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `codeinfuse, medium, gist`);
      formData.append("upload_preset", "x0pndjup");
      formData.append("api_key", "723345884241221");
      formData.append("timestamp", (Date.now() / 1000) | 0);
      return axios
        .post(
          "https://api.cloudinary.com/v1_1/codeinfuse/image/upload",
          formData,
          {
            headers: { "X-Requested-With": "XMLHttpRequest" }
          }
        )
        .then(response => {
          const data = response.data;

          const imageURL = CLOUDINARY_URL+ "/" + data.public_id; // You should store this URL for future references in your app
          this.setState({ imageURL });

          this.props.photo(data.public_id);
          return imageURL;
        });
    });
    axios.all(uploaders).then(() => {});
  };

  render() {
    return (
      <div className="add__input-photo">
        <Dropzone
          className="add__photo"
          onDrop={this.handleDrop}
          multiple
          accept="image/*"
        >
          <p className="add__photo_text"> Upload a photo</p>
          {this.state.imageURL ? (
            <img
              alt=""
              src={this.state.imageURL}
              className="add__photo_upload"
            />
          ) : (
            ""
          )}
        </Dropzone>
      </div>
    );
  }
}

export default PhotoUpload;
