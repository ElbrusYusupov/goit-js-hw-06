const categoriesEl = document.querySelector('#categories')
console.log('Number of categories: ', categoriesEl.children.length);

const itemEl = document.querySelector('.item');

const textTitle = itemEl.firstElementChild.textContent


const amountElements = itemEl.lastElementChild.children.length


const menuItemsByTag = document.querySelectorAll(".item")

const show  = () => {
console.log(`Category: ${textTitle}`);
console.log(`Elements: ${amountElements}`);
};

show()