// I took help from chatgpt
// Here is the chat link: https://chatgpt.com/c/67d43e20-da84-8004-b093-6a823705e4c9
document.getElementById('classForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('className').value;
    const people = document.getElementById('numPeople').value;
    const desc = document.getElementById('description').value;
    const table = document.getElementById('classTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.innerHTML = `<td>${name}</td><td>${people}</td><td>${desc}</td>
        <td><button onclick="moveUp(this)">Move Up!</button>
         <button onclick="moveDown(this)">Move Down!</button> 
         <button onclick="logRowInfo(this)">Console Log</button>
         <button onclick="deleteRow(this)">Delete Row</button>
        </td>`;
    
    newRow.addEventListener('mouseover', function() {
        newRow.classList.add('highlight');
    });
    
    newRow.addEventListener('mouseout', function() {
        newRow.classList.remove('highlight');
    });
});

function moveUp(button) {
    const row = button.parentElement.parentElement;
    if (row.previousElementSibling) {
        row.parentElement.insertBefore(row, row.previousElementSibling);
    }
}

function moveDown(button) {
    const row = button.parentElement.parentElement;
    if (row.nextElementSibling) {
        row.parentElement.insertBefore(row.nextElementSibling, row);
    }
}

function logRowInfo(button) {
    const row = button.parentElement.parentElement;
    const cells = row.getElementsByTagName('td');
    console.log(`Class: ${cells[0].innerText}, People: ${cells[1].innerText}, Description: ${cells[2].innerText}`);
}

function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}
