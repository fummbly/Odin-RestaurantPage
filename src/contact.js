const contact = () => {
    const contactDiv = document.createElement('div')
    contactDiv.style.textAlign = "center"
    const emailTitle = document.createElement('h3')
    emailTitle.textContent = 'Email'
    contactDiv.appendChild(emailTitle)

    const email = document.createElement('p')
    email.textContent = 'odinrest@someemail.com'
    contactDiv.appendChild(email)

    const phoneTitle = document.createElement('h3')
    phoneTitle.textContent = "Phone"
    contactDiv.appendChild(phoneTitle)

    const phone = document.createElement('p')
    phone.textContent = "774-302-8832"
    contactDiv.appendChild(phone)

    return contactDiv
}

export default contact;