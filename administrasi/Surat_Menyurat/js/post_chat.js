function PostSignUp(id, isisurat, subject) {
  var myHeaders = new Headers();
  myHeaders.append("Login", "GEGE");
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id":parseInt(id),
    "isisurat": isisurat,
    "subject": subject,


  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://goharis-baru.herokuapp.com/surat/insert", requestOptions)
    .then(response => response.text())
    .then(result => {
      GetResponse(result);
      document.getElementById("formsignup").style.display = 'none';
    })
    .catch(error => console.log('error', error));
}

function PushButton() {
  var id = document.getElementById("id").value;
  var isisurat = document.getElementById("isisurat").value;
  var subject = document.getElementById("subject").value;
  PostSignUp(id,isisurat, subject);
}

function GetResponse(result) {
  document.getElementById("formsignup").innerHTML = result;
  location.reload();
}
