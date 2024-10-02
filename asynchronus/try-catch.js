function checkAge() {
  const ageInput = document.getElementById("age").value;
  const error = document.getElementById("error");

  try {
    const ageValue = parseInt(ageInput);
    if (isNaN(ageValue)) {
      throw "Please Enter a Number";
    } else if (ageValue < 18) {
      throw "kacchabaccha not allowed";
    }
    error.innerText = "";
  } catch (err) {
    console.log("ERROR: ", err);
    error.innerText = "ERROR:" + err;
  } finally {
    console.log("All Done");
  }
}
