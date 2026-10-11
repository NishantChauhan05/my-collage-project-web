let appointments = [];


// Book Appointment
document.getElementById("appointmentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let department = document.getElementById("department").value;
    let doctor = document.getElementById("doctor").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let payment = document.getElementById("payment").value;

    let appointmentId = "APT" + Math.floor(1000 + Math.random() * 9000);

    let appointment = {
        id: appointmentId,
        name: name,
        age: age,
        phone: phone,
        email: email,
        department: department,
        doctor: doctor,
        date: date,
        time: time,
        payment: payment
    };

    appointments.push(appointment);

    document.getElementById("result").innerHTML = `
        <h3>✅ Appointment Confirmed</h3>
        <p><b>Appointment ID:</b> ${appointmentId}</p>
        <p><b>Patient Name:</b> ${name}</p>
        <p><b>Doctor:</b> ${doctor}</p>
        <p><b>Department:</b> ${department}</p>
        <p><b>Date:</b> ${date}</p>
        <p><b>Time:</b> ${time}</p>
        <p><b>Payment:</b> ${payment}</p>
        <p><b>Status:</b> Confirmed</p>
    `;

    displayAppointments();

    document.getElementById("appointmentForm").reset();
});


// Display Appointments
function displayAppointments() {

    let list = document.getElementById("appointmentList");

    if (appointments.length === 0) {
        list.innerHTML = "<p>No appointments booked yet.</p>";
        return;
    }

    list.innerHTML = "";

    appointments.forEach(function(appointment, index) {

        list.innerHTML += `
            <div class="appointment-card">

                <h3>🧾 ${appointment.id}</h3>

                <p><b>Patient:</b> ${appointment.name}</p>
                <p><b>Doctor:</b> ${appointment.doctor}</p>
                <p><b>Department:</b> ${appointment.department}</p>
                <p><b>Date:</b> ${appointment.date}</p>
                <p><b>Time:</b> ${appointment.time}</p>
                <p><b>Payment:</b> ${appointment.payment}</p>
                <p><b>Status:</b> ✅ Confirmed</p>

                <button class="cancel-btn"
                        onclick="cancelAppointment(${index})">
                    Cancel Appointment
                </button>

            </div>
        `;
    });
}


// Cancel Appointment
function cancelAppointment(index) {

    let confirmCancel = confirm(
        "Are you sure you want to cancel this appointment?"
    );

    if (confirmCancel) {

        appointments.splice(index, 1);

        displayAppointments();

        document.getElementById("result").innerHTML = `
            <h3>❌ Appointment Cancelled</h3>
            <p>Your appointment has been cancelled successfully.</p>
        `;
    }
}


// Search Doctors
function searchDoctors() {

    let search = document
        .getElementById("searchDoctor")
        .value
        .toLowerCase();

    let doctors = document.querySelectorAll(".doctor-card");

    doctors.forEach(function(doctor) {

        let text = doctor.innerText.toLowerCase();

        if (text.includes(search)) {
            doctor.style.display = "block";
        } else {
            doctor.style.display = "none";
        }

    });
}


// Dark Mode
function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

}s