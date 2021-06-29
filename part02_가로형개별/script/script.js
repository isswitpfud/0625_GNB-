/* eslint-disable */

/*
$(document).ready(function(){  });의 단축표현
:
$(function(){
});
*/

$(function(){

    //서브메뉴 펼치기
    $("li.mainLi").mouseover(function(){   //1차 기능
        $(this).children("ul.subMenu").stop().slideDown(500);

        // $("ul.subMenu").stop().slideDown(700);   가로전체형 추가기능 코드

    });

    //서브메뉴 올리기
    $("li.mainLi").mouseout(function(){
       $(this).children("ul.subMenu").stop().slideUp(200);

        // $("ul.subMenu").stop().slideUp(300); 가로전체형코드
    });
    /* .stop() 메서드는 메모리 유지기능을 소멸시켜
    즉시 사용자 이벤트가 종료되는 기능또한 멈취게 함 */

});


















