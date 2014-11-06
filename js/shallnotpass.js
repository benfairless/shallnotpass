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
    // Ensure account names are lower-case
    pub = pub.toLowerCase();
    // SHA512 hash of input fields encoded into base64
    var sha512 = CryptoJS.SHA512( pub + priv ).toString();
    var base64 = Base64.encode( sha512 );
    // Cut encoded result using shift value
    result = base64.substring( shift, shift + 12 );
    return result;
  },

  // Ensure that passwords are 'hard'
  harden : function ( string, priv ) {
    var index = 0;
    // Check for upper-case characters
    if ( (/[A-Z]/.test( string )) === false ) {
      string = string.charAt( 0 ).toUpperCase() + string.slice ( 1 );
      index = index + 1;
    }
    // Check for lower-case characters
    if ( (/[a-z]/.test( string )) === false ) {
      string = string.charAt( 0 ).toLowerCase() + string.slice ( 1 );
      index = index + 1;
    }
    // Check for numerical characters
    if ( (/[0-9]/.test( string )) === false ) {
      var number = CryptoJS.SHA512( string + priv ).toString().match(/\d/);
      string = string.substr( 0, index ) + number + string.substr( index + 1);
      index = index + 1;
    }
    // Check for special characters
    if ( (/[!,$,%,&,_,^,=,@,#,?]/.test( string )) === false ) {
      //  symbol IDs  0   1   2   3   4   5   6   7   8   9
      var symbols = ['!','$','%','&','_','^','=','@','#','?'];
      // Use hashes of the private key and string to provide symbol id & position
      var symId = CryptoJS.SHA512( priv ).toString().match(/\d/);
      var position = parseInt( CryptoJS.SHA512( string ).toString().match(/\d/) ) + index;
      var character = symbols[ symId ].toString();
      string = string.substr( 0, position ) + character + string.substr( position + 1 );
    }
    return string;
  },

  // Wrapper function
  create : function ( pub, priv ) {
    var result = this.generate( pub, priv );
    result = this.harden( result, priv );
    return result;
  }

};
