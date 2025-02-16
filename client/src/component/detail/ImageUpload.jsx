import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export default function ImageUpload({getFileName}) {
    const imageUpload = (e) => {
        const formData = new FormData();
        console.log(e.target.files[0]);
        formData.append("file",e.target.files[0]);
        axios.post('http://localhost:9000/upload/file',formData,{
                    "headers":{"Content-type":"multipart/form-data"}
                })
                .then(res => getFileName(res.data))
                .catch(err => console.log(err));

    }

    return (
        <div>
            <Form.Control type="file" onChange={(e) => imageUpload(e)} />
        </div>
    );
}

