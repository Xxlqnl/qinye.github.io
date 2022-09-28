var index=0;
function fun() {
    var count=index%3;
    var img=document.getElementById("img");
    img.src="img/scenery"+count+".jpg";
    index++;
}
setInterval(fun,3000);