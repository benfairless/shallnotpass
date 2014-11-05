// SHALLNOTPASS Stateless Password Management
// v0.1

var shallNotPass = {

  // Core hashing and encoding function
  generate : function ( pub, priv ) {

    // Check fields are within constraints
    if ( pub.length > 64 || priv.length > 32  ) {
      throw "Field length longer than expected";
    }
    // Shift is used to choose where the substring will be plucked from
    var shift = pub.length + priv.length * 1.75;
      console.log( "Shift : " + shift );

    // Ensure account names are lower-case
    pub = pub.toLowerCase();

    // SHA512 hash of input fields encoded into base64
    var sha512 = CryptoJS.SHA512( pub + priv ).toString();
      console.log( "SHA512 : " + sha512 );
    var base64 = Base64.encode( sha512 );
      console.log( "BASE64 : " + base64);

    // Cut encoded result using shift value
    result = base64.substring( shift, shift + 12 );

    return result;

  },


  harden : function ( string ) {
    // Check for upper-case characters and transform if false
    if ( (/[A-Z]/.test( string )) === false ) {
      string = upperFirstChar( string );
        console.log( "Result modified to contain uppercase character" );
    // Check for lower-case characters and transform if false
    } else if ( (/[a-z]/.test( string )) === false ) {
      string = lowerFirstChar( string );
      console.log( "Result modified to contain lowercase character" );
    // Check for numerical characters
    } else if ( (/[0-9]/.test( string )) === false ) {
      //string = addNumber( string );
        console.log( "Result modified to contain numberical characters" );
    // Check for special characters
    } else if ( (/[!,$,%,^,&,*,_,-,+,=,:,;,@,#,.,/,?,`,|]/.test( string )) === false ) {
      //string = addSpecialChar( string );
       console.log( "Result modified to contain special characters" );
    }
    return string;
  },


  create : function ( pub, priv ) {
    console.log ( pub + priv );
    var result = this.generate( pub, priv );
    result = this.harden( result );
      console.log( result );
    return result;
  }

};




function upperFirstChar( string ) {
  return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
}
function lowerFirstChar( string ) {
  return string.charAt( 0 ).toLowerCase() + string.slice( 1 );
}
