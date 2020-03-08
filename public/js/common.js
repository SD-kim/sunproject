// hamburger menu popup
const bars = document.getElementById('hamburger');
const popup = document.getElementById('pop-up');

bars.addEventListener('click', (event) => {
    event.preventDefault();
    if(popup.classList[0] === 'appear'){
        popup.classList.remove('appear');
    } else {
        popup.classList.add('appear');
    }
});

//가로 690px 이하에서 홈으로 이동하는 버튼 표시
const homeBtn = document.getElementById('home');

function popUpHomeBtn(){
    if(window.innerWidth<=690 && (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250)){
        homeBtn.classList.add('appear')
    } else {
        homeBtn.classList.remove('appear');
    }
}

window.onscroll = () => {
    popUpHomeBtn();
}

//홈 버튼 누르면 상단으로 이동
homeBtn.addEventListener('click', () => {
    // console.log('scrolled')
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});