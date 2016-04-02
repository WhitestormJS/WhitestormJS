/**
 * © Alexander Buzin, 2014-2015
 * Site: http://alexbuzin.me/
 * Email: alexbuzin88@gmail.com
*/
    
/**
 * Extending object with other objects.
 *
 * @param {Object} object - Object that will be overwritten.
 * @param {...Objects} extensions - other objects that will be merged to first.
 * @return {Object} Extended object.
 */
WHS.API.extend = function( object, ...extensions ) { // $.extend alternative, ... is the spread operator.

	for( var extension of extensions ){
		//console.log(extension);
		//console.log(typeof extension);

		if( !extension )
			continue; // Ignore null and undefined objects and paramaters.

		for( var prop of Object.getOwnPropertyNames( extension ) ) { // Do not traverse the prototype chain.
			if( object[prop] != undefined 
				&& object[prop].toString() == '[object Object]' 
				&& extension[prop].toString() == '[object Object]' )

				//Goes deep only if object[prop] and extension[prop] are both objects !
				WHS.API.extend(object[prop], extension[prop]);
					
			else
				object[prop] = ( object[prop] === 0 )? 0 : object[prop];
				if( !object[prop] && typeof object[prop] != "boolean" ) object[prop] = extension[prop]; // Add values that do not already exist.
		}
	}

	return object;
	
}
