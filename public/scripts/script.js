// onclick functions for opening and closing the nav menu
function set_open() {
    $(".menu").addClass("menu-open")
    $(".menu-btn").hide()
}
function set_closed() {
    $(".menu").removeClass("menu-open")
    $(".menu-btn").show()
}