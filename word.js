console.log('helloworld')
window.onload= function() {
    const tds = document.querySelectorAll("td")
    tds.forEach(el => {
        if(el.textContent == ''){
            el.textContent = 'X'
            }else{
                el.className = 'word'
            }
        });
    }