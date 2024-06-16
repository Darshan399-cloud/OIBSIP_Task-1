let left_scroll = document.querySelector('#left_btn')
let right_scroll = document.querySelector('#ryt_btn')
let first_clr = document.querySelector('#fir_clr')
let second_clr = document.querySelector('#sec_clr')
let order = document.querySelector('.odr_button')
let msg_box = document.querySelector('.messages')
let menu = document.querySelector('.menu_btn')
let toggle = true;
let MenuBar = document.querySelector('.menu_options')
let price = document.querySelector('#mbl_price')


document.querySelector('#green_mbl').style.display = 'none'

right_scroll.addEventListener('click', () => {
    document.querySelector('#white_mbl').style.display = 'none'
    document.querySelector('#green_mbl').style.display = 'block'
    price.innerHTML = '$466'

})
left_scroll.addEventListener('click', () => {
    document.querySelector('#white_mbl').style.display = 'block'
    document.querySelector('#green_mbl').style.display = 'none'
    price.innerHTML = '$478'
})

first_clr.style.fontWeight = 'bold'
second_clr.style.background = 'none'

first_clr.addEventListener('click', () => {
    first_clr.style.background = '#00b4d8'
    first_clr.style.fontWeight = 'bold'
    second_clr.style.fontWeight = 'normal'
    second_clr.style.background = 'none'
})
second_clr.addEventListener('click', () => {
    second_clr.style.background = '#00b4d8'
    second_clr.style.fontWeight = 'bold'
    first_clr.style.fontWeight = 'normal'
    first_clr.style.background = 'none'
})

let quantity = document.querySelector('.quantity_content span');
let minusBtn = document.querySelector('.quantity_content button:first-child');
let plusBtn = document.querySelector('.quantity_content button:last-child');

minusBtn.addEventListener('click', () => {
    if (quantity.innerText > 1) {
        quantity.innerText = parseInt(quantity.innerText) - 1;
    }
});

plusBtn.addEventListener('click', () => {
    quantity.innerText = parseInt(quantity.innerText) + 1;
});



function show_message() {
    msg_box.style.display = 'block';
    setTimeout(() => {
        msg_box.style.display = 'none';
    }, 2000); // Hide the message after 2 seconds
}

order.addEventListener('click', () => {
    show_message();
});

menu.addEventListener('click', () => {
    if (toggle) {
        MenuBar.style.display = 'block'
        toggle = false;
    } else {
        MenuBar.style.display = 'none'
        toggle = true;
    }
})