
//ejercicio1
$('input[name="firstname"]:eq(0)').val("clau");

//ejercicio2
$('select[name="fav_day"]:eq(0)').val("Monday");

//ejercicio3
$("label").text("Tu nombre:");

//ejercicio4
var fav_day = $('select[name="fav_day"]');

//ejercicio5
$('input[name="sex"]').last().prop("checked", true)

//ejercicio6

$("form:eq(0)").prop("name", "personal_info");

//ejercicio7
$("form:eq(1)").prop("name", "job_info");
