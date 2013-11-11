(function ($) {
    $.fn.treeView = function () {
        var $element = $(this);
        $element.find("li>ul").hide();

        $element.on("click", "a", function (ev) {
            var child = $(this).children();

            if (child.length > 0) {
                $(this).prevAll().children().hide();
                $(this).nextAll().children().hide();

                child[0].style.display === "none" ? child.show() : child.hide();
            }
            ev.stopPropagation();
        });
    }
}(jQuery));