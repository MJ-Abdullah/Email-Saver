const myForm = document.querySelector('#main-form');
const username = document.querySelector('#name');
const useremail = document.querySelector('#email');
const btn = document.querySelector('.btn');
const displayInfo = document.querySelector('#info');
const removeBtn = document.querySelector('.rmw-btn');

// Adding an Event function to a selected element
// Method I
/*
btn.addEventListener('click', (submit) => {

    submit.preventDefault();
    const allName = username.value;
    const allEmail = useremail.value;
    console.log(allName);
    console.log(allEmail);
    displayInfo.classList.add ('filler');
    displayInfo.innerHTML = `<ul><li>${allName}</li><li>${allEmail}</li></ul>`;
});
*/

// Method II

myForm.addEventListener('submit', onSubmit);

function onSubmit(submitBtn) {
    submitBtn.preventDefault();
    //const allName = username.value;
    //const allEmail = useremail.value;
    displayInfo.classList.add ('filler');

    //We can add classes from css in the below methods.

    //Method I
    //displayInfo.innerHTML = `<ul class="sample-list"><li class="list-items">${username.value}</li><li class="list-items">${useremail.value}</li></ul>`;

    //Method II
    /*
    displayInfo.innerHTML = `<ul><li>${allName}</li><li>${allEmail}</li></ul>`;
    const infoUl = document.querySelector('ul');
    const infoList = document.querySelectorAll('li');
    infoUl.classList.add ('sample-list');
    infoList.forEach((items) => {

        items.classList.add ('list-items');
    });
    */

    //Method III
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    ul.classList.add ('sample-list');
    li.classList.add ('list-items');

    li.appendChild(document.createTextNode(`${username.value}: ${useremail.value}`));
    ul.appendChild(li);
    displayInfo.insertBefore(ul, removeBtn);

    //Clear Fields
    username.value = '';
    useremail.value = '';


    // Removing items via remove button
    // removeBtn.style.display = 'block';

    // removeBtn.addEventListener('click', onClick);
    // function onClick(rmwBtn) {
    //     ul.lastElementChild.remove();
    // }


    const allList = document.querySelectorAll('.list-items');
    
    if (allList.length >= 1) {
        removeBtn.style.display = 'block';

        removeBtn.addEventListener('click', onClick);
        function onClick() {
            ul.firstElementChild.remove();

            if (allList.length = 1) {

                // displayInfo.style.opacity = 0;
                displayInfo.classList.remove('filler');
                removeBtn.style.display = 'none';
            }
        }
        
    }
}

