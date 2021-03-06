function imgSlider(anything) {
    document.querySelector('.nail-pic').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color; 
}
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation')

let toggleMenu = () => {
    
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
    
}

    menuToggle.addEventListener('click', toggleMenu);


    //? LIGHT-BOX
    const gallery = document.querySelectorAll(".container-fluid .col-sm-3");
    let previewBox = document.querySelector(".preview-box");
    let previewImg = previewBox.querySelector("img");
    let closeIcon = document.querySelector(".icon");
    let currentImg = previewBox.querySelector(".current-img");
    let totalImg = previewBox.querySelector(".total-img");
    let shadowBox = document.querySelector(".shadow");

    window.onload = () => {
        for(let i = 0; i < gallery.length; i++){
            totalImg.textContent = gallery.length;
            let j = i;
            let clickImgIndex;
            gallery[i].onclick = () => {
                currentImg.textContent = j + 1;
                clickImgIndex = j;
                console.log(i);
                
                function preview() {
                    let selectedImgUrl = gallery[j].querySelector("img").src;
                    previewImg.src = selectedImgUrl;
                    console.log(selectedImgUrl);
                }
                const prevBtn = document.querySelector(".prev");
                const nextBtn = document.querySelector(".next");
                if(j == 0) {
                    prevBtn.style.display = "none";
                }
                if(j >= gallery.length -1) {
                    nextBtn.style.display = "none";
                }

                prevBtn.onclick = () => {
                    j--;
                    if(j == 0) {
                        preview();
                        prevBtn.style.display = "none";
                        currentImg.textContent =1 ;
                    }else{
                        preview();
                        nextBtn.style.display = "block";
                        currentImg.textContent --;
                    }
                    
                }
                nextBtn.onclick = () => {
                    j++;
                    if(j >= gallery.length -1) {
                        preview();
                        nextBtn.style.display = "none";
                        currentImg.textContent = gallery.length;
                    }else{
                        preview();
                        prevBtn.style.display = "block";
                        currentImg.textContent ++;
                    }
                }

                preview();
                previewBox.classList.add("show");
                shadowBox.style.display = "block";
                closeIcon.onclick = () => {
                    j = clickImgIndex;
                    prevBtn.style.display = "block";
                    nextBtn.style.display = "block";
                    previewBox.classList.remove("show");
                    shadowBox.style.display = "none";
                }
            }
        }
    }
//* modal whatsup popover
  



