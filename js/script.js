$(document).ready(function () {
    var jbOffset = $('header').offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $(window).scroll(function () {
        if ($(document).scrollTop() > 2) {//여기 지정된 길이 이후부터 적용됩니다
            $('header').addClass("header_fixed");
            $('.logo').addClass("active");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
        else {
            $('header').removeClass("header_fixed");
            $('.logo').removeClass("active");
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
    });


    $("#slide-open").click(function () {
        if ($("#burgur").hasClass("on")) {
            $("#burgur").removeClass("on");
            $("#slide").removeClass("on");
        } else {
            $("#burgur").addClass("on");
            $("#slide").addClass("on");
        }
    });
    $("#slide ul li a").click(function () {
        if ($("#burgur").hasClass("on")) {
            $("#burgur").removeClass("on");
            $("#slide").removeClass("on");
        } else {
            $("#burgur").addClass("on");
            $("#slide").addClass("on");
        }
    });


});

