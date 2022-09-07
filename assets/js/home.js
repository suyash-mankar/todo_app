$(document).ready(function() {
    $('input[type=checkbox]').change(function() {

        let completed = this.getAttribute('completed');
        if(completed=="true"){  
            this.setAttribute('completed', false);   
        }
        else{
            this.setAttribute('completed', true);
        }
  
        $.get(`/tasks/update/?id=${this.value}&completed=${this.getAttribute('completed')}`);

    });
});


