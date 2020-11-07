export default function tableControl() {
    let $table = document.querySelector(".table")

    let data = [
        {
            firstName: 'Ashton',
            lastName: 'Kutcher',
            age: 40
        }, {
            firstName: 'Bradley',
            lastName: 'Pitt',
            age: 54
        }, {
            firstName: 'Hannah',
            lastName: 'Dakota',
            age: 24
        }
     ];

    function tableDraw(mass) {
    
        let $table = document.querySelector(".table")
    
        for(let el of mass) {
            $table.innerHTML += `<tr>
            <td>${el.firstName}</td>
            <td>${el.lastName}</td>
            <td>${el.age}</td>
            </tr>`;
        } 
    }

    function addRow() {
        let user = {
            firstName: document.querySelector('.firstName').value,
            lastName: document.querySelector('.lastName').value,
            age: document.querySelector('.age').value
        }

        data[data.length] = user;

        $table.innerHTML += `<tr>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.age}</td>
        </tr>`;
       
    }

    function deleteRow() {
        data.pop();
        $table.innerHTML = "";
        for(let el of data) {
            $table.innerHTML += `<tr>
            <td>${el.firstName}</td>
            <td>${el.lastName}</td>
            <td>${el.age}</td>
            </tr>`;
        } 
    }

    function toggle(event){
        if(event === 'draw'){
            tableDraw(data);
        }

        if(event === 'addRow'){
            addRow();
        }

        if(event === 'deleteRow') {
            deleteRow();
        }
    }
    return {
        toggle: toggle
    }

}


