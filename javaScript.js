window.onload = function() {
    // Memeriksa apakah halaman yang sedang dibuka adalah index.html
    const currentPath = window.location.pathname;

    // Cek apakah halaman yang sedang dibuka adalah index.html
    if (currentPath.includes("index.html") || currentPath === "/") {
        // Mendapatkan waktu saat ini
        const hours = new Date().getHours();
        let greeting;

        // Tentukan greeting berdasarkan waktu
        if (hours < 12) {
            greeting = "Good Morning!";
        } else if (hours < 18) {
            greeting = "Good Afternoon!";
        } else {
            greeting = "Good Evening!";
        }

        // Menampilkan greeting di halaman utama
        const greetingTextElement = document.getElementById("greetingText");
        greetingTextElement.textContent = greeting + " Welcome to my portfolio!";

        // Menampilkan elemen greeting
        const greetingMessageElement = document.getElementById("greetingMessage");
        greetingMessageElement.style.display = "block";
    }
};
