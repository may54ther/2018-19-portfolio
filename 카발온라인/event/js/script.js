$(document).ready(function () {
    var ovh = $(document).height();
    var bool1 = true;
    var bool2 = true;
    var bool3 = true;
    var chgTxt = '';

    /* 초기화 */
    $('html, body').animate({ scrollTop: 0 }, '500');
    $('a').click(function(e){ e.preventDefault(); });
    $('.overlay').height(ovh);

    if ($(window).width() > 1903) {
        $('#content .sec_main').css("background-size", "cover");
    }

    $(window).resize(function () {
        ovh = $(document).height();

        $('.overlay').height(ovh);

        if ($(window).width() > 1903) {
            $('#content .sec_main').css("background-size", "cover");
        } else {
            $('#content .sec_main').css("background-size", "unset");
        }
    });

    /* animation */
    $('.sec_main .m_txt1').animate({'left' : '50%', 'opacity':'1', 'filter':'alpha(opacity:100)'}, 800);
    $('.sec_main .m_txt2').delay(1000).animate({'left' : '50%', 'opacity':'1', 'filter':'alpha(opacity:100)'}, 800);
    $('.sec_main .m_txt3').delay(1400).animate({'opacity':'1', 'filter':'alpha(opacity:100)'}, 800);

    /* 점핑 캐릭터 신청 */
    $('.sel_server').click(function () {
        if (bool1 == true) {
            $('.serverList').show();
            bool1 = false;

            $('.serverList li').click(function () {
                chgTxt = $(this).children('a').text();

                $('.sel_server').text(chgTxt);
                $('.serverList').hide();
                bool1 = true;
            });

        } else {
            $('.serverList').hide();
            bool1 = true;
        }
    });

    $('.sel_class').click(function () {
        if (bool2 == true) {
            $('.classList').show();
            bool2 = false;

            $('.classList li').click(function () {
                chgTxt = $(this).children('a').text();

                $('.sel_class').text(chgTxt);
                $('.classList').hide();
                bool2 = true;
            });
        } else {
            $('.classList').hide();
            bool2 = true;
        }
    });

    $('.btn_jumping').click(function () {
        var sTxt = $('.sel_server').text();
        var cTxt = $('.sel_class').text();
        var conf;

        if (sTxt == '서버 선택' || cTxt == '클래스 선택') {
            alert('서버와 클래스를 선택해주세요.');
        } else {
            conf = confirm(sTxt + ' 서버의 ' + cTxt + ' 클래스로 선택하시겠습니까?');

            if (conf == true) {
                alert('신청되었습니다.');
            }
        }
    });

    /* 점핑 캐릭터 지원 혜택 팝업 */
    $('.box_item li a').click(function () {
        var idx = $(this).parent('li').index();

        $('.overlay').show();
        $('.pop0' + (idx + 1)).show();

        $('.btn_pop_close, .overlay').click(function () {
            $('.overlay').hide();
            $('.wrap_popup [class*=pop0]').hide();
        });
    });
});