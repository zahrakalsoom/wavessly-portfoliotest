const togglebtn = document.querySelector('.toggle-btn');
const dropdownmenu = document.querySelector('.dropdown-menu open');
const togglebtnicon = document.querySelector('toggle-btn i')

togglebtn.addEventListener("click", ()=>{
  togglebtn.classList.toggle('dropdownmenu')
  //console.log(togglebtn);
  const isOpen = togglebtn.classList.contains('open')

  if(togglebtnicon.classList = isOpen)
  {
    togglebtn.classList.replace("fa-xmark");
  }
  else{
    togglebtn.classList.replace("fa-bars");
  }
  
});


//splide

var splide = new Splide('.splide', {
  perPage: 3,
  perMove: 1,
  cover: true,
  height: '15rem',
 
  lazyLoad: 'nearby',
  gap: '1.5rem',
  dots: false,
  type: 'loop',
  autoplay: true,
  pagination: false,
  autoScroll: {
      speed: 1,
  },
  breakpoints: {
      1300: {
          perPage: 3,
      },
      1200: {
        perPage: 2.5,
                },
                991: {
                    perPage: 2,
                },
                767: {
                    perPage: 1.5,
                },
                550: {
                    perPage: 1,
                  }
                },
            });
    
            splide.mount();

            const deals_slider = new Splide("#deals_slider", {
              dots: false,
              type: 'loop',
              autoplay: true,
              pagination: false,
              perPage: 4,
              gap: '1.5rem',
              breakpoints: {
                  1300: {
                      perPage: 3,
                  },
                  1200: {
                      perPage: 2.5,
                  },
                  991: {
                      perPage: 2,
                  },
                  767: {
                      perPage: 1.5,
                  },
                  550: {
                      perPage: 1,
                  }
              }
          }).mount();
  
         