const fullImgBox = document.getElementById('fullImgBox');
const fullImg= document.getElementById('fullImg');

const imgClick =(name) =>{
    fullImgBox.style.display= 'flex';
    fullImg.src= name;
}

const closeBtn=() =>{
    fullImgBox.style.display= 'none';
}