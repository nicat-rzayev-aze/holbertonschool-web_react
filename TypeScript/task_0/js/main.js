var student1 = {
    firstName: "Nijat",
    lastName: "Sigmaaddin",
    age: 26,
    location: "Sigmaistan"
};
var student2 = {
    firstName: "Ali",
    lastName: "Shia",
    age: 25,
    location: "Iran"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
document.body.appendChild(table);
var thead = document.createElement('thead');
thead.innerHTML = '<tr><th>firstName</th><th>location</th></tr>';
table.appendChild(thead);
var tbody = document.createElement('tbody');
table.appendChild(tbody);
for (var i = 0; i < studentsList.length; i++) {
    var row = document.createElement('tr');
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    th1.innerHTML = studentsList[i].firstName;
    th2.innerHTML = studentsList[i].location;
    row.appendChild(th1);
    row.appendChild(th2);
    tbody.appendChild(row);
}
