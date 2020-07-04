$(document).ready(function(){
    $("a").on('click', function(event){
        if(this.hash === ""){
            event.preventDefault();
        }
    });
});