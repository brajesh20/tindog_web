function validation() {
    var name = document.customer.name.value;
    var mail = document.customer.email.value;
    var message = document.customer.message.value;
    var letters = /^[A-Za-z\s]+$/;

    if (!name.match(letters)) {
        alert("Please enter a valid name !!");
        return false;

    }

    if (name) {
        if (mail === "") {
            alert("Please enter a valid mail !! ")
            return false;
        } else if (message === "") {
            alert("Please reward us with your feedback !! ")
            return false;
        }
    }

}
