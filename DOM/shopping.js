var lst = document.querySelector('ul');
var btn = document.querySelector('button');
var inp = document.querySelector('input');

btn.addEventListener('click',addItem);
function addItem(){
	var itemInput = inp.value;
	inp.value = '';
	var itemList = document.createElement('li');
	var itemButton = document.createElement('button');
	var itemSpan = document.createElement('span');
	
	itemList.appendChild(itemSpan);
	itemList.appendChild(itemButton);
	itemSpan.textContent = itemInput;
	itemButton.textContent = 'Delete';
	lst.appendChild(itemList);
	itemButton.addEventListener('click', function () {lst.removeChild(itemList);});
	inp.focus();
};

