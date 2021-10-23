const categoriesEl = document.querySelector('#categories')

const itemEl = categoriesEl.querySelectorAll('.item');

const firstTextTitle = itemEl[0].firstElementChild.textContent
const amountElementsFirst = itemEl[0].lastElementChild.children.length

const secondTextTitle = itemEl[1].firstElementChild.textContent
const amountElementsSecond = itemEl[1].lastElementChild.children.length

const lastTextTitle = itemEl[2].firstElementChild.textContent
const amountElementsLast = itemEl[2].lastElementChild.children.length

const show = () => {
    console.log('Number of categories: ', categoriesEl.children.length);

    console.log(`Category: ${firstTextTitle}`);
    console.log(`Elements: ${amountElementsFirst}`);
    
    console.log(`Category: ${secondTextTitle}`);
    console.log(`Elements: ${amountElementsSecond}`);
    
    console.log(`Category: ${lastTextTitle}`);
    console.log(`Elements: ${amountElementsLast}`);
};
show()

// Entered