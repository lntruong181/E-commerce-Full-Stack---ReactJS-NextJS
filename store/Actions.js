export const ACTIONS = {
    NOTIFY: 'NOTIFY',
    AUTH: 'AUTH',
    ADD_CART: 'ADD_CART',
    ADD_MODAL: 'ADD_MODAL',
    ADD_ORDERS: 'ADD_ORDERS',
    ADD_USERS: 'ADD_USERS'
}

export const addToCart = (product, cart) => {
    if(product.inStock ===0){
        return ({type: 'NOTIFY', payload: {error: 'This product is out of stock.'}})
    }
    //check sản phẩm được thêm vào cart chưa
    const check = cart.every(item => {
        return item._id !== product._id
    })
    //sản phẩm đã có trong giỏ hàng
    if(!check) return ({ type: 'NOTIFY', payload: {error: 'The product has been added to cart.'} }) 
    return ({ type: 'ADD_CART', payload: [...cart, {...product, quantity: 1}] })    

}

//giảm bớt số lượng sp trong cart
export const decrease = (data, id) => {
    const newData = [...data]
    newData.forEach(item => {
        if(item._id === id ) item.quantity -=1
    })
    return ({type: 'ADD_CART', payload: newData})
}
//tăng số lượng sp trong cart
export const increase = (data, id) => {
    const newData = [...data]
    newData.forEach(item => {
        if(item._id === id ) item.quantity +=1
    })
    return ({type: 'ADD_CART', payload: newData})
}

export const deleteItem = (data, id, type) => {
    const newData = data.filter(item => item._id !== id)
    return ({ type, payload: newData})
}
export const Notified = () =>{
    return ({ type: 'NOTIFY', payload: {success: 'Product added'} }) 
}
export const updateItem = (data, id, post, type) => {
    const newData = data.map(item => (item._id === id ? post : item))
    return ({ type, payload: newData})
}

// Update user manager

export const deleteUser = (data, id, type) => {
    const newData = data.filter(item => item._id !== id)
    return ({ type, payload: newData})
}