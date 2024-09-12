document.addEventListener("DOMContentLoaded", ()=>{
    let yes_btn = document.getElementById("yes");
    let no_btn = document.getElementById("no");
    let gif = document.getElementsByClassName("gif")[0];
    let question = document.getElementById("question");
    

    let i = 0;
    no_btn.addEventListener('mouseover', (event)=>{
        console.log("on it");
        no_btn.style.position = "absolute";
        const middle = document.querySelector(".middle");
        const middleRect = middle.getBoundingClientRect();
        const noBtnRect = no_btn.getBoundingClientRect();
      
        // Calculate max positions to ensure the button stays within the wrapper
        const maxX = middleRect.width - noBtnRect.width;
        const maxY = middleRect.height - noBtnRect.height;
      
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        if(i % 2 ==0){
            no_btn.style.left = `${randomX}px`;
            no_btn.style.right = "";
            no_btn.style.top = `${randomY}px`;
        }else{
            no_btn.style.right = `${randomX}px`;
            no_btn.style.left = "";
            no_btn.style.top = `${randomY}px`;
        }
        i++;


    });


    
    yes_btn.addEventListener("click", (event)=>{
        const numberOfStars = 30; // Number of stars
        for (let i = 0; i < numberOfStars; i++) {
            createFallingStar(i * 100); // Stagger the start times
        }
        question.textContent = "i love u too";
        gif.src = "gif.webp";
        gif.classList.remove("gif");
        gif.style.width = "100%";
        gif.style.maxWidth = "300px";
        document.body.style.backgroundColor = "#faba0912";
        no_btn.style.display= "none";
    });


    function createFallingStar(delay) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random horizontal position and size
        const x = Math.random() * window.innerWidth;
        const size = Math.random() * 40 + 20; // Size between 20px and 60px
        star.style.left = `${x}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.animationDelay = `${delay}ms`; // Stagger the animation start
    
        document.body.appendChild(star);
    
        // Remove the star after animation is finished
        setTimeout(() => {
            star.remove();
        }, 3000 + delay);  // Animation duration plus maximum delay
    }
    
});