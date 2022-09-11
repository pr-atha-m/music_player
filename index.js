
let songIndex = 0;
var song = new Audio('songs/0.mp3')
let masterSongName =  document.getElementById("masterSongName");

console.log(masterSongName.innerText);
let myProgressBar = document.getElementById("AudioBar");
let songItem = $(".songItem");


let songs = [
    {songName: "Glass Animals Heat Waves", filePath: "songs/Heat Waves.mp3", coverPath: "songCoverImg/Heat_waves.jpg"},
    {songName: "Warriyo - Mortals", filePath: "songs/1.mp3", coverPath: "songCoverImg/1.jpg"},
    {songName: "Peaches - Justin Bieber", filePath: "songs/2.mp3", coverPath: "songCoverImg/2.jpg"},
    {songName: "Hymn For The Weekend", filePath: "songs/3.mp3", coverPath: "songCoverImg/3.jpg"},
    {songName: "Who Says - Selena", filePath: "songs/4.mp3", coverPath: "songCoverImg/4.jpg"},
    {songName: "Heroes - Tonight", filePath: "songs/5.mp3", coverPath: "songCoverImg/5.jpg"},
    {songName: "Stay - Justin Bieber", filePath: "songs/6.mp3", coverPath: "songCoverImg/6.jpg"},
    {songName: "Sakhiyaan", filePath: "songs/7.mp3", coverPath: "songCoverImg/7.jpg"},
    {songName: "Chosen feat. Ty", filePath: "songs/8.mp3", coverPath: "songCoverImg/8.jpg"},
  
]



for(var i=0;i<songs.length;i++){
songItem[i].getElementsByTagName("img")[0].src = songs[i].coverPath;
songItem[i].getElementsByTagName("span")[0].innerText = songs[i].songName;


}


$('#mainPlay').click(function(){

    
    if(song.paused || song.currentTime<=0){
    song.play();
    $('#mainPlay').removeClass("fa-play");
    $('#mainPlay').addClass("fa-pause");
    $('.playGif').css('opacity',1);

}
else{
    song.pause();
    $('#mainPlay').removeClass("fa-pause");
    $('#mainPlay').addClass("fa-play");
    $('.playGif').css('opacity',0);
}

})

song.addEventListener('timeupdate',()=>{

    // update Progress Bar
    progress = parseInt((song.currentTime/song.duration)*100);
   
    myProgressBar.value = progress;
    

})


$("#AudioBar").on("change",(function(){
 song.currentTime = (myProgressBar.value)*song.duration/100;
}));

function makeAllPlays(){
    $(".songItemPlay").removeClass('fa-pause')
    $(".songItemPlay").addClass('fa-play');
} 

$(".songItemPlay").click(function(event){
    makeAllPlays();
    if(song.paused || song.currentTime<=0){
    
    songIndex = parseInt(event.target.id);
    event.target.classList.remove('fa-play');
    event.target.classList.add('fa-pause');
    console.log(event.target.id);
    song.src = "songs/" + songIndex + ".mp3";
    song.currentTime = 0;
    song.play();
    $('.playGif').css('opacity',1);
    masterSongName.innerText = songs[songIndex].songName;
    // console.log($('.songInfo').innerText);// = songs[index].songName;
    $('#mainPlay').removeClass("fa-play");
    $('#mainPlay').addClass("fa-pause");
    }
    else{

        song.pause();
        event.target.classList.remove('fa-pause');
        event.target.classList.add('fa-play');
        $('.playGif').css('opacity',0);
        $('#mainPlay').removeClass("fa-pause");
    $('#mainPlay').addClass("fa-play");
        
    }



})


$('#prev').click(function(){
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
       songIndex-=1;
    }

    song.src = "songs/" + songIndex + ".mp3";
    song.currentTime = 0;
    song.play();
    $('.playGif').css('opacity',1);
    $('#mainPlay').removeClass("fa-play");
    $('#mainPlay').addClass("fa-pause");
    masterSongName.innerText = songs[songIndex].songName;
    
})

$("#next").click(function(){

    if(songIndex >= 8){
        songIndex = 0;
    }
else{
    songIndex+=1;
} 
    song.src = "songs/" + songIndex + ".mp3";
    song.currentTime = 0;
    song.play();
    $('.playGif').css('opacity',1);
    $('#mainPlay').removeClass("fa-play");
    $('#mainPlay').addClass("fa-pause");
    console.log(songs[songIndex].songName);
    masterSongName.innerText = songs[songIndex].songName;
    
})