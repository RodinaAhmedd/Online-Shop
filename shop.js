let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
    
    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }
        else{
            document.querySelector('#scroll-top').classList.remove('active');
        }
    }

    function loader(){
        document.querySelector('.loader-container').classList.add('fade-out');
    }

    function fadeOut(){
        setInterval(loader,3000)
    }
    window.onload = fadeOut();

document.getElementById("year").textContent = new Date().getFullYear();

  let scrollTopBtn = document.getElementById("scroll-top");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};