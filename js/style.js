// スクロールに合わせてheaderを変更する処理
const pageTop = document.getElementById('top');
const header = document.getElementById('header');
const headerul = document.querySelector('header ul')
const options = {
    threshold: 0.1
}
const observer = new IntersectionObserver(changeHeader, options);
observer.observe(pageTop);

function changeHeader(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            header.style.backdropFilter = 'blur(2px)';
        } else {
            header.style.backdropFilter = 'blur(12px)';
        }
    })
}