import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'

// TODO: редагування івенту, користувачі, скрол, роутінг, ФОТО
class PhotoUpload extends Component {
    handleDrop = files => {
        const uploaders = files.map(file => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `codeinfuse, medium, gist`);
            formData.append("upload_preset", "x0pndjup");
            formData.append("api_key", "723345884241221"); // Replace API key with your own Cloudinary key
            formData.append("timestamp", (Date.now() / 1000) | 0);
            return axios.post("https://api.cloudinary.com/v1_1/codeinfuse/image/upload", formData, {
                headers: {"X-Requested-With": "XMLHttpRequest"},
            }).then(response => {
                const data = response.data;
                const fileURL = data.secure_url // You should store this URL for future references in your app
                console.log(fileURL);
                this.props.photo(fileURL);
                return fileURL
            })
        });
        axios.all(uploaders).then(() => {
        });
    };

    render() {
        return (
            <div className="add-event__input">
                <Dropzone className="add-event__photo"
                          onDrop={this.handleDrop}
                          multiple
                          accept="image/*">
                    <p className="add-event__photo_text"> Upload a photo</p>
                </Dropzone>
            </div>)
    }
}

export default PhotoUpload