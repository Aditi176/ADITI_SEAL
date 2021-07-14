function check_validation() {
  var mobilenumber = document.getElementById("number").value;
  var regexp1 = /^[0,7,9,6][0-9]{9}$/;

  var name = document.getElementById("name").value;

  var email = document.getElementById("email").value;
  var regexp2 =
    /^([a-z A-Z 0-9 \. -]+)@([a-z A-Z 0-9 -]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  var comment = document.getElementById("comment").value;

  if (regexp1.test(mobilenumber) && name && regexp2.test(email) && comment) {
    alert("Message sent !");
  } else {
    alert("Please fill the details correctly !");
  }
}
