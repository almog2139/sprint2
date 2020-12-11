'use strict'
var gCelectLine = 0;
var gKeywords = { 
    'happy': 0,
 'funny': 0,
 'men':0,
 'famous':0,
 'animal':0,
 'baby':0,
 'love':0,
 'smile':0,


 }
var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'men', 'famous'] },
    { id: 2, url: 'img/2.jpg', keywords: ['animal', 'love'] },
    { id: 3, url: 'img/3.jpg', keywords: ['animal', 'love', 'baby'] },
    { id: 4, url: 'img/4.jpg', keywords: ['amimal'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'baby'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'men', 'smile'] },
    { id: 7, url: 'img/7.jpg', keywords: ['happy', 'funny'] },
    { id: 8, url: 'img/8.jpg', keywords: ['happy', 'men'] },
    { id: 9, url: 'img/9.jpg', keywords: ['happy', 'funny', 'baby', 'smile', 'famous'] },
    { id: 10, url: 'img/10.jpg', keywords: ['happy', 'men', 'smile'] },
    { id: 11, url: 'img/11.jpg', keywords: ['funny', 'men', 'love'] },
    { id: 12, url: 'img/12.jpg', keywords: ['men', 'famous'] },
    { id: 13, url: 'img/13.jpg', keywords: ['famous', 'men'] },
    { id: 14, url: 'img/14.jpg', keywords: ['men'] },
    { id: 15, url: 'img/15.jpg', keywords: ['famous', 'men', 'happy'] },
    { id: 16, url: 'img/16.jpg', keywords: ['happy', 'funny', 'men'] },
    { id: 17, url: 'img/17.jpg', keywords: ['famous', 'men'] },
    { id: 18, url: 'img/18.jpg', keywords: ['smile'] }
];
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{ txt: '', size: 40, align: 'left', color: 'white', strokeStyle: 'black', fontFamily: 'Ariel', x: 100, y: 100 },
    { txt: '', size: 40, align: 'left', color: 'white', strokeStyle: 'black', fontFamily: 'Ariel', x: 100, y: 400 },
    { txt: '', size: 40, align: 'left', color: 'white', strokeStyle: 'black', fontFamily: 'Ariel', x: 100, y: 250 }
    ]
}
function getGalleryForDisplay() {
    return gImgs;
}

function drawImg(imgId) {
    var img = gImgs.find(currImg => {
        return imgId === currImg.id
    })
    gMeme.selectedImgId = img.id;
    gMeme.selectedLineIdx = 0;


    return img;

}
function addLine() {
    gCelectLine++;
    console.log(gCelectLine);
    if (gCelectLine === 4) return
    gMeme.selectedLineIdx = gCelectLine;
    // drawRect(gMeme.lines[gMeme.selectedLineIdx].x,gMeme.lines[gMeme.selectedLineIdx].x)

}
// function drawRect(x, y) {
//     gCtx.beginPath()
//     gCtx.strokeStyle = 'black'
//     gCtx.rect(x - 100, y - 100, gtxtWidth + 50, gFontSize + 50) // x,y,widht,height
//     gCtx.stroke()
// }
function addText(text) {

    //   gCelectLine++;
    //  gMeme.selectedLineIdx=gCelectLine;
    gMeme.lines[gMeme.selectedLineIdx].txt = text
    //  gMeme.lines.push({txt:text , size: 20,align: 'center',color: 'red' })
    //  drawText()
}
function changeTextSize(diff) {
    console.log(gMeme.selectedLineIdx);
    gMeme.lines[gMeme.selectedLineIdx].size += diff;
    // gCtx.lineWidth=  gMeme.lines[gCelectLine].size+=diff
    // // gCtx.beginPath();
    // gMeme.lines[gCelectLine].txt+=''
    //  drawText((gCelectLine+1)*100,(gCelectLine+1)*100)


}
function setFillStyle(fillStyle) {
    gMeme.lines[selectedLineIdx].color = fillStyle;
}
function setSelectImg(imgId) {
    gMeme.selectedImgId = imgId;
}
function getSelectImg() {
    return gImgs[gMeme.selectedImgId - 1].url;
}
function getMemeForDisplay() {
    return gMeme;
}
function setTextalign(dir) {
    console.log(gMeme.lines[gMeme.selectedLineIdx].align)
    gMeme.lines[gMeme.selectedLineIdx].align = `${dir}`;

}
function moveLines() {
    gCelectLine++;
    if (gCelectLine === gMeme.lines.length) gCelectLine = 0;
    gMeme.selectedLineIdx = gCelectLine;
    document.querySelector('input[name="txtLine"]').value = gMeme.lines[gMeme.selectedLineIdx].txt;

}
function deleteLine() {
    gCelectLine = gCelectLine - 1;
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
    document.querySelector('input[name="txtLine"]').value = ''

}
function changeFillColor(fillStyle) {
    console.log(fillStyle);
    gMeme.lines[gMeme.selectedLineIdx].color = fillStyle;
}
function changeStokeStyle(strokeColor) {
    console.log(strokeColor);
    gMeme.lines[gMeme.selectedLineIdx].strokeStyle = strokeColor;
}