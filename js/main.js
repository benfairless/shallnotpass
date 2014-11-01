// jQuery page load actions
$( document ).ready( function() {

  // CLEAR INPUT FIELDS
  function clearFields() {
    $( 'input#account' ).val( "" );
    $( 'input#password' ).val( "" );
    $( 'input#output' ).val( "" );
    $( 'div#output-group').fadeOut( 750 );
  }

  function highlightError() {
    return false;
  }

  // GENERATE OUTPUT FROM INPUT FIELDS AND DISPLAY
  function genHash() {
    var acct = $( 'input#account').val();
    var pass = $( 'input#password').val();
    if ( acct === "" || pass === "") {
      highlightError();
    }
    else {
      console.log( acct + pass );
      $( 'div#output-group' ).fadeIn( 750 );
      $( 'input#output' ).val( shallNotPass.create( acct, pass ) );
      $( 'input#output' ).focus();
      $( 'div#output-group' ).delay(30000).fadeOut( 750, function() { clearFields(); } );
    }
  }

  // Generate output when 'Enter' is pressed in an input field
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
  $( 'div#output-group' ).hide();
  // Auto-focus ACCT
  $( 'input#account' ).focus();
  // Auto-select HASH
  $( 'input#output').focus( function() { $( this ).select(); });
  // If it looks like a button, and it's called a button...
  $( '.btn' ).button();
  // If it looks like a tooltip, and it's called a tooltip...
  $( '.ttp' ).tooltip( { container: 'body' } );
  // Actions for delete button
  $( '#delete').click( function() { clearFields(); });

});
