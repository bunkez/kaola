// 大轮播图
$(function() {
    $.ajax({
        type: 'GET',
        url: 'src/json/carousel.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            $ul = $('<ul/>').appendTo('.imgBox');
            $.each(data, function(idx, pic) {
                $li = $('<li/>').addClass("li_" + idx).appendTo($ul);
                $img = $('<img/>').attr('src', pic['imgurl']);
                $a = $('<a/>').attr('href', pic['url']).append($img).appendTo($li);
            });
        }
    });
});