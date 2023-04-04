var changemotto = ["매일매일 성장하는", "요리를 좋아하는", "자기개발하는", "사진 찍는 것을 좋아하는", "배움을 즐기는", "하고 싶은게 많은"];
var c = -1;
function timeCount(){
    document.getElementById("changemotto").innerHTML = changemotto[(c=++c%6)];
    setTimeout("timeCount();",500);
}
window.onload = function() {
    timeCount();
}   