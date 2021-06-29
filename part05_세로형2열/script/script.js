/* eslint-disable */


$(function () {
    $("li.mainLi, li.mainLi a").mouseover(function () {
        $(this).children("ul.subMenu").stop().fadeIn(300);
    });

    $("li.mainLi").mouseout(function () {
        $(this).children("ul.subMenu").stop().hide();
    });
});
