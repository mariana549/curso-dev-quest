export function addProducsToCart(product){
   return {
      type: "ADD_PRODUCT_TO_CART",
      payload: product
   }
}