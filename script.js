let $modal = document.querySelector('.modal')

let $open = document.querySelector('.add-user')

$open.addEventListener('click', function() {
            $modal.classList.add('open')
})

let $close = document.querySelectorAll('.close')

let $input = document.querySelectorAll('.popap-form input')

for (let element of $close) {
element.addEventListener('click', function() {
        $modal.classList.remove('open');
        for (let el of $input) {
            el.value = '';
        }
})
}