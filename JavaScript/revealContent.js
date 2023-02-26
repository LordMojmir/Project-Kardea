window.addEventListener('scroll', reveal)

function reveal() {
    let reveals = document.querySelectorAll('.reveal')
    for (i in reveals) {
        let windowheight = window.innerHeight
        let revealtop
        try {
            revealtop = reveals[i].getBoundingClientRect().top
        }
        catch(e) {

        }
        let revealpoint = 150
        try{
            if (revealtop < windowheight - revealpoint) {
                reveals[i].classList.add('showContent')
            }
            else {
                reveals[i].classList.remove('showContent')
            }
        }
        catch(e) {
            
        }
    }
}

