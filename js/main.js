// jQuery page load actions
$( document ).ready( function() {

  // CLEAR INPUT FIELDS
  function clearFields() {
    $( 'input#acct' ).val( "" );
    $( 'input#pass' ).val( "" );
    $( 'input#hash' ).val( "" );
    $( '#hashgroup').fadeOut( 750 );
  }

  function highlightError() {
    return false;
  }

  // GENERATE HASH FROM INPUT FIELDS
  function genHash() {
    var acct = $( 'input#acct').val();
    var pass = $( 'input#pass').val();
    if ( acct === "" || pass === "") {
      highlightError();
    }
    else {
      $( '#hashgroup' ).fadeIn( 750 );
      $( '#hash' ).val( shallNotPass.create( acct, pass ) );
      $( '#hash' ).focus();
      $( '#hashgroup' ).delay(30000).fadeOut( 750, function() { clearFields(); } );
    }
  }

  // Generate hash when 'Enter' is pressed in an input field
  $( 'form#snp' ).each( function() {
    $( this ).find( 'input' ).keypress( function(e) {
      if ( e.which == 10 || e.which == 13 ) {
        genHash();
      }
    });
  });

  // Hide JS warning on load
  $( '.jscheck').hide();
  // Hide HASHGROUP on load
  $( '#hashgroup' ).hide();
  // Auto-focus ACCT
  $( 'input#acct' ).focus();
  // Auto-select HASH
  $( 'input#hash').focus( function() { $( this ).select(); });
  // If it looks like a button, and it's called a button...
  $( '.btn' ).button();
  // If it looks like a tooltip, and it's called a tooltip...
  $( '.ttp' ).tooltip( { container: 'body' } );
  // Actions for delete button
  $( '#delete').click( function() { clearFields(); });

});
