const allItems = document.querySelectorAll('.item');
const allItemsQty = allItems.length;

allItems.forEach((element) => {
    let elementTitle = element.querySelector('h2').textContent;
    let oneTitleElements = element.querySelectorAll('li');
    let oneTitleElementsQty = oneTitleElements.length;
})