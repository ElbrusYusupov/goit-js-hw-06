const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')

const ingredientsItem = elements => {
  return elements.map(element => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = element;
    return itemEl;
  });
};

const items = ingredientsItem(ingredients);
ingredientsEl.append(...items);




/* Решение без использования document.createElement()

const item = ingredients.map((ingredient) => `<li class="item">${ingredient}</li>`).join("");
ingredientsEl.insertAdjacentHTML('beforeend', item);
*/

/* поэлементное решение
const itemPotatoes = document.createElement('li')
itemPotatoes.textContent = ingredients[0]
itemPotatoes.classList = 'item'

const itemMushrooms = document.createElement('li')
itemMushrooms.textContent = ingredients[1]
itemMushrooms.classList = 'item'

const itemGarlic = document.createElement('li')
itemGarlic.textContent = ingredients[2]
itemGarlic.classList = 'item'

const itemTomatos = document.createElement('li')
itemTomatos.textContent = ingredients[3]
itemTomatos.classList = 'item'

const itemHerbs = document.createElement('li')
itemHerbs.textContent = ingredients[4]
itemHerbs.classList = 'item'

const itemCondiments = document.createElement('li')
itemCondiments.textContent = ingredients[5]
itemCondiments.classList = 'item'

ingredientsEl.append(itemPotatoes,
itemMushrooms,
itemGarlic,
itemTomatos,
itemHerbs,
  itemCondiments)
*/
