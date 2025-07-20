let cart = JSON.parse(localStorage.getItem('cart')) || []

const cartModal = document.querySelector('.modal') 
const cartItems = document.querySelector('#cart-items')
const cartCount = document.querySelectorAll('.cart-count')
const cartTotal = document.querySelector('#cart-total')
const cartIcon = document.querySelector('.cart-icon')
const closeBtns = document.querySelectorAll('.close')

cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'block'
})

closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        cartModal.style.display = 'none'
    })
})

// closeBtn.addEventListener('click', () => {
//     cartModal.style.display = 'none'
// })

const buttons = document.querySelectorAll('.add-to-cart')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product')
        const id = product.dataset.id
        const name = product.dataset.name
        const price = parseFloat(product.dataset.price)
        const image = product.dataset.image
        const category = product.dataset.category
        const color = product.dataset.color
        const size = product.dataset.size


        const existingItem = cart.find(item => item.id === id)
        if (existingItem) {
            existingItem.quantity++
        } else {
            cart.push({ id, name, price, quantity: 1, image, category, color, size})
        }

        updateCart()
    })
})

function updateCart() {
    cartItems.innerHTML = ''
    let total = 0
    let count = 0

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity
        total += itemTotal
        count += item.quantity

        const cartItemElement = document.createElement('div')
        cartItemElement.classList.add('cart-item')
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50">
            <div class="item-info">
                <h2>${item.category}</h2>
                <h3>${item.name}</h3>
                <h4>${item.color}</h4>
                <p>${item.size}</p>
            </div>
            <div class="item-quantity">
                <p>${itemTotal}$</p>
                <button class="remove-btn" data-id="${item.id}">Удалить</button>
            </div>

        `
            // <p>${item.quantity}</p>
            // <p>${item.price}</p>

        cartItems.appendChild(cartItemElement)
    })

    localStorage.setItem('cart', JSON.stringify(cart))

    cartCount.forEach(el => el.textContent = count)
    cartTotal.textContent = total

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id
            cart = cart.filter(item => item.id !== id)
            updateCart()
        })
    })
}

updateCart()