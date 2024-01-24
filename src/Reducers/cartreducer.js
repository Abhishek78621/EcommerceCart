
const initialstate={
    cart:[]
   
    
  };
  
   export const getTotal=(cart)=>{
    return cart.reduce((acc,item)=> acc+ parseInt(item.price) ,0)
   }
  
    
   
  
  
  const cartreducer = (state=initialstate,action) => {
    switch(action.type){
      case "ADD_TO_CART":{
        return {
          ...state,
          cart:[...state.cart, action.item]
        };
        }
        case "REMOVE_ALL":{
          return {
            ...state,
            cart:[]
          };
          }
        case "REMOVE_ITEM_FROM_CART":
          const index=state.cart.findIndex((cartItem)=>cartItem.id===action.id)
          let newcart=[...state.cart]
          if(index>=0){
            newcart.splice(index,1);
          }
          else{
            console.log("No item found")
          }
          return{
           ...state,cart:newcart
          }
          default :return state;
  
    }
  }
  export default cartreducer;
  