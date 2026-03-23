function send() {

    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var type = document.getElementById("type").value;
    var problem = document.getElementById("problem").value.trim();

    if (name === "" || phone === "" || type === "" || problem === "") {

        alert("Vă rugăm să completați toate câmpurile.");

        return;

    }

    var text = "Salut! Am nevoie de suport IT.%0A%0A" +
        "Nume: " + encodeURIComponent(name) +
        "%0ATelefon: " + encodeURIComponent(phone) +
        "%0ATip problemă: " + encodeURIComponent(type) +
        "%0AProblema: " + encodeURIComponent(problem);

    var url = "https://wa.me/37369543039?text=" + text;

    window.open(url, "_blank");

}