import React from "react"
import Dropzone from "react-dropzone"
import { CLOUDINARY_URL } from "../../api/index"
import "./PhotoUpload.scss"
import block from "../../helpers/BEM"
import { compose } from "ramda"
import { withHandlers } from "recompose"

const b = block("PhotoUpload")

const PhotoUpload = ({ input, uploadPhoto }) => (
  <div className={b()}>
    <Dropzone className={b("dropzone")} onDrop={uploadPhoto} multiple accept="image/*">
      <p className={b("text")}> Upload a photo</p>
      {input.value ? <img alt="" src={CLOUDINARY_URL + "/" + input.value} className={b("photo")} /> : ""}
    </Dropzone>
  </div>
)

const enhance = compose(
  withHandlers({
    uploadPhoto: ({ input }) => files => {
      files.map(file => {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("tags", `codeinfuse, medium, gist`)
        formData.append("upload_preset", "x0pndjup")
        formData.append("api_key", "723345884241221")
        formData.append("timestamp", (Date.now() / 1000) | 0)

        return fetch("https://api.cloudinary.com/v1_1/codeinfuse/image/upload", {
          method: "POST",
          headers: { "X-Requested-With": "XMLHttpRequest" },
          body: formData
        })
          .then(res => res.json())
          .then(({ public_id }) => input.onChange(public_id))
      })
    }
  })
)

export default enhance(PhotoUpload)
