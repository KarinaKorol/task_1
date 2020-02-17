$(".tab-list").on("click", ".tab", function(e) {
    e.preventDefault();

    $(".tab").removeClass("move");
    $(".tab-content").removeClass("show");
    $(this).addClass("move");
    $($(this).attr("href")).addClass("show");
});

