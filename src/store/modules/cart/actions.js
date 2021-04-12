export function addToCartRequest(id){

    return {
        type: '@cart/ADD_REQUEST'
    }
}

export function addToCartSuccess(product){
    return {
        type: '@cart/SUCCESS',
        product,
    }
}