function openNav() {
    $("#sidebar").css("width", "250px");
    $("#notside").css("margin-left", "250px");
}

function closeNav() {
    $("#sidebar").css("width", "0");
    $("#notside").css("margin-left", "0");
}

function scroll(slide) {
    console.log(slide);
    $.fn.fullpage.moveTo(slide + 1);
}