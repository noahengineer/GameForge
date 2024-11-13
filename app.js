const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

function GoToGameRandomizer() {
    window.location.href = 'Games/WebGames/Randomizer/index.html';
}
function GoToCGJ() {
    window.location.href = 'Games/WebGames/CrawferdGameJam2024/index.html';
}

function download(url) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }