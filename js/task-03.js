const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery')
const elements = images
  .map(image => `<li class="item"><img src="${image.url} alt="${image.alt} width="360"></img></li>`)
  .join("");
  galleryEl.insertAdjacentHTML('beforeend', elements);

  // Entered


/* Олдскульный метод___________________________
const elements = [];
for (let i = 0; i < images.length; i++) {
  const option = images[i];

  const imageEl = document.createElement('img');
  imageEl.src = option.url
  imageEl.alt = option.alt
  imageEl.width = 360

  elements.push(imageEl)
}
console.log(elements);
galleryEl.append(...elements)
*/

/* метод map()_________________________________
const elements = images.map(option => {
  const imageEl = document.createElement('img');
  imageEl.src = option.url
  imageEl.alt = option.alt
  imageEl.width = 360
  return imageEl
});
galleryEl.append(...elements)
*/
  
/* метод вызова функции (с использованием map())
const makeImagesElement = (options) => {
  return options.map(option => {
  const imageEl = document.createElement('img');
  imageEl.src = option.url
  imageEl.alt = option.alt
  imageEl.width = 360
  return imageEl
  })
}
const elements = makeImagesElement(images)
galleryEl.append(...elements)
*/


  
  


  
  
