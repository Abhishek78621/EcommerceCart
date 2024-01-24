export function addtocart(id,title,image,price){
    return{
        type:"ADD_TO_CART",
        item: {
            id:id,
            title:title,
            image:image,
            price:price

        }
    }
}
export function removefromcart(id,title,image,price){
    return{
        type:"REMOVE_ITEM_FROM_CART",
        id : id,
        
    }
}
export function removeall(id,title,image,price){
        return{
            type:"REMOVE_ALL",
            
        }
}
