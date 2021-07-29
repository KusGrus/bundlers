import './index.css';
import angularImage from './assets/angular.png'

// console.log('Hello World!');

const container = document.querySelector('#container')

const h1 = document.createElement('h1')
h1.textContent = 'I love JavaScript'

const img = document.createElement('img')
img.src = angularImage

container.append(h1, img)

