
function appendToDisplay( value ) {
    document.getElementById( 'display' ).value += value;
}

function clearDisplay() {
    document.getElementById( 'display' ).value = '';
}

function calculate() {
    try {
        document.getElementById( 'display' ).value = eval( document.getElementById( 'display' ).value );
    } catch ( error ) {
        document.getElementById( 'display' ).value = 'Error!';
    }
}

document.addEventListener( "keydown", function(event){
    const key = event.key;

    if(( key >= "0" && key <= "9" ) || key === "." || key === "/" || key === "+" || key === "-" || key === "*" ) {
        appendToDisplay( key );
    } else if ( key === 'Enter' ) {
        calculate();
    } else if ( key === "c" || key === "C" || key === 'Backspace' ) {
        clearDisplay();
    }
});