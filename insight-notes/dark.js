
    // Function to toggle between light and dark mode
    function toggleTheme() {
        const body = document.body;
        body.classList.toggle('dark-mode');

        // Save the current theme in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }

    // Check the saved theme in localStorage and apply it
    window.onload = function() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }

