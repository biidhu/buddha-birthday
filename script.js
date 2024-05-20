document.addEventListener("DOMContentLoaded", () => {
    // Variables for elements
    const mainText = document.getElementById("main-text");
    const quoteText = document.getElementById("quote");
    const slider = document.getElementById("slider");
    const modal = document.getElementById("modal");
    const modalCloseBtn = document.querySelector(".close-btn");
    const changeTextBtn = document.getElementById("change-text-btn");
    const changeFontBtn = document.getElementById("change-font-btn");
    const backgroundBtn = document.getElementById("background-btn");
    const newQuoteBtn = document.getElementById("new-quote-btn");

    // Variables for data
    const images = ["https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/90234/249527/1671628646238_800C9946-8F7E-4C41-93E4-C9E213EA7A71__55533.1687000444.jpg?c=2"];
    const quotes = [
        "The mind is everything. What you think you become. - Buddha",
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. - Buddha",
        "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship. - Buddha"
    ];

    // Function to change main text
    function changeMainText() {
        mainText.textContent = "May you find peace and joy on Buddha's Birthday!";
    }

    // Function to toggle font style
    function toggleFontStyle() {
        mainText.style.fontFamily = mainText.style.fontFamily === "Arial" ? "Georgia" : "Arial";
    }

    // Function to toggle background color
    function toggleBackgroundColor() {
        document.body.style.backgroundColor = document.body.style.backgroundColor === "lightblue" ? "#f9f9f9" : "lightblue";
    }

    // Function to display a new quote
    function displayNewQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.textContent = quotes[randomIndex];
    }

    // Function to change slider image
    function changeSliderImage() {
        slider.src = images[0];
    }

    // Event listeners
    changeTextBtn.addEventListener("click", changeMainText);
    changeFontBtn.addEventListener("click", toggleFontStyle);
    backgroundBtn.addEventListener("click", toggleBackgroundColor);
    newQuoteBtn.addEventListener("click", displayNewQuote);
    setInterval(changeSliderImage, 3000);

    // Modal functionality
    modalCloseBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    mainText.addEventListener("click", () => {
        modal.style.display = "block";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
