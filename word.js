words = ['hello', 'bye', 'java']
console.log('helloworld')
window.onload= function() {
    const tds = document.querySelectorAll("td")
    words.forEach(word =>{
        placeWord(word);
    });
    tds.forEach(el => {
        if(el.textContent == ''){
            el.textContent = 'X'
            }else{
                el.className = 'word'
            }
        });

    }

    function placeWord(theWord){
        //todo stub
        console.log("placing: " + theWord)
    }
