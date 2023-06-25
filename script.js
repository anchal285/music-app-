console.log("welcome to spotify");

let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay1 = document.getElementById('masterPlay');
let progressbar = document.getElementById('progress');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let songs = [{songName: "song1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
{songName: "song2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
{songName: "song3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
{songName: "song4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
{songName: "song5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
{songName: "song6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
{songName: "song7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
{songName: "song8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
{songName: "song9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
{songName: "song10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},

]
songitems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText= songs[i].songName;

} )


masterPlay1.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay1.classList.remove('fa-play-circle');
        masterPlay1.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay1.classList.remove('fa-pause-circle');
        masterPlay1.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
  progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
  progressbar.value = progress;

})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle'); 
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
     makeAllPlays();
     
     songIndex = parseInt(e.target.id);
     e.target.classList.remove('fa-play-circle');
     e.target.classList.add('fa-pause-circle');
     audioElement.src = `songs/${songIndex+1}.mp3`;
     mastersongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     gif.style.opacity=1;
     masterPlay1.classList.remove('fa-play-circle');
        masterPlay1.classList.add('fa-pause-circle');
     
     })
 
 } )
 document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9) {
    songIndex =0;
    }
    else{
    songIndex = songIndex+1;
    }
    const songItem = document.getElementsByClassName('songitemplay')[songIndex];
    songItem.click();
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     
     masterPlay1.classList.remove('fa-play-circle');
     masterPlay1.classList.add('fa-pause-circle');
        

 })
 document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0) {
    songIndex =0;
    }
    else{
    songIndex = songIndex-1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay1.classList.remove('fa-play-circle');
        masterPlay1.classList.add('fa-pause-circle');
        
 })