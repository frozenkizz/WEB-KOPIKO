var quantitiy=0;
let btnPlus = document.querySelector('.quantity-right-plus');
btnPlus.onclick = function() {
    // Stop acting like a button
    // e.preventDefault();
    // Get the field name
    var quantity = parseInt($('#quantity').val());
    
    // If is not undefined
        
        $('#quantity').val(quantity + 1);

      
        // Increment
}
   
let btnMinus = document.querySelector('.quantity-left-minus');
btnMinus.onclick =  function(e) {
                // Stop acting like a button
                e.preventDefault();
                // Get the field name
                var quantity = parseInt($('#quantity').val());
                
                // If is not undefined
              
                    // Increment
                    if(quantity>0){
                    $('#quantity').val(quantity - 1);
                    }
}      
   