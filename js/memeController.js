
'use strict'
var gCanvas;
var gCtx;


function onInit(){
   
    renderGallery();
     gCanvas = document.getElementById('my-canvas')
    gCtx = gCanvas.getContext('2d');
}
function renderGallery(){
    var gallery = getGalleryForDisplay()
    var strHtmls = gallery.map(function (img) {
        // console.log(img);
        return `
        <img  onclick="onGetMeme(${img.id})" class="card-img" src="${img.url}">
        `
    })
    document.querySelector('.gallery-continer').innerHTML = strHtmls.join('')
}

function onGetMeme(imgId){
    document.querySelector('.gallery-continer').style.display='none';
    document.querySelector('.main-nav').style.display='none'
    document.querySelector('.meme-editor').style.display='flex';
    // document.querySelector('.meme-editor').style.display='block';
    setSelectImg(imgId);
        var img= drawImg(imgId)
    console.log(img); 
    renderCanvas()
  

}
 function onShowGallery(){
        document.querySelector('.meme-editor').style.display='none';
      document.querySelector('.main-nav').style.display='flex'
 
     document.querySelector('.gallery-continer').style.display='block';
    // onInit();

}
function renderCanvas(){
    // gCanvas = document.getElementById('my-canvas')
    // gCtx = gCanvas.getContext('2d')
    var currImg=getSelectImg();
    console.log(gCtx);
    var img = new Image();

    img.src =` ${currImg}`; 
        console.log(img)
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
         drawText();
        //  drawRect(150,70)
    }
   
}
function onCanvasClicked(ev) {
    var { offsetX, offsetY } = ev;
    // console.log(offsetX, offsetY)
    var gMeme=getMemeForDisplay()

    var clicked = gMeme.find(line => {
        return offsetX >= line.x && offsetX <= line.x + gCanvas.width
            && offsetY >= line.y && offsetY < gCanvas.height
    })
    // console.log(clickedStar)

    // open the modal on the clicked coordinates if found a click on a star,
    // close the modal otherwise
    if (clicked) drawRect(clickedStar.name, clickedStar.rate, ev.clientX, ev.clientY)
    else closeModal()

}
function onRenderTxt(txt){
    console.log(txt);
    //  const offsetX = ev.offsetX;
    //  const offsetY = ev.offsetY;
    // var text = document.querySelector('input[name="txtLine"]')
   // drawText(txt)
     addText(txt)
      renderCanvas()
}
function onRenderSearchPic(keySearch){
    var gallery = getGalleryForDisplay()
    var strHtml = gallery.map(function (img) {
        var currImg=img;
        //  console.log(gCurrImg);
       var imgs=img.keywords.reduce(function(acc,word){
           if(word.includes(keySearch)) acc.push(currImg) 
               return acc;
       },[])
       return imgs; 
    })
    var strHtmls= strHtml.map( function(img){
        console.log(img)
        if(img.length>0)return`<img  onclick="onGetMeme(${img[0].id})" class="card-img" src="${img[0].url}">`
    })
       document.querySelector('.gallery-continer').innerHTML = strHtmls.join('')
     console.log(strHtmls);
}
function onAddLine(){
    document.querySelector('input[name="txtLine"]').value='';
    addLine();
}
function onChangeTextSize(diff){
    console.log('diff',diff);
    changeTextSize(+diff);
    renderCanvas()
    
}
function onToggleMenu(){
   
        var flag = document.body.classList.toggle('open-menu');
        if (flag) document.querySelector('.menu-btn').innerText = '✖️'
        else document.querySelector('.menu-btn').innerText = '☰' 
}
function OnOpenInputColor(){
    // document.querySelector('.[name=color]').style.hidden=false;
    // const fillStyle = document.querySelector('[name=color]').value;
    // console.log();
    // setFillStyle(fillStyle);
}
function drawText() {
    const meme = getMemeForDisplay();
    console.log(meme);
    meme.lines.forEach(function(line) {
        gCtx.font = `${line.size}px ${line.fontFamily}`;
         gCtx.lineWidth = 1.5;
        gCtx.textAlign = line.align;
        gCtx.strokeStyle = line.strokeStyle
        gCtx.fillStyle = line.color
        // gCtx.fillText(line.txt,(gCelectLine+1)*100,(gCelectLine+1)*100)
        // gCtx.strokeText(line.txt,(gCelectLine+1)*100,(gCelectLine+1)*100)
        gCtx.fillText(line.txt,line.x,line.y)
        gCtx.strokeText(line.txt,line.x,line.y)
         
    });
  
}
function onSetTextDirection(dir){
    setTextalign(dir);
    renderCanvas();
}

function resizeCanvas() {
    var elContainer = document.querySelector('.my-canvas');
    // Note: changing the canvas dimension this way clears the canvas
    console.log(elContainer.offsetWidth)
    gCanvas.width = elContainer.offsetWidth
    gCanvas.height = elContainer.offsetHeight
}
function onMoveLine(){
    moveLines();
    renderCanvas();
}
function onDeleteLine(){
    deleteLine()
     renderCanvas();
}
function onSetFillColor(){
    var fillStyle=document.querySelector('input[name=colorFill]').value;
    changeFillColor(fillStyle);
    renderCanvas();
}
function onSetStokeColor(){
    var stokeStyle=document.querySelector('input[name=colorStroke]').value;
    changeStokeStyle(stokeStyle)
    renderCanvas();

}