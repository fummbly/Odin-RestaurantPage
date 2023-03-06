const inside = () => {
    const imgSource = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    const img = document.createElement('img')
    img.src = imgSource
    img.style = 'width: 100%;'

    return img;
}

export default inside;