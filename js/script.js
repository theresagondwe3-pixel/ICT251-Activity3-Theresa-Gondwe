/* ==========================================
   THERESA GONDWE - PERSONAL PORTFOLIO
   ICT251 WEB TECHNOLOGIES - ACTIVITY 3

   FOUR INTERACTIVE JAVASCRIPT FEATURES
========================================== */


// Wait until the HTML document is ready.
document.addEventListener("DOMContentLoaded", function () {


    /* ======================================
       FEATURE 1: DARK AND LIGHT MODE
    ====================================== */

    const themeButton = document.getElementById("theme-toggle");

    if (themeButton) {

        themeButton.addEventListener("click", function () {

            document.body.classList.toggle("light-theme");

            const isLight =
                document.body.classList.contains("light-theme");

            if (isLight) {

                themeButton.textContent = "🌙 Dark Mode";

                themeButton.setAttribute("aria-pressed", "true");

            } else {

                themeButton.textContent = "☀️ Light Mode";

                themeButton.setAttribute("aria-pressed", "false");

            }

        });

    }


    /* ======================================
       FEATURE 2: INTERACTIVE PHOTO GALLERY
    ====================================== */

    const photos = [

        {
            image: "images/16660.jpg",
            caption: "My learning journey and personal development.",
            alt: "Theresa's personal photograph"
        },

        {
            image: "images/IMG-20251019-WA0011.jpg",
            caption: "One of my favourite hobbies.",
            alt: "Photograph representing Theresa's hobbies"
        },

        {
            image: "images/IMG-20251116-WA0083.jpg",
            caption: "Exploring technology and web programming.",
            alt: "Photograph representing Theresa's interest in technology"
        }

    ];

    let currentPhoto = 0;

    const galleryImage =
        document.getElementById("gallery-image");

    const galleryCaption =
        document.getElementById("gallery-caption");

    const galleryCounter =
        document.getElementById("gallery-counter");

    const previousButton =
        document.getElementById("prev-photo");

    const nextButton =
        document.getElementById("next-photo");


    // Updates the gallery image and caption.
    function showPhoto() {

        galleryImage.src = photos[currentPhoto].image;

        galleryImage.alt = photos[currentPhoto].alt;

        galleryCaption.textContent = photos[currentPhoto].caption;

        galleryCounter.textContent =
            "Photo " + (currentPhoto + 1) +
            " of " + photos.length;

    }


    if (galleryImage && galleryCaption &&
        galleryCounter && previousButton && nextButton) {

        // NEXT BUTTON
        nextButton.addEventListener("click", function () {

            currentPhoto =
                (currentPhoto + 1) % photos.length;

            showPhoto();

        });


        // PREVIOUS BUTTON
        previousButton.addEventListener("click", function () {

            currentPhoto =
                (currentPhoto - 1 + photos.length) %
                photos.length;

            showPhoto();

        });

        showPhoto();

    }


    /* ======================================
       FEATURE 3: STUDY HOURS CALCULATOR
    ====================================== */

    const studyForm =
        document.getElementById("study-form");

    if (studyForm) {

        studyForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const hoursInput =
                document.getElementById("hours");

            const daysInput =
                document.getElementById("days");

            const result =
                document.getElementById("study-result");

            const hoursText = hoursInput.value.trim();
            const daysText = daysInput.value.trim();

            // Check empty inputs.
            if (hoursText === "" || daysText === "") {

                result.textContent =
                    "Please enter both hours and days.";

                return;

            }

            const hours = Number(hoursText);
            const days = Number(daysText);

            // Validate hours.
            if (!Number.isFinite(hours) || hours < 0) {

                result.textContent =
                    "Hours must be a valid number of 0 or more.";

                return;

            }

            // Validate days.
            if (!Number.isInteger(days) ||
                days < 1 || days > 7) {

                result.textContent =
                    "Days must be a whole number between 1 and 7.";

                return;

            }

            // Calculate weekly study hours.
            const total = hours * days;

            result.textContent =
                "Your total planned study time is " +
                total + " hours per week.";

        });

    }


    /* ======================================
       FEATURE 4: CONTACT FORM VALIDATION
    ====================================== */

    const contactForm =
        document.getElementById("contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            // Prevent page reload.
            event.preventDefault();

            const nameInput =
                document.getElementById("name");

            const emailInput =
                document.getElementById("email");

            const topicInput =
                document.getElementById("topic");

            const messageInput =
                document.getElementById("message");

            const feedback =
                document.getElementById("form-feedback");

            const preview =
                document.getElementById("message-preview");

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            // Hide previous message preview.
            preview.hidden = true;

            // Check name.
            if (name === "") {

                feedback.textContent =
                    "Please enter your name. Spaces are not allowed.";

                nameInput.focus();

                return;

            }

            // Validate email.
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                feedback.textContent =
                    "Please enter a valid email address.";

                emailInput.focus();

                return;

            }

            // Check message.
            if (message === "") {

                feedback.textContent =
                    "Please enter your message.";

                messageInput.focus();

                return;

            }

            // Validation successful.
            feedback.textContent =
                "Your information has been validated successfully.";

            // Display user data safely.
            document.getElementById("preview-name").textContent =
                name;

            document.getElementById("preview-email").textContent =
                email;

            document.getElementById("preview-topic").textContent =
                topicInput.options[topicInput.selectedIndex].text;

            document.getElementById("preview-message").textContent =
                message;

            // Show message preview.
            preview.hidden = false;

        });

    }

});