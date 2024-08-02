"use strict"
let img= Array.from(document.querySelectorAll(".img"));
let playicon=Array.from(document.querySelectorAll(".start"));
let song= new Audio('song/Born-For-This.mp3')
let playbutton=document.querySelector("#playbutton");
let image=document.querySelector("#desImg");
let songname=document.querySelector("#song-name-descripton");
let range=document.querySelector("input");
let i=0;
let prev=document.querySelector(".step-backward");
let forward=document.querySelector(".step-forward");
let sideButton=Array.from(document.querySelectorAll(".fa-chevron-right"));
let desBlock=document.querySelector(".songDescrip");
let listBlock=document.querySelector(".songList");
let list=[
    {   sn:"Born-For-This",
        so:"song/Born-For-This.mp3",
        sc:"song cover/Born-For-This.jpg"
    },
    {    sn:"Nachan Nu Jee Karda",
        so:"song/new_320_02 - Nachan Nu Jee Karda - Angrezi Medium (2020).mp3",
        sc:"song cover/angrezi-medium-2020-250.jpg"
    },
    {   sn:"Nachunga Aise - Millind Gaba",
        so:"song/new_320_Nachunga Aise - Millind Gaba.mp3",
        sc:"song cover/download.jpg"
    },
    {    sn:"Shiv Sama Rahe - Hansraj Raghuwanshi",
        so:"song/new_320_Shiv Sama Rahe - Hansraj Raghuwanshi.mp3",
        sc:"song cover/shiv-sama-rahe-hansraj-raghuwanshi-250.jpg"
    },
    {   sn:"Dhoom-Dhoom Machale",
        so:"song/old_Dhoom-Dhoom Machale.mp3",
        sc:"song cover/Dhoom_series.jpg"
    }
]
range.value=0;
playicon.forEach((e,index)=>{
    e.addEventListener('click', ()=>{
      
        if(e.classList[1] =='fa-circle-play'){
            end();
            // buttonDisplay();
        song.src=`${list[index].so}`;
        song.play();
        e.classList.replace('fa-circle-play','fa-circle-pause');
        console.log(e.classList[1]);
         image.src=list[index].sc;
         playbutton.classList.replace('fa-circle-play','fa-circle-pause');
         songname.innerHTML=list[index].sn;
         i=index
         image.style.animationIterationCount ="infinite";
         if(window.matchMedia("(max-width:450px)").matches){
            side();
            sideButton[index].style.visibility="visible";
            sideButton[index].addEventListener('click' , ()=>{
                listBlock.style.display='none';
                   desBlock.style.display='flex';
            })
         }
         
        }
        else{ 
            
          song.pause();
        e.classList.replace('fa-circle-pause','fa-circle-play');
        playbutton.classList.replace('fa-circle-pause','fa-circle-play');
        console.log(e.classList[1]);
        image.style.animationIterationCount="0";
        }
    })
})
function end(){
    playicon.forEach((e)=>{
        song.pause();
        e.classList.replace('fa-circle-pause','fa-circle-play');
    })
}
playbutton.addEventListener('click',()=>{
  if(playbutton.classList[1] =='fa-circle-play'){
            end();
        song.play();         
         playbutton.classList.replace('fa-circle-play','fa-circle-pause');        
        playicon[i].classList.replace('fa-circle-play','fa-circle-pause');
        image.style.animationIterationCount ="infinite";
        }
        else{ 
            end();
          song.pause();
        playbutton.classList.replace('fa-circle-pause','fa-circle-play');
        playicon[i].classList.replace('fa-circle-pause','fa-circle-play');
        image.style.animationIterationCount="0";
        }
       
    })
  

prev.addEventListener('click',()=>{
    if(i>0){
        end();
        song.src=`${list[i-1].so}`;
        song.play();
        playbutton.classList.replace('fa-circle-play','fa-circle-pause');        
        playicon[i-1].classList.replace('fa-circle-play','fa-circle-pause');
        i--;
        image.src=list[i].sc;
        songname.innerHTML=list[i].sn;
        image.style.animationIterationCount ="infinite";
    }
    else{
        end();
        song.src=`${list[i].so}`; 
        song.play();
        playbutton.classList.replace('fa-circle-play','fa-circle-pause');        
        playicon[i].classList.replace('fa-circle-play','fa-circle-pause');
        image.style.animationIterationCount ="infinite";
        image.src=list[i].sc;
        songname.innerHTML=list[i].sn;
    }
})
forward.addEventListener('click',()=>{
   
    if(i<list.length-1){
        end();
        song.src=`${list[i+1].so}`;
        song.play();
        playbutton.classList.replace('fa-circle-play','fa-circle-pause');        
        playicon[i+1].classList.replace('fa-circle-play','fa-circle-pause');
        i++;
        image.src=list[i].sc;
        songname.innerHTML=list[i].sn;
        image.style.animationIterationCount ="infinite";
    }
    else{end();
        song.src=`${list[i].so}`; 
        song.play();
        playbutton.classList.replace('fa-circle-play','fa-circle-pause');        
        playicon[i].classList.replace('fa-circle-play','fa-circle-pause');
        image.style.animationIterationCount ="infinite";
        image.src=list[i].sc;
        songname.innerHTML=list[i].sn;
    }
})
song.addEventListener('timeupdate',()=>{
    
    range.value=parseInt((song.currentTime/song.duration)*100);
    console.log(range.value);
})   
range.addEventListener('change',()=>{
    song.currentTime=parseInt(range.value*song.duration/100);
})
function side(){
    sideButton.forEach((e)=>{
        e.style.visibility='hidden';
    })
}
function change(){
    listBlock.style.display='flex';
                   desBlock.style.display='none';
}