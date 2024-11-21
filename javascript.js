const images=[
    'https://picsum.photos/id/231/200/300',
    'https://picsum.photos/id/232/200/300',
    'https://picsum.photos/id/233/200/300',
    'https://picsum.photos/id/234/200/300',
    'https://picsum.photos/id/235/200/300',
    'https://picsum.photos/id/236/200/300',
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/id/238/200/300',
    'https://picsum.photos/id/238/200/300'

]
let currentIndex=0;


function updateSlider(){
    const container=document.querySelector('.container')
    container.innerHTML='';
    for(let i=0;i<3;i++){
        if(currentIndex  <images.length){
            const img=document.createElement('img')
      img.src=images[currentIndex +i];
      img.style.margin='20px'
      container.appendChild(img);
        }
        }
   
}

let prev=()=>{
    if (currentIndex > 0) {
        currentIndex -= 3;
        updateSlider();
    }
   
   



}
let next=()=>{

    if (currentIndex + 3 < images.length) {
        currentIndex += 3;
        updateSlider();
    }
    
}
updateSlider();
