import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'

// TODO: редагування івенту
class PhotoUpload extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageURL: '',
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
            return axios.post("https://api.cloudinary.com/v1_1/codeinfuse/image/upload", formData, {
                headers: {"X-Requested-With": "XMLHttpRequest"},
            }).then(response => {
                const data = response.data;
                const fileURL = data.secure_url // You should store this URL for future references in your app
                this.setState({ imageURL: fileURL });
                console.log("this.state.file: ",fileURL);
                this.props.photo(fileURL);
                return fileURL
            })
        });
        axios.all(uploaders).then(() => {

        });
    };

    render()
        {
        return (
                //<div className="add-event__input">
                  //  <Dropzone className="add-event__photo"
                    //          onDrop={this.handleDrop}
                      //        multiple
                        //      accept="image/*">
                        //<p className="add-event__photo_text"> Upload a photo</p>
                        //<img src={this.state.imageURL} alt="img" />
                    //</Dropzone>
                //</div>
            <div className="add-event__input-big">
                <Dropzone className="add-event__photo"
                          onDrop={this.handleDrop}
                          multiple
                          accept="image/*">
                    <p className="add-event__photo_text"> Upload a photo</p>
                    {/*<img src={this.state.imageURL}  className="add-event__photo_upload"/>*/}
                    {this.state.imageURL?  <img src={this.state.imageURL}  className="add-event__photo_upload"/>:'' }
                </Dropzone>
            </div>

        )
        }


}

export default PhotoUpload