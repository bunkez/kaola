$(function() {
    $.ajax({
        type: 'GET',
        url: 'src/json/guesslist.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $guessTitle = $('<h4/>').addClass('newRecomTitle').html('猜你喜欢<b>根据你的浏览记录推荐的商品</b>').appendTo($('.guessWrap'));
            $guessBox = $('<div/>').addClass('guessBox').appendTo($('.guessWrap'));
            $.each(data, function(idx, pic) {
                $guess = $('<div/>').addClass('guess').appendTo($('.guessBox'));
                $itemImg = $('<a/>').addClass('itemImg').attr('href', pic["url"]).append('<img src="' + pic["imgurl"] + '">').appendTo($guess);
                $itemTitle = $('<p/>').addClass('itemTitle').html('<a href=' + pic["url"] + '><b>' + pic["module"] + '</b>' + pic["title"] + '</a>').appendTo($guess);
                $itemInfo = $('<div/>').addClass('itemInfo')
                    .html('<p class="price"><span class="symbol">￥</span>' + pic["off"] + '<span class="marprice">￥<del>' + pic["price"] + '</del></span></p><a href="' + pic["url"] + '" class="comment">' + pic["commentCount"] + ' 人已评价</a>')
                    .appendTo($guess);
            });
            $('.guess').eq(3).addClass('noBorder');
        }
    });
});