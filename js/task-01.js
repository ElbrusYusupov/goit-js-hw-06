const categoriesEl = document.querySelector('#categories')
console.log('Number of categories: ', categoriesEl.children.length);

const itemEl = document.querySelector('.item');

const textTitle = itemEl.querySelector('h2').textContent


const amountElements = itemEl.querySelectorAll('li').length


const menuItemsByTag = document.querySelectorAll(".item")

const show  = () => {
console.log(`Category: ${textTitle}`);
console.log(`Elements: ${amountElements}`);
};

show()