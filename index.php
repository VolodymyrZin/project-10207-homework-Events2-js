<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Image Uploader & Slider</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <div id="upload-form">
            <form id="form">
                <input type="file" id="file" accept="image/*">
                <button type="submit">Upload</button>
                <div id="error"></div>
            </form>
        </div>
        <div id="slider" class="hide">
            <button id="prev">&#9664;</button>
            <img id="slider-image" src="" alt="slide">
            <button id="next">&#9654;</button>
        </div>
        <script src="js/script.js" defer></script>
    </body>
</html>

