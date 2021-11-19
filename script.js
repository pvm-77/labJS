
function setDateRange() {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd;

    var minDate = new Date(today);
    minDate.setFullYear(minDate.getFullYear() - 5);
    var minDateString = minDate.getFullYear() + '-' + (minDate.getMonth() + 1) + '-' + minDate.getDate();

    document.getElementById("date").setAttribute("max", today);
    document.getElementById("date").setAttribute("min", minDateString);

    document.getElementById("date").addEventListener("change", function () {
        console.log(this.value);
    }
    );
}
// call setDateRange function
setDateRange();













