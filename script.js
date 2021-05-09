function onFormSubmit() {
var formData = readFormData();
insertNewRecord(formData);
resetForm()
}

function readFormData() {
    var formData = {};
    
    formData["id"] = Date.now().toString()
    formData["firstName"] = document.getElementById("Firstname").value;
    formData["lastName"] = document.getElementById("Lastname").value;
    formData["age"] = document.getElementById("Age").value;
    formData["currentLevel"] = document.getElementById("Currentlevel").value;
    formData["club"] = document.getElementById("Favoriteclub" ).value;

    formData = JSON.stringify(formData);

    console.log(formData);

    return formData;
    
}

function insertNewRecord(data){
    var table = document.getElementById("display").getElementsByTagName("tbody")[0];

    var newRow = table.insertRow(table.length);

    var cell1 =newRow.insertCell(0)
    cell1.innerHTML = data.id

    var cell2 =newRow.insertCell(1)
    cell2.innerHTML = data.firstName

    var cell3 =newRow.insertCell(2);
    cell3.innerHTML = data.lastName

    var cell4 =newRow.insertCell(3);
    cell4.innerHTML = data.age

    var cell5 =newRow.insertCell(4);
    cell5.innerHTML = data.currentLevel

    var cell6 =newRow.insertCell(5);
    cell6.innerHTML = data.club

    var cell7 =newRow.insertCell(6);
    cell7.innerHTML = `<button onClick="onDelete(this)" type="button" class="btn-outline-dark btn-x-sm">Delete</button>`
}

function resetForm() {
    document.getElementById("Firstname").value = "";
    document.getElementById("Lastname").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Currentlevel").value = "";
    document.getElementById("Favoriteclub" ).value = "";

}

function onDelete(td) {
    if (prompt('Are you sure to delete this record ?')) {
        var row = td.parentElement.parentElement;
        document.getElementById("display").deleteRow(row.rowIndex);
        resetForm();
}
}













