const setImages = () => {
    const spanElements = document.querySelectorAll('span[role="img"]');
    // Convert each <span> element to an <img> element
    spanElements.forEach((span) => {
        // Create a new <img> element
        const img = document.createElement('img');

        // Copy the src and alt attributes from the <span> to the <img>
        img.src = span.getAttribute('src');
        img.alt = span.getAttribute('alt');
        img.title = span.getAttribute('title');
        img.style = span.getAttribute('style') + " min-width: 1em;";
        span.innerHTML = "";
        // Replace the <span> with the <img> in the DOM
        span.appendChild(img);
    })
}
const flagService = {
    setImages
}
export default flagService

