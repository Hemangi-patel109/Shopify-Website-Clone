function hideMarquee() {
    document.getElementById("promoBar").style.display = "none";
}
var myCarousel = new bootstrap.Carousel('#carouselExampleDark', {
    interval: 3000,
    ride: 'carousel'
});


function scrollLeft() {
    const container = document.getElementById("categoryScroll");
    const items = container.querySelectorAll(".category-card");
    const lastItem = items[items.length - 1];
    container.insertBefore(lastItem, items[0]);
}
function scrollRight() {
    const container = document.getElementById("categoryScroll");
    const firstItem = container.querySelector(".category-card");
    container.appendChild(firstItem);
}

function scrollLeft() {
    const scrollContainer = document.getElementById('categoryScroll');
    scrollContainer.scrollBy({ left: -350, top: 0, behavior: 'smooth' }); 
}

function scrollRight() {
    const scrollContainer = document.getElementById('categoryScroll');
    scrollContainer.scrollBy({ left: 350, top: 0, behavior: 'smooth' });
}

