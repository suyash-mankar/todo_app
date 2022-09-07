$(document).ready(function() {
    $('input[type=checkbox]').change(function() {

        if (this.checked) {
            $.get(`/delete-task/?id=${this.value}`);
        }
    });
});



