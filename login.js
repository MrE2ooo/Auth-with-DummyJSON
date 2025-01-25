document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                password,
                expiresInMins: 30, // Optional: Set token expiration time
            }),
            // credentials: 'include', // Remove this line
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed');
        }

        const data = await response.json();
        console.log('Login Response:', data);

        // Save username and tokens to localStorage
        localStorage.setItem('username', data.username);
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        // Redirect to home.html
        window.location.href = 'home.html';
    } catch (error) {
        console.error('Login Error:', error);
        document.getElementById('errorMessage').textContent = 'Error: ' + error.message;
    }
});