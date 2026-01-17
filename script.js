document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const resultContainer = document.getElementById('resultContainer');
    const message = document.getElementById('message');

    calculateBtn.addEventListener('click', calculateAge);

    function calculateAge() {
        const d = parseInt(dayInput.value);
        const m = parseInt(monthInput.value);
        const y = parseInt(yearInput.value);

        if (!d || !m || !y) {
            message.textContent = "Please fill in all date fields! 🎂";
            resultContainer.classList.remove('show');
            return;
        }

        // Basic validation
        if (m < 1 || m > 12 || d < 1 || d > 31) {
            message.textContent = "Please enter a valid date.";
            resultContainer.classList.remove('show');
            return;
        }

        const dob = new Date(y, m - 1, d); // Month is 0-indexed in JS Date

        // Strict date validation (e.g. Feb 30 -> March 2, so check if components match)
        if (dob.getFullYear() !== y || dob.getMonth() !== m - 1 || dob.getDate() !== d) {
            message.textContent = "Invalid date provided.";
            resultContainer.classList.remove('show');
            return;
        }
        const today = new Date();

        if (dob > today) {
            message.textContent = "Are you a time traveler? 🚀 Please enter a valid date.";
            resultContainer.classList.remove('show');
            return;
        }

        message.textContent = "";

        // Calculation Logic
        let years = today.getFullYear() - dob.getFullYear();
        let months = today.getMonth() - dob.getMonth();
        let days = today.getDate() - dob.getDate();

        // Adjust for negative months or days
        if (days < 0) {
            months--;
            // Get last month's number of days
            const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += lastMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        // Now we have standard Years, Months, Days.
        // We need to break "Days" into "Weeks" and "Days".
        const weeks = Math.floor(days / 7);
        const remainingDays = days % 7;

        // Display results with animation
        resultContainer.classList.remove('show');

        // Small delay to allow reset of animation if clicking multiple times
        setTimeout(() => {
            resultContainer.classList.add('show');
            animateValue("years", years);
            animateValue("months", months);
            animateValue("weeks", weeks);
            animateValue("days", remainingDays);
        }, 100);

        generateCreativeMessage(years);
    }

    function animateValue(id, value) {
        const obj = document.getElementById(id);
        const duration = 1500; // ms
        let startTimestamp = null;
        const start = 0;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Ease-out expo function for smooth effect
            const easeProgress = 1 - Math.pow(2, -10 * progress);

            obj.innerHTML = Math.floor(easeProgress * (value - start) + start);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                obj.innerHTML = value;
            }
        };

        window.requestAnimationFrame(step);
    }

    function generateCreativeMessage(years) {
        let msg = "";
        if (years < 1) msg = "Welcome to the world, little one! 👶";
        else if (years < 13) msg = "Enjoy your childhood! 🎈";
        else if (years < 20) msg = "The teenage years... full of adventure! 🎸";
        else if (years < 30) msg = "Building your future! 🚀";
        else if (years < 50) msg = "Prime of life! ✨";
        else if (years < 80) msg = "A wealth of wisdom! 📚";
        else msg = "A legendary journey! 🏆";

        setTimeout(() => {
            message.textContent = msg;
        }, 1200);
    }
});
