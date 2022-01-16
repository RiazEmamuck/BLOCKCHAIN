/* Code jQuery pour la création du site sur la Blockchain et les crypto*/
/* Version du 16/01/2022*/
/* Riaz EMAMUCK */


// Appel de la fonction jQuery "Accordion" appliquée sur l'élément HTML "myAccordeon" (footer)
$( function() {
    var icons = {
    header: "ui-icon-circle-arrow-e",
    activeHeader: "ui-icon-circle-arrow-s"
    };
    $( "#myAccordeon" ).accordion({
        active: false,
        heightStyle: "content",
        collapsible: true,
        icons: icons
    });
    
    $( "#toggle" ).button().on( "click", function() {
    if ( $( "#myAccordeon" ).accordion( "option", "icons" ) ) {
        $( "#myAccordeon" ).accordion( "option", "icons", null );
    } else {
        $( "#myAccordeon" ).accordion( "option", "icons", icons );
    }
    });
});

$( function() {
    $( "#tabs" ).tabs();
} );