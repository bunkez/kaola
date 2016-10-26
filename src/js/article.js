$(function() {
    var hour = 24;
    var allTime = hour * 60 * 60;
    var residualTime = allTime - 0;
    setInterval(CountDown, 1000);

    function CountDown() {
        residualTime -= 1;
        var h = parseInt(residualTime / 3600);
        var h1 = parseInt(h / 10);
        var h2 = parseInt(h % 10);
        var m = parseInt(residualTime / 60 % 60);
        var m1 = parseInt(m / 10);
        var m2 = parseInt(m % 10);
        var s = parseInt(residualTime % 3600 % 60);
        var s1 = parseInt(s / 10);
        var s2 = parseInt(s % 10);
        $('.timeBox i').eq(0).html(h1).end().eq(1).html(h2).end().eq(2).html(m1).end().eq(3).html(m2).end().eq(4).html(s1).end().eq(5).html(s2);
    };

    $.ajax({
        type: 'GET',
        url: 'src/json/countdown.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $.each(data, function(idx, pic) {
                $img = $('.goodslist img').eq(idx).attr('src', pic['imgurl']);
                $h3a = $('<h3/>').addClass('intro').append('<a href="javascript:void(0);">' + pic["category"] + '</a>').appendTo($('div.detail').eq(idx));
                $h3b = $('<h3/>').addClass('shortTitle').append('<a href="javascript:void(0);">' + pic["title"] + '</a>').appendTo($('div.detail').eq(idx));
                $p = $('<p/>').addClass('price').html('<b>￥</b>' + pic["off"] + '<span>￥</span><del>' + pic["price"] + '</del>').appendTo($('div.detail').eq(idx));
                $div = $('<p/>').addClass('process').html('<b style="width: 50%;"></b><p class="text">剩余' + pic["residual"] + '件</p>').appendTo($('div.detail').eq(idx));
                $a = $('<a/>').attr('href', pic['url']).addClass('btn').html('立即抢购').appendTo($('div.detail').eq(idx));
            });
        }
    });
    $.ajax({
        type: 'GET',
        url: 'src/json/dailynew.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $.each(data, function(idx, pic) {
                $imga = $('.dailyNewWrap ul li img:not(.flag)').eq(idx).attr('src', pic['imgurl']);
                $imgb = $('.dailyNewWrap ul li img.flag').eq(idx).attr('src', pic['country']);
                $h3 = $('<h3/>').appendTo($('div.txt').eq(idx));
                $shorttit = $('<a/>').append('<p class="shorttit">' + pic["title"] + '</p>').appendTo($h3);
                $introduce = $('<a/>').append('<p class="introduce">' + pic["category"] + '</p>').appendTo($h3);
                $ptag = $('<p/>').addClass('ptag').append('<span class="comblabel"><b>' + pic["off"] + '</b>折</span>').appendTo($('div.txt').eq(idx));
                $p = $('<p/>').addClass('price').appendTo($('div.txt').eq(idx));
                $price = parseInt(pic["off"] * pic["price"] * 0.1);
                $strong = $('<strong/>').html('<span>￥</span>' + $price).appendTo($p);
                $span = $('<span/>').html('￥<del>' + pic["price"] + '</del>').appendTo($p);
            });
        }
    });
    $.ajax({
        type: 'GET',
        url: 'src/json/hotbrand.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $.each(data, function(idx, pic) {
                $imga = $('.hotBrandWrap ul li img:not(.logo)').eq(idx).attr('src', pic['imgurl']);
                $imgb = $('.hotBrandWrap ul li img.logo').eq(idx).attr('src', pic['logo']);
                $txt = $('<div/>').addClass('txt').append('<h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p>').appendTo($('.hotBrandWrap ul li a').eq(idx));
            });
        }
    });
});