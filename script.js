// To do list 

let input = document.querySelector('#input');
let add = document.querySelector('#add');
let addnew1 = document.querySelector('.edit');

add.addEventListener('click', (event) => {
    event.preventDefault();
    addlist();
});

function addlist(){
    let text = input.value.trim();
    if (text !== '') {
        let addnew = document.createElement('div');
        addnew.className = 'inside';

        let ol = document.createElement('ol');
        ol.textContent = text;

        let del = document.createElement('button');
        del.className = 'btn-hover';
        del.innerHTML = '<i class="fa-solid fa-trash" id="Delete"></i></i>';
        del.addEventListener('click',()=>{
            addnew.remove();
        })

        let edit = document.createElement('button');
        edit.className = 'btn-hover';
        edit.id = 'Edit';
        edit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
        edit.style.borderTopRightRadius = '1rem';
        edit.style.borderBottomRightRadius = '1rem';
        edit.addEventListener('click',()=>{
            let edit = prompt('Enter The edit')
            ol.innerText = edit.trim('');
        });

        addnew.appendChild(ol);
        addnew.appendChild(del);
        addnew.appendChild(edit);

        addnew1.append(addnew);
        console.log(addnew);
        input.value = '';
    }
    else{
        alert('Please enter a task');
    }
}
