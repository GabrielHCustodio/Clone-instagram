const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')
const img4 = document.querySelector('#img4')

const transition = () => {
    img1.classList.remove('.on')
    img1.classList.add('.off')
}

transition()