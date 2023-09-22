import { React, useState } from "react";
import axios from "axios";

function Home() {

    const [file, setFile] = useState();
    const [prediction, setPrediction] = useState("");

    // handle selecting an image
    function handleChange(event) {
        console.log(event.target.files);
        setFile(URL.createObjectURL(event.target.files[0]));
    }

    // handle submitting the image
    async function onSubmit(event) {
        try {
            // send POST request to API server with file data
            const res = await axios.post("<your base URL>/predict", file);

            console.log(res.data);

            // update prediction to display it on screen
            setPrediction(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <section id="main">
                <div id="app">
                    <div>
                        <h3>Select an image to classify!</h3>
                    </div>
                    <form id="imageForm" enctype="multipart/form-data" method="POST" onSubmit={onSubmit}>
                        <label for="imageFile">Choose File</label>
                        <input id="imageFile" name="file" type="file" onChange={handleChange} />
                        {file && (
                            <>
                                <img src={file} alt="selected" />
                                <label for="classifyImage">Classify Image</label>
                                <input id="classifyImage" type="submit" />
                            </>
                        )}
                        {prediction !== "" &&
                            <div class="prediction">{prediction}</div>}
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Home;