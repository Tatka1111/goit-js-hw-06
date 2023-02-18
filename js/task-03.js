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
const listElement = document.querySelector('.galary');
const listItemElement = images.map(image => `<li> <img src='${image.url}' alt='${image.alt}'> </li>`);
listElement.insertAdjacentHTML("afterbegin", listItemElement);
listElement.style.listStyle = 'none';
listElement.style.display = 'flex';
listElement.style.justifyContent = 'center';
const imagesElelement = document.querySelectorAll('li > img');
imagesElelement[0].style.width = '300px';
imagesElelement[1].style.width = '300px';
imagesElelement[2].style.width = '350px';
