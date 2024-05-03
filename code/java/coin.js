flip.onclick = function(){
    this.className = 'change';
    let coinSide = Math.floor(Math.random() * 2); 
    this.innerText = 'The result is: ' + (coinSide==0?'head':'tail');
    let resultImage = coinSide==0?'head.jpg':'tail.jpg';
    document.querySelector('img[src="../img/questionMark.jpg"]').src = '../img/' + resultImage;
}

