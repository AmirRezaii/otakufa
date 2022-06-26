// onclick functions for opening and closing the nav menu
function set_open() {
    $(".menu").addClass("menu-open")
    $(".menu-btn").hide()
}
function set_closed() {
    $(".menu").removeClass("menu-open")
    $(".menu-btn").show()
}

// pagination logic for slider
let SWIDTH = ($(window).width() > 650)? -$(window).width()*60/100 + 40 : -$(window).width() + 40 
$(window).resize(() => {
    SWIDTH = ($(window).width() > 650)? -$(window).width()*60/100 + 40 : -$(window).width() + 40
})

$(".slider").scroll(() => {
    let e = Math.round($(".slider").scrollLeft() / SWIDTH)

    $(".page-indicator-active").removeClass("page-indicator-active")
    $("." + e).addClass("page-indicator-active")
})

// slider left and right buttons
$(".left-btn").click(() => {
    $(".slider").scrollLeft($(".slider").scrollLeft() + SWIDTH)
})
$(".right-btn").click(() => {
    $(".slider").scrollLeft($(".slider").scrollLeft()-SWIDTH)
})

function page_btn(e) {
    $(".slider").scrollLeft(SWIDTH*e)
}

