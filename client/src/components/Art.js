import { React, useState } from "react";
import axios from "axios";

function Art() {

    const [file, setFile] = useState();

    const createObjectURL = (file) => {
        if (window.URL && window.URL.createObjectURL) {
            return window.URL.createObjectURL(file);
        } else if (window.webkitURL && window.webkitURL.createObjectURL) {
            return window.webkitURL.createObjectURL(file);
        } else {
            throw new Error("Your browser does not support createObjectURL");
        }
    };

    // handle selecting an image
    function handleChange(event) {
        console.log(event.target.files[0]);
        setFile(createObjectURL(event.target.files[0]));
    }

    // handle submitting the image
    async function onSubmit(event) {
        try {
            event.preventDefault();

            // create formData object to send the file
            const formData = new FormData();
            formData.append("file", event.target.elements.file.files[0]);

            // send POST request to API server with file data
            const res = await axios.post("http://127.0.0.1:5000/sample", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <section id="main">
                <div id="app">
                    <div>
                        <h3>Select an image and create an Art!</h3>
                    </div>
                    <form id="imageForm" encType="multipart/form-data" method="POST" onSubmit={onSubmit}>
                        <label htmlFor="imageFile">Choose File</label>
                        <input id="imageFile" name="file" type="file" onChange={handleChange} />
                        {file && <img src={file} alt="selected" />}
                        <h3 style={{ marginTop: "50px" }}>Choose Art style!</h3>
                        <p style={{ marginBottom: "50px" }}>Option1, Option2, Option3...</p>
                        <label htmlFor="createArt">Create Art!</label>
                        <input id="createArt" type="submit" />
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Art;