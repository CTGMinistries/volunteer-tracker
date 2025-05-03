//store volunteer data
    let volunteers = [];

    function addVolunteer() {
        const name = document.getElementById('volunteerName').value;
        // ... rest of the functions ...
    }

    // ... all other functions ...

// Add these functions to persist data
function saveVolunteers() {
    localStorage.setItem('volunteerRecords', JSON.stringify(volunteers));
}

function loadVolunteers() {
    const saved = localStorage.getItem('volunteerRecords');
    if (saved) {
        volunteers = JSON.parse(saved);
        updateVolunteerTable();
    }
}

// Modify addVolunteer and deleteVolunteer to call saveVolunteers()
// Add this to the script initialization
window.addEventListener('DOMContentLoaded', () => {
    loadVolunteers();
});

    // Initialize with today's date
    document.getElementById('eventDate').valueAsDate = new Date();
