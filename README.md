# Ex.07 Design of Interactive Image Gallery
## Date:16-03-2026

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
```
gallery.html
<html>
    <head>
        <title>Interactive Image Gallery</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h2>Interactive Image Gallery</h2>
        <div class="gallery">
            <img id="galleryImage" src="imagec.png">
            <p id="caption">white cockatoo</p>
            <button onclick="prevImage()">Previous</button>
            <button onclick="nextImage()">Next</button>
        </div>
        <script src="script.js"></script>
        <footer>NAME-SRI VIJAY VARSHAN.G , REF NO.25008956</footer>
    </body>
</html>

script.js
var images=["imagec.png","imagelo.png","imagemo.png","imageb.png","imagefl.png","imagepp.png"];
var captions=["white cockatoo","blue lotus","mountain view","beach view","red flower","macaw"];
var index=0;
function nextImage(){
    index++;
    if(index>5){
        index=0;
    }
    document.getElementById("galleryImage").src = images[index];
    document.getElementById("caption").innerHTML = captions[index];
}
function prevImage(){
    index--;
    if(index<0){
        index=5;
    }
    document.getElementById("galleryImage").src=images[index];
    document.getElementById("caption").innerHTML=captions[index];
}

style.css
ody{
    text-align:center;
    font-family:Arial;
    background-color:lightgreen;
    background-size:cover;
    color:green;
    padding:fixed;
}
.gallery{
    background:whitesmoke;
    width:300px;
    margin:auto;
    padding:20px;
    border-radius:20px;
}
img{
    border-radius:20px;
    width:100%;
}
button{
    padding:8px 15px;
    margin:10px;
    background:linear-gradient(lightgreen,green,lightgreen);
    color:white;
    border:none;
    cursor:pointer;
    border-radius:5px;
}
footer{
    text-align:center;
    padding: 10px;
    background:linear-gradient(45deg,green,lightgreen,green);
    color:black;
    position:fixed;
    bottom:0;
    width:100%;
}

```
## OUTPUT:
![alt text](<Screenshot 2026-03-16 173942-1.png>)
![alt text](<Screenshot 2026-03-16 173957.png>)
![alt text](<Screenshot 2026-03-16 174025.png>)
![alt text](<Screenshot 2026-03-16 174042.png>)
![alt text](<Screenshot 2026-03-16 174111.png>)
![alt text](<Screenshot 2026-03-16 174126.png>)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
