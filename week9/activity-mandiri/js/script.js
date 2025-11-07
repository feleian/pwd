//<![CDATA[
function fn_ValForm() {
  var sMsg = "";
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Regular expression untuk validasi email
  var emailPattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

  if (name == "") {
    sMsg += "\n* Anda belum mengisikan nama";
  }

  if (email == "") {
    sMsg += "\n* Anda belum mengisikan email";
  } else if (!emailPattern.test(email)) {
    sMsg += "\n* Format email tidak valid";
  }

  if (message == "") {
    sMsg += "\n* Anda belum mengisikan pesan";
  }

  if (sMsg != "") {
    alert("Peringatan:" + sMsg);
    return false; // Hentikan pengiriman form
  } else {
    alert("Form berhasil dikirim!");
    return true;
  }
}
//]]>
