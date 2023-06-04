
/**
 * 
 * ------- Basic --------
 * 1.  do not show the link to them who should not see it
 * 2.  only show to the person/types of user who should see it
 * 3.  Do not allow to visit the link by typing on the url 
 * 4.  use Admin route that will check wheather the user is admin or not 
 * ** if not 
 * 
 * ---------- To send data ----------------
 * ---------------------------------
 *  1. Send token to the server (send authorization in the header to the server )
 *  ** if possible use axios to send jwt token to the intercepting the request 
 *  2. verirfyJWT middleware will handle the token
 *  3. 
 *  2. if it is an admin activity, Make sure only admin is posting data by using verify data
 */