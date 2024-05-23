/** Scroll **/
const ScrollPart = () => {
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smmoth' });
        }
    };
};

const TypeCharacterPart = () => {
    const text = "Welcome! I'm Inho Choi";
    let yPos = 0;
    const nameContainer = document.getElementById("name");
    let index = 0;
    let lentext = 0;
    let typingSpeed = 50;
    function typeNextCharacter() {
        if (index < text.length) {
            const charSpan = document.createElement('span');
            charSpan.textContent = text.charAt(index);
            charSpan.classList.add(`char${index + 1}`);
            nameContainer.appendChild(charSpan);
        if (lentext == 7 || lentext == 11) {
            const lineBreak = document.createElement('br');
            nameContainer.appendChild(lineBreak);
            typingSpeed = 200;
        }
        if (lentext >= 13) {
            charSpan.style.color = 'white';
        } else {
            charSpan.style.color = 'wheat';
        }
            index++;
            lentext++;
            setTimeout(typeNextCharacter, typingSpeed); 
        } else {
            setTimeout(showButtons, 500); 
        }

    };


    function showButtons() {
        const buttons = document.querySelectorAll('.btn.hidden');
        let delay = 0;
    
        buttons.forEach(button => {
            setTimeout(() => {
                button.classList.remove('hidden');
                button.classList.add('fade-in');  
            }, delay);
    
            delay += 400;  
        });
        setTimeout(() => {
            moveDivLeft();
        }, delay += 500);
        setTimeout(() => {
            drawLine();
        }, delay += 500);    

        setTimeout(() => {
            showImage_2();
        }, delay += 400);    
     
      
    }

    function drawLine() {
        const canvas = document.getElementById('canvas');
        canvas.classList.remove('hidden');
        // canvas.classList.toggle('move-left');
        const context = canvas.getContext('2d');
        context.arc(150, yPos, 5, 0, Math.PI * 2, false);
        context.fill();
        context.fillStyle = "wheat";
        // Unhide the canvas
        yPos += 1;
        // requestAnimationFrame(drawLine);
        setInterval(drawLine, 30);
        
    }


    function moveDivLeft() {
        const divToMove = document.getElementById('myDiv');
        const divToMove2 = document.getElementById('line_child');
        // const divToMove3 = document.getElementById('testdiv');
        divToMove.classList.toggle('move-left');
        // divToMove2.classList.toggle('move-left_line');
        // divToMove3.classList.toggle("move_left");
        // if (isMoveLeftLine) {
        //     divToMove2.classList.remove('hidden');
        // } else {
        //     divToMove2.classList.add('hidden');
        // }
  
    }

    function showUL() {
        const ul = document.querySelectorAll('.h1.hidden');
        ul.classList.remove('hidden');
        let delay = 0;
    };


    function showImage_2() {
        const img = document.querySelectorAll('.imageDiv.hidden');
        let delay = 0;
    
        img.forEach(img => {
            setTimeout(() => {
                img.classList.remove('hidden');
                img.classList.add('fade-in');  
            }, delay);
    
            delay += 400;  
        });

      
    }
      

    window.addEventListener('load',  () => {
        typeNextCharacter();
        ButtonShow();
    

    })
};
/** Navigation Menu Toggle **/
// const NavigationToggle = () => {
//     document.getElementById('hamburger').addEventListener('click', function() {
//         var navbarMenu = document.getElementById('navbarMenu');
//         navbarMenu.classList.toggle('active');
//     });
// };

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
 document.addEventListener("DOMContentLoaded", (event) => {
    // We wrap each question in a try-catch so that way even if
    // your code for one question errors, the other ones
    // will work.
    try {
        ScrollPart();
    } catch (e) {
      console.error(e);
    }
  
    try {
        TypeCharacterPart();
    } catch (e) {
      console.error(e);
    }

    // Add event listener for hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navbarMenu = document.getElementById('navbarMenu');
    hamburger.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
  });
  