


/**
 * 
 *  1. install stripe and react stripe js
 *  2. Create a checkout form with (card element contains: card number, expiration date, cv, cvs, zip code)
 *  3. create account on Stripe and get the publishable key 
 *  4. get card information
 *  5. create payment method
 *  6. use test card to test payment
 *  7. On the server side install stripe 
 *  8. server - create a payment intent api with payment method types: ['card']
 *  9. server - make sure you provide amount in cents (multiply price with 100)
 *  10. server - res.send the client side to the client side
 *  11. client = call payment intent api to get client secret and store it ina state
 *  12. client = useConfirmCardPayment api with client secret and card Info
 * 
 */