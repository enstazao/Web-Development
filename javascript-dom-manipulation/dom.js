// // Examine the Document Object Model

// // console.log(document.domain);
// // console.log(document.URL);
// // document.title = 123;
// // console.log(document.doctype);
// // console.log(document.head); 
// // console.log(document.all);
// // console.log(document.all[10]);r
// // document.all[10].textContent = 'Hello';    
// // console.dir(document);
// // console.log(document.images);    
// // console.log(document.getElementById('header-title'));
// // const headerTitle = document.getElementById('header-title');
// // const header = document.getElementById('main-header');
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = 'Good Bye';
// // Inner Text see also the styling
// // headerTitle.innerHTML = '<h3>Hello</h3>'
// // headerTitle.style.borderBottom = 'solid 3px #000';
// // header.style.borderBottom = 'solid 3px #000';

// // Getting Element By Class Name
// // const items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].textContent = 'Hello 2';
// // items[1].style.fontWeight = 'bold';

// // Gives an Error
// // items.style.backgroundColor = 'yellow';

// // for (let i = 0; i < items.length; i++) {
// //     items[i].style.backgoundColor = '#f4f4f4';  
// // }

// // // Get Element By Tag Name
// // const li = document.getElementsByTagName('li');
// // // console.log(items);
// // // console.log(li[1]);
// // li[1].textContent = 'Hello 2';
// // li[1].style.fontWeight = 'bold';

// // // Gives an Error
// // // li.style.backgroundColor = 'yellow';

// // for (let i = 0; i < items.length; i++) {
// //     li[i].style.backgoundColor = '#f4f4f4';  
// // }

// // // Query Selector
// // var header = document.querySelector('#main-header');
// // // header.style.borderBottom = 'solid 3px red';
// // var input = document.querySelector('input');
// // // input.value = 'Hello World';
// // var submit = document.querySelector('input[type="submit"]');
// // // submit.value = 'Send';
// // var item = document.querySelector('.list-group-item');
// // // item.style.color = 'red';
// // var lastItem = document.querySelector('.list-group-item:last-child');
// // // lastItem.style.color = 'yellow';
// // var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// // // secondItem.style.color = 'coral'

// // QuerySelectorAll
// // var titles = document.querySelectorAll('.title');
// // // console.log(titles);
// // // console.log(titles[0]);
// // var odd = document.querySelectorAll('li:nth-child(odd)');
// // var even = document.querySelectorAll('li:nth-child(even');
// // for (var i = 0; i < odd.length; i++) {
// //     odd[i].style.backgroundColor = '#f4f4f4';
// //     even[i].style.backgroundColor = '#ccc'
// // }

// /****************************************************************************************************** */



// // // parentNode  // 
// var itemList = document.querySelector('#items');
// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.parentNode.parentNode.parentNode);



// // // Parent Elements   // 
// // console.log(itemList.parentElement);
// // itemList.parentElement.style.backgroundColor = '#f4f4f4';
// // console.log(itemList.parentElement.parentElement);



// // childNodes  // 
// // console.log(itemList.childNodes);


// // childrens //
// // console.log(itemList.childern);
// // console.log(itemList.children[1]);

// // First Child //
// // console.log(itemList.firstChild);

// // First Element Child
// // console.log(itemList.firstElementChild);


// // Last  Child
// // console.log(itemList.lastChild);

// // Last Element Child
// // console.log(itemList.lastElementChild);


// // Siblings  // 

// // nextSibling
// // console.log(itemList.nextSibling);

// // nextElementSibling
// // console.log(itemList.nextElementSibling);

// // // prevoiousSibling
// // // console.log(itemList.previousSibling);

// // // previousElementSibling
// // // console.log(itemList.previousElementSibling);


// // // Creating Elements in Dom
// // // Create a div

// // var newDiv = document.createElement('div');

// // console.log(newDiv);

// // // Add Class
// // newDiv.className = 'hello';

// // // Add id
// // newDiv.id = 'hello 1';

// // // add attribute
// // newDiv.setAttribute('title', 'Hello Div');

// // // Adding Content
// // // Creating Text node
// // var newDivText = document.createTextNode('Hello World');

// // // Add Text to div
// // newDiv.appendChild(newDivText);

// // // Insert into Dom

// // var container = document.querySelector('header .container');
// // var h1 = document.querySelector('header h1');

// // container.insertBefore(newDiv, h1);
// // // newDiv.style.font = '30px';




// /***************************************************************************************** */

// // Events //
// // Adding Event Listener


// // var button = document.getElementById('button').addEventListener('click', buttonClick);
// // function buttonClick(e) {
//     // console.log('Button Clicked');
//     // document.getElementById('header-title').textContent = 'changed';
//     // document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id + '</h3>';
//     // console.log(e.type);
//     // Position of Mouse
//     // console.log(e.clientX);
//     // console.log(e.clientY);
    
//     // console.log(e.offsetY);
//     // console.log(e.offsetX);

//     // console.log(e.altKey);
//     // console.log(e.crtlKey);
//     // console.log(e.shiftKey);
// // }

// // buttonClick();


// // Mouse events //
// var button = document.getElementById('button');
// var box = document.getElementById('box');
// // button.addEventListener('click', runEvent);
// // button.addEventListener('dblclick', runEvent);

// // button.addEventListener('mousedown', runEvent);
// // button.addEventListener('mouseup', runEvent);


// //box.addEventListener('mouseenter', runEvent);
// // box.addEventListener('mouseleave', runEvent);

// // box.addEventListener('mousemove', runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// // itemInput.addEventListener('keydown', runEvent);
// // itemInput.addEventListener('keypress', runEvent);

// // itemInput.addEventListener('focus', runEvent);
// // itemInput.addEventListener('blur', runEvent);

// // itemInput.addEventListener('cut', runEvent);
// // itemInput.addEventListener('paste', runEvent);

// // itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// form.addEventListener('submit', runEvent);
// function runEvent(e) {
//     e.preventDefault();
//     console.log("Event Type: " + e.type);
//     // output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';
//     // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
//     // document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
//     // console.log(e.target.value);
//     // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';
//     // document.body.style.display = 'none';
//     // console.log(e.target.value);

// }

/************************************************************************************************************************* */