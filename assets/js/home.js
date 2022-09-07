$(document).ready(function() {
    $('input[type=checkbox]').change(function() {

        if (this.checked) {
            $.get(`/tasks/delete/?id=${this.value}`);
        }
    });
});


