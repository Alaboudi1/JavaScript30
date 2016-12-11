const keys = [
    "65",
    "83",
    "68",
    "70",
    "71",
    "72",
    "74",
    "75",
    "76"
    ];
   let score = 0 ;
 function sound(e){
      console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const button = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) return;
    if(button.classList.contains('click')){
        document.getElementById('score').innerHTML= ++score;
    }
    button.classList.add('playing');
    audio.currentTime=0;
    audio.play();

    
 }

 function effect(button){
 button.addEventListener('transitionend', e => 
    {
    if(e.propertyName==="transform")
        button.classList.remove('playing');
        button.classList.remove('click');

    }
    )}
 
 function randomKey(preKey=65){
     const random = Math.floor((Math.random())*9);
     const key = keys.filter((_,index) => random == index);
    document.querySelector(`div[data-key="${key}"]`).classList.add('click');

     setTimeout(_=>randomKey(key),1000);
 }
window.addEventListener('keydown', sound);
document.querySelectorAll('.key').forEach(effect);

setTimeout(randomKey,1000);