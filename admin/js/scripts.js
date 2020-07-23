$(document).ready(function(){
// CK EDITOR

        ClassicEditor
        .create( document.querySelector( '#body' ) )
        .catch( error => {
            console.error( error );
        } );

   // REST OF THE CODE 
    
$('#selectAllBoxes').click(function(event){
    if(this.checked) {
        
        $('.checkBoxes').each(function(){
                              
            this.checked = true;
                              
});

} else {

  
        $('.checkBoxes').each(function(){
                              
            this.checked = false;  
    
});
    
    
}
    
});
 //LOADER   
 
var div_box = "<div id='loadscreen'><div id='loading'></div></div>";
    
$("body").prepend(div_box);
    
$('#loadscreen').delay(700).fadeOut(600, function(){
  $(this).remove(); 
    
});
    

    
    
  });