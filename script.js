let ellipse = document.querySelector('.ellipse');
let img = ellipse.querySelectorAll('img');
let ellipseLeft = ellipse.getBoundingClientRect().left

ellipse.addEventListener('mousemove', function (event) {
    let width = ellipse.clientWidth
    let colunmWidh = width / 15
    let imgID = ~~((event.clientX - ellipseLeft) / colunmWidh) + 1
    let fileName = '.\\img\\clock\\clock\\' + imgID + '.png'
    document.querySelector('.ellipse img').setAttribute('src', fileName)
    console.log(imgID)
})