function Data() {
  this.users = ["elements", "u1", "u2", "u3", "u4", "u5"];
  this.elements = ["Name", "Age", "DOB", "Email", "Company"];
  this.u1 = ["Prateek Singh", "22", "1/2/2000", "pk@gmail.com", "Gemini"];
  this.u2 = ["Raghav Agarwal", "22", "2/2/2000", "ag@gmail.com", "JCH"];
  this.u3 = ["Shalabh Chaudhary", "22", "3/2/2000", "sc@gmail.com", "Pharma"];
  this.u4 = ["Abhay pratap Singh", "22", "4/2/2000", "ap@gmail.com", "Law"];
  this.u5 = ["Abhainav Gaur", "22", "5/2/2000", "aj@gmail.com", "Freelancer"];
}

function createTable() {
  let x = document.createElement("table");
  x.setAttribute("id", "demo");
  x.setAttribute("style", " border: 2px solid black; padding: 5px; border-radius: 25px;");
  document.body.appendChild(x);
  const data = new Data();


  for (let i = 0; i < data.users.length; i++) {
    let row = document.createElement("tr");
    row.setAttribute("style", "border: 1px solid black");

    for (let j = 0; j < data.elements.length; j++) {
      let d = data.users[i];
      let column = document.createElement("td");
      column.setAttribute("style", "border: 2px solid black;padding: 5px");

      if (d == "elements") {
        column.setAttribute(
          "style",
          "border: 2px solid black ; font-weight: bold ; padding: 5px"
        );
      }
      let text = document.createTextNode(data[d][j]);
      column.appendChild(text);
      row.appendChild(column);
    }

    x.appendChild(row);
  }
}

createTable();
