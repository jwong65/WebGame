function newImage(url){
    let image = document.createElement('img')
    image.src = url
    // The position of the image will be absolute for the x/y positioning
    image.style.position = 'absolute'
    image.setAttribute('id','character')
    document.body.append(image)
    return image
}