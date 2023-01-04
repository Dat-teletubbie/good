var acc = document.getElementsByClassName("acc_hone")
for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("acc.active")
        var thenxtsbling = this.nextElementSibling
        if (thenxtsbling.style.display === "block") {
            thenxtsbling.style.display = "none"
        }
        else {
            thenxtsbling.style.display = "block"


        }
    })
}
