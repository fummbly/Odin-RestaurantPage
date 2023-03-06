import inside from './inside'
import about from './about'
import contact from './contact'


const btnStyle = 'padding: .5rem 2rem; font-size: 1rem; border: none; border-radius: .25rem; font-weight: bold; background-color: gainsboro'
const activeBtn = '#58aebf'


const content = document.getElementById("content")
content.style.fontFamily = 'sans-serif'


const header = document.createElement("h1")
header.textContent = "The Odin Restaurant"
content.appendChild(header)


const tabHolder = document.createElement("div")
tabHolder.style = "display: flex; justify-content: space-evenly; width: 70%; max-width: 50rem; margin: 0 auto;"
const imageBtn = document.createElement('button')
imageBtn.style = btnStyle
imageBtn.innerHTML = "Inside"
imageBtn.addEventListener('click', (e) => {
    clearTab()
    clearButtons()
    e.target.style.backgroundColor = activeBtn
    tabContent.appendChild(inside())
})
const aboutBtn = document.createElement('button')
aboutBtn.style = btnStyle
aboutBtn.innerHTML = "About"
aboutBtn.addEventListener('click', (e) => {
    clearTab()
    clearButtons()
    e.target.style.backgroundColor = activeBtn
    tabContent.appendChild(about())
})
const contactBtn = document.createElement('button')
contactBtn.style = btnStyle
contactBtn.innerHTML = "Contact"
contactBtn.addEventListener('click', (e) => {
    clearTab()
    clearButtons()
    e.target.style.backgroundColor = activeBtn
    tabContent.appendChild(contact())
})
tabHolder.appendChild(imageBtn)
tabHolder.appendChild(aboutBtn)
tabHolder.appendChild(contactBtn)

const clearButtons = () => {
    imageBtn.style.backgroundColor = 'gainsboro'
    aboutBtn.style.backgroundColor = 'gainsboro'
    contactBtn.style.backgroundColor = 'gainsboro'
}

content.appendChild(tabHolder)

const tabContent = document.createElement('div')
tabContent.style = "margin: 1rem";

const clearTab = () => {
    tabContent.textContent = ""
}

content.appendChild(tabContent)
