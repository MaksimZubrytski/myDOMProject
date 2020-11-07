import modalControl from './modal.js';
import tableControl from './table.js';

const modal = modalControl();

let $open = document.querySelector('.add-user');
let $close = document.querySelectorAll('.close');

$open.addEventListener('click', function(){
	modal.toggle('open');
});

for(let $btn of $close){
	$btn.addEventListener('click', function(){
		modal.toggle('close');
	});
}



const table = tableControl();

table.toggle('draw');

let $ok = document.querySelector('.ok');

let $table = document.querySelector(".table")

let $removeUser = document.querySelector(".remove-user")

$ok.addEventListener('click', function() {
	
	table.toggle('addRow');
	modal.toggle('close');
})


$removeUser.addEventListener('click', function(){

	table.toggle('deleteRow');
	
})