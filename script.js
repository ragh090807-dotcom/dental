function scrollToAppointment() {
    document.getElementById("appointment").scrollIntoView({
        behavior: "smooth"
    });
}

function bookAppointment(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;

    document.getElementById("result").innerHTML =
        "Thank you " + name + "! Your appointment request for " + date + " has been received.";

    document.querySelector("form").reset();
}