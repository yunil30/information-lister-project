const btnSubmit = document.getElementById('btnSubmit');
const listInfo = document.getElementById('listInfo');
const msgError1 = document.getElementById('warning1');
const msgError2 = document.getElementById('warning2');
const msgError3 = document.getElementById('warning3');

btnSubmit.addEventListener('click', submitInfo);
listInfo.addEventListener('click', deleteInfo);

function submitInfo(e){
    e.preventDefault();
    const inputFname = document.getElementById('inputFname').value;
    const inputLname = document.getElementById('inputLname').value;
    const inputAge = document.getElementById('inputAge').value;
    const infos = document.createElement('div');
    infos.id = 'infos';
    const del = document.createElement('button');
    del.className = 'delInfo';
    del.id = 'delInfo';
    del.innerText = 'x';
    if (inputFname == '' || inputLname == '' || inputAge == '') {
        alert('The following information must be filled out!');
        msgError1.classList.add('warning');
        msgError2.classList.add('warning');
        msgError3.classList.add('warning');
        msgError1.innerHTML = 'Please enter your Firstname!';
        msgError2.innerHTML = 'Please enter your Lastname!';
        msgError3.innerHTML = 'Please enter your Age!';
        setTimeout(() => msgError1.remove(), 5000);
        setTimeout(() => msgError2.remove(), 5000);
        setTimeout(() => msgError3.remove(), 5000);
    } else {
        infos.innerHTML = 'Firstname : ' + inputFname + '<br>' + 'Lastname : ' + inputLname + '<br>' + 'Age : ' + inputAge;
        listInfo.appendChild(infos);
        infos.appendChild(del);
        document.getElementById('inputFname').value = '';
        document.getElementById('inputLname').value = '';
        document.getElementById('inputAge').value = '';
    }        
}

function deleteInfo(e){
    e.preventDefault(); 
    if (e.target.classList.contains('delInfo')) {
        if (confirm('Are you sure, you want to delete this information?')) {
            const infos = e.target.parentElement;
            listInfo.removeChild(infos);
        }     
    }
}
