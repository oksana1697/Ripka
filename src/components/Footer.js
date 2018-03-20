import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import axios from 'axios'


class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleDrop = files => {
        // Push all the axios request promise into a single array
        const uploaders = files.map(file => {
            // Initial FormData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `codeinfuse, medium, gist`);
            formData.append("upload_preset", "x0pndjup"); // Replace the preset name with your own
            formData.append("api_key", "723345884241221"); // Replace API key with your own Cloudinary key
            formData.append("timestamp", (Date.now() / 1000) | 0);

            // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
            return axios.post("https://api.cloudinary.com/v1_1/codeinfuse/image/upload", formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                const fileURL = data.secure_url // You should store this URL for future references in your app
                console.log(data);
                console.log(fileURL);

            })
        });

        // Once all the files are uploaded
        axios.all(uploaders).then(() => {
            // ... perform after upload is successful operation
        });
    };



    render() {
        return (
            <div className="footer">
                <div className="footer__container">
                    <p className="footer__heading">ABOUT US</p>
                    <p className="footer__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
                <div className="footer__container">
                <p className="footer__heading">OUR TEAM</p>
                <p className="footer__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
                <div className="footer__container">
                    <p className="footer__heading">PRIVACY</p>
                    <p className="footer__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
            </div>
        )
    }
}

export default Footer