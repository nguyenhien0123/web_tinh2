// video
const video=document.querySelector("#video"); //sự kiện khi video kết thúc.
video.style.border="5px";
video.addEventListener("ended", ()=>{
    video.currentTime=0; //dat lai thoi gian
    video.play();
});
video.addEventListener("loadeddata", ()=>{ //load lai trang
    video.play();
    console.log("loadeddata event fired");
})
