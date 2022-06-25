const btnFavorite = document.getElementById('btn-favorite');
const playPause = document.getElementById('play-pause');
const chart = document.getElementById('myChart').getContext('2d');
const singer = document.getElementById('singer');
const btnPreSinger = document.querySelector('.pre-btn');
const btnNextSinger = document.querySelector('.next-btn');
const userBtn = document.getElementById('user-btn');


const rootCss = document.querySelector(':root');

/////////// THEME
const btnTheme = document.getElementById('btn-theme');
const modalTheme = document.querySelector('.zm-theme-modal');
const btnCloseModalTheme = document.getElementById('btn-close-theme'); 
const overlayTheme = document.querySelector('.theme-overlay');

const allBg = document.querySelectorAll('.choose-color .card-theme');

//// ACTIVE SIDEBAR
const asideMenu = document.querySelectorAll('.zm-sidebar-menu li'); 
 
// PLAYLIST RIGHT
const playListSongs = document.querySelectorAll('.playlist-songs .card-song');
const headerPlaylist = document.querySelectorAll('.zm-playlist .title');



// active sidebarMenu
const changeActiveMenu = () =>{
    asideMenu.forEach( menuItem =>{
        menuItem.classList.remove('active');
    })
}

asideMenu.forEach( menuItem =>{
    menuItem.addEventListener('click', ()=>{
        changeActiveMenu();
        menuItem.classList.add('active');
    })
})


// when click favorite
btnFavorite.addEventListener('click', () =>{
    btnFavorite.classList.toggle('active')
})

playPause.addEventListener('click', ()=>{
    playPause.classList.toggle('active');
})


// change background header when srcoll > 100
window.addEventListener('scroll', ()=>{
    document.getElementById('zm-header').classList.toggle('header-scroll', window.scrollY > 100);
})


// CHART JS
new Chart(chart,{
    type: 'line',
    data: {
        labels: ['16:00', '18:00', '20:00', '22:00', '24:00', '00:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00' ],

        datasets: [
            {
                label :'Top 1',
                data: [30, 40, 35, 50, 25, 35, 40, 60, 40, 35, 50, 45, 20, 30],
                borderColor: '#4a90e2',
                borderWith: 2,
                color: '#fff',
            },
            {
                label :'Top 2',
                data: [10, 20,15, 25, 10, 6, 20, 18, 25, 30, 20, 10, 15, 5],
                borderColor: '#50e3c2',
                borderWith: 2,
            },
            {
                label :'Top 3',
                data: [20, 20, 10, 5, 8, 10, 15, 8, 5, 10, 20, 15, 10, 3],
                borderColor: '#e35050',
                borderWith: 2,

            }
        ]
    },
    options: {
        reponsive: true
    }
})


// SINGER 

btnNextSinger.addEventListener('click', () =>{
    singer.style.transform = 'translateX(calc(-146px * 4))'
})

btnPreSinger.addEventListener('click', () =>{
    singer.style.transform = 'translateX(0)'
})


// 
userBtn.addEventListener('click',()=>{
    userBtn.classList.toggle('active');
})
// 


/// MODAL THEME 
// function open ModalThem
const openModalTheme = () =>{
    modalTheme.style.display = 'block';
}

// function closeModalThem with Overlay
const overlayCloseModalTheme = (e) =>{
    if(e.target.classList.contains('theme-overlay')){
        modalTheme.style.display = 'none';
    }
}
// function closeModalThem
const closeModalTheme = (e) =>{
        modalTheme.style.display = 'none';
}

btnTheme.addEventListener('click', openModalTheme)
btnCloseModalTheme.addEventListener('click', closeModalTheme )
overlayTheme.addEventListener('click', overlayCloseModalTheme)

////////////////////////////////

const changeActiveModalTheme = () =>{
    allBg.forEach(color =>{
        color.classList.remove('active')
    })
}

allBg.forEach( color =>{
    let layoutBg;
    let colorPrimary;
    let primaryBg;
    let gradientBg;
    

    color.addEventListener('click', ()=>{
        changeActiveModalTheme();
        color.classList.add('active');

    if(color.classList.contains('color-1')){
        layoutBg = '#1e1e1e';
        primaryBg = '#5c5757';
        colorPrimary = 'black';
        gradientBg = 'linear-gradient(180deg,rgb(110, 34, 117),rgb(70, 40, 120))';
    } 
    else if(color.classList.contains('color-2')){
        layoutBg = '#170f23';
        primaryBg = '#432275';
        colorPrimary = 'rgb(114, 0, 161)';
        gradientBg = 'linear-gradient(180deg,rgb(110, 34, 117),rgb(70, 40, 120))';

    } 
    else if(color.classList.contains('color-3')){
        layoutBg = '#101f3f';
        primaryBg = '#192f60';
        colorPrimary = '#3460f5';
        gradientBg = 'linear-gradient(180deg,#1b2f5a,#182e5d)';
    }
    else if(color.classList.contains('color-4')){
        layoutBg = '#1d375a';
        primaryBg = '#274a78';
        colorPrimary = '#3460f5';
        gradientBg = 'linear-gradient(180deg,#224472,#244572)';
    }
    else if(color.classList.contains('color-5')){
        layoutBg = '#124534';
        primaryBg = '#126e54';
        colorPrimary = '#309785';
        gradientBg = 'linear-gradient(180deg,#137555,#15533f)';
    }
    else if(color.classList.contains('color-6')){
        layoutBg = '#57403b';
        primaryBg = '#6f514c';
        colorPrimary = '#986d5c';
        gradientBg = 'linear-gradient(180deg,#7b5e58,#654943)';
    }
    else if(color.classList.contains('color-7')){
        layoutBg = '#800064';
        primaryBg = '#a22687';
        colorPrimary = '#d820b0';
        gradientBg = 'linear-gradient(96deg,#ff64dc,#d631a1 102%)';
    }
    else if(color.classList.contains('color-8')){
        layoutBg = '#731717';
        primaryBg = '#883236';
        colorPrimary = '#aa1c1c';
        gradientBg = 'linear-gradient(180deg,#941c1c,#961919)';
    }
   



    rootCss.style.setProperty('--layout-bg', layoutBg);
    rootCss.style.setProperty('--primary-bg', primaryBg);    
    rootCss.style.setProperty('--purple-primary', colorPrimary);    
    rootCss.style.setProperty('--linear-gradient-bg', gradientBg);    

    })
})



// PlayList right
const changeActivePlaylist = () =>{
    playListSongs.forEach(song =>{
        song.classList.remove('active');
    })
}


playListSongs.forEach(song =>{
    song.addEventListener('click', () =>{
        changeActivePlaylist();
        song.classList.add('active');
    })
})


const changeActiveHeaderPlaylist = () =>{
    headerPlaylist.forEach(title =>{
        title.classList.remove('active');
    })
}

headerPlaylist.forEach(title =>{
    title.addEventListener('click', ()=>{
        changeActiveHeaderPlaylist();
        title.classList.add('active');
    })
})