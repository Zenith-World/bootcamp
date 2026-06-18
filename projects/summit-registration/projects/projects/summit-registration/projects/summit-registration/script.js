/* COUNTDOWN TIMER
 */
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 9);
targetDate.setHours(targetDate.getHours() + 1);
targetDate.setMinutes(targetDate.getMinutes() + 23);

function updateCountdown() {

    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('countdown')
            .textContent = 'CLOSED';
        return;
    }

    /* Convert milliseconds to time units.
       % (modulo) gets the remainder.
       Example: 90 minutes total.
       hours = floor(90/60) = 1
       minutes = 90 % 60 = 30
       So: 1h 30m ✅ */
    const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );
    const hours = Math.floor(
        (diff / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
        (diff / (1000 * 60)) % 60
    );
    const seconds = Math.floor(
        (diff / 1000) % 60
    );

    document.getElementById('countdown')
        .textContent =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

/* Run immediately then every second */
updateCountdown();
setInterval(updateCountdown, 1000);

/*FORM SUBMISSION*/
document.getElementById('regForm')
    .addEventListener('submit', function(e) {
        e.preventDefault();
        alert(
            '🎉 Registration successful!\n' +
            'Check your email for confirmation.'
        );
    });
