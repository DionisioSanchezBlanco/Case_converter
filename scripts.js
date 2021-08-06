const upper = document.getElementById("upper-case");
const lower = document.getElementById("lower-case");
const proper = document.getElementById("proper-case");
const sentence = document.getElementById("sentence-case");
const downloadFile = document.getElementById("save-text-file");
const boxText = document.querySelector("textarea");

upper.addEventListener("click", function (){
    boxText.value = boxText.value.toUpperCase();
});

lower.addEventListener("click", function (){
    boxText.value = boxText.value.toLowerCase();
});

proper.addEventListener("click", function (){
    let properText = boxText.value.split(' ');
    for (let i in properText){
        properText[i] = properText[i].slice(0,1).toUpperCase() + properText[i].slice(1);
    }
    boxText.value = properText.join(' ');
});

sentence.addEventListener("click", function (){
    let sentenceText = boxText.value.toLowerCase().split('. ');
    console.log(sentenceText);
    for (i in sentenceText){
        sentenceText[i] = sentenceText[i].slice(0,1).toUpperCase() + sentenceText[i].slice(1);
    }
    boxText.value = sentenceText.join('. ')
})

downloadFile.addEventListener("click", function (){
    download("text.txt",boxText.value);
})

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
