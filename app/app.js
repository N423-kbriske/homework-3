function initListeners() {
  $("#submit").click((e) => {
    e.preventDefault();

    let allUsers = JSON.parse(localStorage.getItem("Person"));

    // SET INPUT TO VARIABLES
    // first name
    let fn = $("#firstName").val();

    // last name
    let ln = $("#lastName").val();

    // email
    let stdntEmail = $("#studentEmail").val();

    // phone
    let stdntPhone = $("#studentPhone").val();

    // age
    let stdntAge = $("#studentAge").val();

    // classes
    let stdntClass1 = $("#studentClass1").val();
    let stdntClass2 = $("#studentClass2").val();
    let stdntClass3 = $("#studentClass3").val();

    // option pulls everything into an array with spaces
    // let stdntClass = [$("#studentClass1").val() + " " + $("#studentClass2").val() + " " + $("#studentClass3").val()];

    // // option for user to enter the classes as a list
    // const classExplode = class1.split(", ");
    // console.log("EXPLODE " + classExplode);

    // TOOL: log all info to ensure retrieval
    // console.log(fn + " " + ln + " " + stdntEmail + " " + stdntPhone + " " + stdntAge + " " + class1 + " " + class2 + " " + class3);

    // if both inputs are not empty, then go ahead and return both, else send an alert to fill everything in
    if (
      fn != "" &&
      ln != "" &&
      stdntEmail != "" &&
      stdntPhone != "" &&
      stdntAge != "" &&
      stdntClass1 != ""
    ) {
      let userObject = {
        fname: fn,
        lname: ln,
        age: stdntAge,
        phone: stdntPhone,
        email: stdntEmail,
        classes: [stdntClass1, stdntClass2, stdntClass3],
      };

      // push the user into the array of user objects
      allUsers.push(userObject);
      console.log(allUsers);
      localStorage.setItem("Person", JSON.stringify(allUsers));
      console.log(localStorage.getItem("Person"));

      // clear all input fields after retrieval
      $("#firstName").val("");
      $("#lastName").val("");
      $("#studentAge").val("");
      $("#studentPhone").val("");
      $("#studentEmail").val("");
      $("#studentClass1").val("");
      $("#studentClass2").val("");
      $("#studentClass3").val("");
    } else {
      alert("Enter something in all fields containing *, please");
    }
  });

  // $("#classSubmit").click((e) => {
  //   e.preventDefault();
  //   $("#test").append(`<label type="text" for="classes">Classes</label>
  //   <input type="text" id="studentClasses" />`);
  // })

  // $("#classSubmit2").click((e) => {
  //   e.preventDefault();
  //   $("#test").append(``);
  // })

  // set phone number to dashed format
  let pn = document.querySelector("#studentPhone");
  pn.addEventListener("keyup", function (e) {
    if (
      e.key != "Backspace" &&
      (pn.value.length === 3 || pn.value.length === 7)
    ) {
      pn.value += "-";
    }
  });

  // get all names
  $("#getInfo").click((e) => {
    e.preventDefault();

    // clear the area
    $("#app").html("");

    // get all names
    let allUsers = JSON.parse(localStorage.getItem("Person"));
    console.log(allUsers);

    $.each(allUsers, function (idx, user) {
      console.log(
        user.fname +
          " " +
          user.lname +
          " " +
          user.age +
          " " +
          user.phone +
          " " +
          user.email +
          " " +
          user.classes
      );
      $("#app").append(
        `<div class="data-container"> 
          <div id="r1">${user.fname} ${user.lname}</div>
          <div id="r2">${user.email}</div>
          <div id="r3">${user.phone}</div>
          <div id="r4">${user.age}</div>
          <div id="classes">${user.classes}</div>
        </div>`
      );
    });
  });
}

function initSite() {
  if (localStorage) {
    let people = localStorage.getItem("Person");
    if (people) {
      let persons = JSON.parse(localStorage.getItem("Person"));
      console.log("persons");
    } else {
      localStorage.setItem("Person", "[]");
      alert("No people added yet");
    }
  } else {
    console.log("No localStorage");
  }
}

$(document).ready(function () {
  initListeners();
  initSite();
});
