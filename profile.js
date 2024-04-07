document.addEventListener('DOMContentLoaded', function() {
    var editButtons = document.querySelectorAll('.edit-button');
    
    editButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var infoSpan = this.previousElementSibling;
            var infoType = infoSpan.getAttribute('data-type');
            var input = document.createElement('input');
            input.className = 'info-input';

            // Check if the data type is date, if so, use a date picker
            if (infoType === 'date') {
                input.type = 'date';
            } else {
                input.type = 'text';
            }

            input.value = infoSpan.textContent.trim();
            this.parentElement.replaceChild(input, infoSpan);
            this.textContent = 'Save';

            // Handle the save action
            this.onclick = function() {
                var updatedValue = input.value.trim();
                infoSpan.textContent = updatedValue;
                this.parentElement.replaceChild(infoSpan, input);
                this.textContent = 'Edit';
                // Optionally add your logic to save the updated value to the server
            };
        });
    });
});
