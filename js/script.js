const asideMenuUl = document.querySelector('.aside-menu-up___list')
asideMenuUl.onclick = e => {
    if (e.target.tagName === 'A' && !e.target.closest('.aside-menu-up__submenu')) e.target.parentElement.classList.toggle('active_sub')
}

const mainGrid = document.querySelector('.grid')
mainGrid.onclick = e => {
    if (e.target.className === 'grid-item-back__icon-close-add') e.target.closest('.grid__item').classList.toggle('active_card')
}

const header = document.querySelector('header')
header.onclick = e => {
    if (e.target.tagName === 'DIV') e.target.classList.toggle('active-mobile-menu')
}

document.body.onclick = e => {
    if (e.target.className === 'easter-egg') {
        e.stopPropagation();
    } else if (e.target.tagName === 'A') {
        e.preventDefault()
    }
}