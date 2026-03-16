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