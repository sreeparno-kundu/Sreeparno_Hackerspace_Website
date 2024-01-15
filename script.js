

let theme = localStorage.getItem('theme')

let themeDots = document.getElementsByClassName('theme-dot')

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        console.log('Mode: ', mode)
        setTheme(mode)
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'style/light.css'
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'style/purple.css'
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'style/blue.css'
    }

    if (mode == 'orange') {
        document.getElementById('theme-style').href = 'style/orange.css'
    }

    localStorage.setItem('theme', mode)
}