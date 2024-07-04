// JavaScript for Indonesian Tourism website

document.addEventListener('DOMContentLoaded', function() {
    // Function to create transaction form dynamically
    createTransactionForm();

    // Function to animate sections on scroll
    animateOnScroll();
});

function createTransactionForm() {
    const transactionForm = document.createElement('form');
    transactionForm.innerHTML = `
        <label for="name">Nama:</label><br>
        <input type="text" id="name" name="name" required><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br>
        <label for="destination">Destinasi:</label><br>
        <input type="text" id="destination" name="destination" required><br>
        <label for="date">Tanggal:</label><br>
        <input type="date" id="date" name="date" required><br>
        <label for="payment">Metode Pembayaran:</label><br>
        <select id="payment" name="payment" required>
            <option value="credit-card">Kartu Kredit</option>
            <option value="paypal">PayPal</option>
        </select><br><br>
        <button type="submit">Submit</button>
    `;
    document.getElementById('transactions').appendChild(transactionForm);

    transactionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        processTransaction();
    });
}

function processTransaction() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const payment = document.getElementById('payment').value;

    if(name && email && destination && date && payment) {
        alert(`Transaksi berhasil!\nNama: ${name}\nEmail: ${email}\nDestinasi: ${destination}\nTanggal: ${date}\nMetode Pembayaran: ${payment}`);
    } else {
        alert('Silakan isi semua kolom.');
    }
}

function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}
