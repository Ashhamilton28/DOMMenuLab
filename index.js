

//Select and cache the <main>element in a variable named mainEl
const mainEl = document.querySelector('main');

//Set the background color of mainEl to the value stored in the --main-bgCSS custom property. Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'

mainEl.style.backgroundColor = 'var(--main-bg)';

// Set the content of mainEl to <h1>SEI Rocks!</h1>
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

// Add a class of flex-ctr to mainEl

mainEl.classList.add('flex-ctr')

// Select and cache the <nav id="top-menu">element in a variable named topMenuEl

const topMenuEl = document.getElementById('top-menu')

// Set the height topMenuEl element to be 100%
topMenuEl.style.height = '100%';

// Set the background color of topMenuEl to the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';


// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around')


// 3.0
//Menu data structure
// const menuLinks = [
//   { text: 'about', href: '/about' },
//   { text: 'catalog', href: '/catalog' },
//   { text: 'orders', href: '/orders' },
//   { text: 'account', href: '/account' },
// ];

let menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// 3.1
menuLinks.forEach(obj => {
  // Create an <a>element.
  const a = document.createElement('a');
  // On the new element, add an href attribute with its value set to the href property of the "link" object.
  a.setAttribute('href', obj.href)

  // Set the new element's content to the value of the textproperty of the "link" object.
  console.dir(a)
  a.textContent = obj.text;

  // Append the new element to the topMenuEl element.
  topMenuEl.appendChild(a)
  console.log(a)
})

// task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.

const subMenuEl = document.getElementById ('sub-menu');

//task 4.1
// Set the height subMenuEl element to be 100%.
subMenuEl.style.height = '100%';

//task 4.2
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor= 'var(--sub-menu-bg)';

//task 4.3
// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around')

//task 4.4
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = ('absolute')

// Task 4.5
// Set the CSS top property of subMenuEl to the value of 0
subMenuEl.style.top = '0'

// task 5.1
// Select and cache the all of the <a>elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks=document.querySelectorAll('a')
// Declare a global showingSubMenu variable and initialize it to false
let showingSubMenu = false;

// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function(event){
  // The first line of code of the event listener function should call the event object's preventDefault()method.
  event.preventDefault()
  // The second line of code function should immediately return if the element clicked was not an <a>element.
console.log(event)

if(event.target.tagName !== 'A'){
  return
}

// console.log the content of the <a>to verify the handler is working.
console.log(topMenuLinks);
})





