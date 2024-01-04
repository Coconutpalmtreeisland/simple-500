import React from 'react'
import axios from 'axios'

const PostImage = (props) => {

    const FileUpload = (e) => {
        const formData = new FormData();
        let files = document.querySelector('input[type="file"]').files;
        for (let i = 0; i < files.length; i++) {
            formData.append('image', files[i]);
        }

        axios
            .post("/api/post/image/upload", formData)
            .then((response) => {
                console.log(response);
                props.setImage(response.data.filePath);
            })
    }

    return (
        <div>
            <input
                type="file"
                accept='image/*'
                multiple
                onChange={(e) => FileUpload(e)}
            />
        </div>
    )
}

export default PostImage