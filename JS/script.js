let form = document.forms.login
let inp = form.querySelectorAll('input')
let inpMust = form.querySelectorAll('.must')
let text = form.querySelectorAll('.text') 
let img = form.querySelectorAll('.img')
let b1 = document.querySelector('.b1')
let b2 = document.querySelector('.b2')

let success = 0
let eror = 0


console.log(inp);

let pattern = {
    name: /^[a-z ,.'-]+$/i,
    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    phone:  /^9989[012345789][0-9]{7}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    about: /^[0-9A-Za-z\s\-]+$/,
    js: /^[0-9A-Za-z\s\-]+$/,
    css: /^[0-9A-Za-z\s\-]+$/,
    html: /^[0-9A-Za-z\s\-]+$/,
    age: /^100|[1-9]?\d$/
}

function validate(field, regex) {
    if(regex.test(field.value)) {
        field.style.border = '2px solid green'
    } else{
        field.style.border = '2px solid red'

    }
}

inpMust.forEach(inps => {
    inps.onkeyup = () => {
        validate(inps, pattern[inps.name])
    }
})

form.onsubmit = (event) => {
    event.preventDefault()
    
    let error = false
    eror = 0
    success = 0

    inpMust.forEach(item => {
        if(item.value.length === 0) {
            item.classList.add('error')
            eror++
            b1.innerHTML = eror
            error = false
        } else {
            success++
            b2.innerHTML = success
            error = true
        }

    })
    text.forEach(i => {
        if(error === false){
            i.classList.remove('text')
            i.classList.add('text2')
            error = false
        } else {
            error = true
        }
    })
    img.forEach(i => {
        if(error === false){
            i.classList.remove('img')
            i.classList.add('img2')
            error = false
        } else {
            error = true
        }
    })
    
    if(error === true){
        submit(form)
    }
};




function submit(elem) {
    let user = {
        id: Math.random()
    }

    let fm = new FormData(elem)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}