const apiUrl = 'http://localhost:5252';

async function checkHealth() {
    try {
        // هنا قمنا بربط المتغير apiUrl مع المسار الصحيح
        const response = await fetch(`${apiUrl}/api/health`);
        const data = await response.json();
        console.log('Backend Status:', data);
        alert('Connected to Backend successfully!');
    } catch (error) {
        console.error('Connection failed:', error);
    }
}

window.onload = checkHealth;