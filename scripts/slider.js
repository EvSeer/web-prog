let offset=0;
const sliderLine = document.querySelector('.main-proposal__container')

document.querySelector('.main--proposal__arrow--left').addEventListener('click',function(){
 offset+=getStep();
 if(offset>0){offset=-100}
 sliderLine.style.left= offset +'%';
 console.log(window.screen.width);
});

document.querySelector('.main--proposal__arrow--right').addEventListener('click',function(){
  offset-=getStep();
 if(offset<-100){offset=0}
  sliderLine.style.left= offset +'%';
 });

 function getStep(){
   if(window.screen.width>1200){
     return 100;
   }
   if(window.screen.width<1200 && window.screen.width>800){
    return 100;
  }
  if(window.screen.width<800){
    return 100;
  }
 }
