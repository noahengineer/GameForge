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
function GoToBG() {
    window.location.href = 'Games/WebGames/BallsGahel2.0/index.html';
}
function GoToMT() {
    window.location.href = 'Games/WebGames/MultiplayerTest/index.html';
}
function GoToGamePage() {
    window.location.href = "games.html"
}

function download(url) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

let cardNumInput = 
    document.querySelector('#cardNum')

cardNumInput.addEventListener('keyup', () => {
    let cNumber = cardNumInput.value
    cNumber = cNumber.replace(/\s/g, "")

    if (Number(cNumber)) {
        cNumber = cNumber.match(/.{1,4}/g)
        cNumber = cNumber.join(" ")
        cardNumInput.value = cNumber
    }
})