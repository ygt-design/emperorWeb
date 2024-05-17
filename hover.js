let characters = "ABCÇDEFGĞHIİJKLMNOÖPQRSŞTUÜVWXYZabcçdefgğhıijklmnoöpqrsştuüvwxyz0123456789.,!?#/\-–—_(){}[]'@†‡$€"
characters = characters.split("");

let display;

// console.log(characters);

window.onload = function(){
    let alphabet = document.querySelector(".alphabet");
    display = document.querySelector(".display");

    characters.forEach(element => {
        // console.log(element);
        let newDiv = document.createElement("div");

        newDiv.innerHTML = element;
        newDiv.classList.add("singleCharacters");
        newDiv.addEventListener("mouseenter",function(){
            // console.log(this);
            let content = this.textContent;
            // console.log(content);
            display.innerHTML = content;
        });

        alphabet.appendChild(newDiv);
    });
}

window.onscroll = function(){
    let scroll = document.body.scrollTop;
    // let displayTop = window.pageYOffset + display.getBoundingClientRect().top;
    console.log(scroll);
}
