document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.content-item');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let currentItem = 0;
    const totalItems = items.length;

    // Function to switch to a specific content item
    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            item.style.display = 'none';
            if (i === index) {
                item.classList.add('active');
                item.style.display = 'block';
            }
        });
    }

    // Show the initial item
    showItem(currentItem);

    // Show the next item
    nextBtn.addEventListener('click', () => {
        currentItem = (currentItem + 1) % totalItems;
        showItem(currentItem);
    });

    // Show the previous item
    prevBtn.addEventListener('click', () => {
        currentItem = (currentItem - 1 + totalItems) % totalItems;
        showItem(currentItem);
    });
});



 
    var textWrapper = document.querySelector('.letters');
    
    if (textWrapper) {
        // Nahradí každý znak za nový span
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        // Aplikace anime.js animace
        anime.timeline({loop: true})
          .add({
            targets: '.letter',  // Selektor pro jednotlivá písmena
            rotateY: [-90, 0],   // Rotace z -90 stupňů na 0
            duration: 1300,
            delay: (el, i) => 45 * i  // Zpoždění pro každé písmeno
          })
          .add({
            targets: '.letters',   // Selektor pro celý text .letters
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
          });
    }





