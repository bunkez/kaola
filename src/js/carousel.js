// 大轮播图
$(function() {
    $.ajax({
        type: 'GET',
        url: 'src/json/carousel.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $ul = $('<ul/>').appendTo('.imgBox');
            $table = $('<table/>').addClass('pageBox').append('<tr/>').appendTo('.imgBox');
            $('<td/>').append('<span><span class="pageBoxs"></span></span>').appendTo('tr');
            $.each(data, function(idx, pic) {
                $li = $('<li/>').addClass("li_" + idx).appendTo($ul);
                $img = $('<img/>').attr('src', pic['imgurl']);
                $a = $('<a/>').attr('href', pic['url']).append($img).appendTo($li);
                $spana = $('<a/>').attr('href', pic['url']).append('<i class="iconfont carouselIconfont">&#xe603;</i>').append('<span class="num">' + (idx + 1) + '</span>').appendTo('.pageBoxs');
            });
            $('table i').eq(0).addClass('active');
            $ctrl = $('<div/>').addClass('control').appendTo('.imgBox');
            $divBtn = $('<div/>').appendTo($ctrl);
            $lefBtn = $('<a/>').attr('href', 'javascript:noid(0);').addClass('prev').appendTo($divBtn);
            $rigBtn = $('<a/>').attr('href', 'javascript:noid(0);').addClass('next').appendTo($divBtn);
        }
    });
    var idx = 1;
    var timer = setInterval(carousel, 4000);

    function carousel() {
        $('table i').removeClass('active').eq(idx).addClass('active');
        $('.li_' + idx).stop().animate({ 'opacity': 1 }, 800, function() {
            if (idx == 5) {
                idx = 0
            } else {
                idx++;
            };
        }).siblings().stop().animate({ 'opacity': 0 }, 800);
    };

    // 销售重点
    $.ajax({
        type: 'GET',
        url: 'src/json/sellpoint.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $.each(data, function(idx, pic) {
                $a = $('.hotPic').eq(idx);
                $img = $('<img/>').attr('src', pic['imgurl']).appendTo($a);
            });
        }
    });
});