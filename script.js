function changeNum() {
  const newNum = document.getElementById("card").value;
  const digitsOnly = newNum.replace(/\D/g, "");
  if (digitsOnly) {
    const spaceBtw4char = digitsOnly.match(/.{1,4}/g);
    document.getElementById("cardNum").innerHTML = spaceBtw4char.join(" ");
  }
}
function replaceName() {
  const newName = document.getElementById("myselect").value;
  document.getElementById("cardName").innerHTML = newName;
}
function cvcchange() {
  const newcv = document.getElementById("newcvc").value;
  document.getElementById("changeCvc").innerHTML = newcv;
}
function newmonth() {
  const month = document.getElementById("month").value;
  document.getElementById("mm").innerHTML = month;
}
function newyear() {
  const year = document.getElementById("year").value;
  document.getElementById("yy").innerHTML = year;
}

const nameValidation = function () {
  const nameErr = document.getElementById("nameError");
  nameErr.innerHTML = "";
  const cardName = document.getElementById("myselect");
  cardName.style.borderColor = "hsl(270, 3%, 87%)";
  if (cardName.value.trim() == "") {
    nameErr.innerHTML = "field cannot be empty";
    cardName.style.borderColor = "red";
    return false;
  }
  return true;
};

const dateValidation = function () {
  const month = document.getElementById("month");
  const year = document.getElementById("year");
  const dateErr = document.getElementById("dateError");
  dateErr.innerHTML = "";
  month.style.borderColor = "hsl(270, 3%, 87%)";
  year.style.borderColor = "hsl(270, 3%, 87%)";

  const x = month.value.trim(); //x = month input
  const y = year.value.trim(); //y = year input

  const throwErr = function (yam) {
    dateErr.innerHTML = "invalid Date input";
    if (yam == x) month.style.borderColor = "red";
    if (yam == y) year.style.borderColor = "red";

    return false;
  };
  //check month validity
  if (!(x >= 1 && x <= 12) || x == "") {
    throwErr(x);
  }
  //check year validity
  // const currentYear = new Date().getFullYear();
  
  else if (y == "") {
    throwErr(y);
    } else return true
  };
  
const cvvValidation = function () {
  const cvvErr = document.getElementById("cvvError");
  cvvErr.innerHTML = "";
  const cvv = document.getElementById("newcvc");
  cvv.style.borderColor = "hsl(270, 3%, 87%)";
  if (cvv.value.trim() == "") {
    cvvErr.innerHTML = "fied cannot be empty";
    cvv.style.borderColor = "red";
    return false;
  }
  return true;
};

const numValidation = function () {
  const numErr = document.getElementById("numError");
  numErr.innerHTML = "";
  const cardNum = document.getElementById("card");
  cardNum.style.bordercolor = "hsl(270, 3%, 87%)";

  if (cardNum.value.length != 16) {
    numErr.innerHTML = "Must be 16 Digits";
    cardNum.style.borderColor = "red";
    return false;
  }
  for (let i = 0; i < cardNum.value.length; i++) {
    const char = cardNum.value[i];
    if (/^[a-z$]$/i.test(char)) {
      numErr.innerHTML = "Wrong format, Numbers Only";
      cardNum.style.bordercolor = "hsl(270, 3%, 87%)";
      return false;
    }
  }
  return true;
};

const confirmBtn = document.getElementById("submit");
confirmBtn.addEventListener("click", validateForm)

function validateForm(e) {
  e.preventDefault();
  if (
    (nameValidation() == true) &
    (numValidation() == true) &
    (dateValidation() == true) &
    (cvvValidation() == true)
  ) {
    popup();
    return true;
  }

  return false;
}

const popup = () => {
  document.getElementById("form").style.visibility = "hidden";
  document.getElementById("pop-up").style.display = "block";
}

const continueBtn = document.querySelector("#continue");
// console.log(continueBtn)
continueBtn.addEventListener("click", () => {
  document.getElementById("pop-up").style.display = "none";
  document.getElementById("form").style.visibility = "visible";

  location.reload()
})
