//When DOM is ready, execute the function
$(document).ready(function() {

    //Whenever checkbox is checked on unchecked, execute the function
    $('input[type=checkbox]').change(function() {

        //Get the value of completed attribute
        let completed = this.getAttribute('completed');

        if(completed=="true"){  
            //If checkbox is unchecked, set the 'complete' attribute to 'false'
            this.setAttribute('completed', false);   
        }
        else{
            //If checkbox is checked, set the 'complete' attribute to 'true'
            this.setAttribute('completed', true);
        }
        
        //Send an ajax GET request containing the 'id' and 'complete' attribute
        $.get(`/tasks/update/?id=${this.value}&completed=${this.getAttribute('completed')}`);

    });
});


