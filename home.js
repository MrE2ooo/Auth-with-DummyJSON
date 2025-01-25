document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('username');

    if (!username) {
        // If no username is found, redirect back to login page
        window.location.href = 'index.html';
        return;
    }

    // Display the username
    document.getElementById('username').textContent = username;

    // Logout button
    document.getElementById('logoutButton').addEventListener('click', function () {
        localStorage.removeItem('username'); // Clear the username
        window.location.href = 'index.html'; // Redirect to login page
    });
});