// スクロールに合わせてheaderを変更する処理
const pageTop = document.getElementById('top');
const header = document.getElementById('header');
const options ={
    threshold: 0
}
const observer = new IntersectionObserver(changeHeader, options);
observer.observe(pageTop);

function changeHeader(){
    header.style.backgroundcolor = 'ARGB(0,0,0,0)';
    header.children.style.color = 'var(--main)';
}