$(function() {
    // 母婴专区
    $.ajax({
        type: 'GET',
        url: 'src/json/productfloor1.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            var $pf_pf2 = $('.productfloor').eq(1).addClass('productfloor2');
            var $title_pf2 = $('<div/>').addClass('title').appendTo($pf_pf2);
            var $h2_pf2 = $('<h2/>').append('<span class="big">母婴专区</span>').appendTo($title_pf2);
            var $titlea_pf2 = $('<a/>').addClass('more').attr('href', 'javascript:void(0);').html('更多好货<i class="iconfont" style="font-size:14px;">&#xe60c;</i>').appendTo($title_pf2);
            var $cont_pf2 = $('<div/>').addClass('cont').appendTo($pf_pf2);
            var $contLef_pf2 = $('<div/>').addClass('contLef').appendTo($cont_pf2);
            $('<a/>').attr('href', 'javascript:void(0);').append('<img src="src/img/index_section/pf_1/p1.jpg">').appendTo($contLef_pf2);
            var $secondlist_pf2 = $('<ul/>').addClass('secondlist').appendTo($contLef_pf2);
            $('<li><a href="javascript:void(0);"><span class="txt">大牌奶粉</span></a></li>').appendTo($secondlist_pf2);
            $('<li><a href="javascript:void(0);"><span class="txt">纸尿裤</span></a></li>').appendTo($secondlist_pf2);
            $('<li><a href="javascript:void(0);"><span class="txt">洗护喂养</span></a></li>').appendTo($secondlist_pf2);
            $('<li><a href="javascript:void(0);"><span class="txt">营养辅食</span></a></li>').appendTo($secondlist_pf2);
            $('<li><a href="javascript:void(0);"><span class="txt">孕妈专区</span></a></li>').appendTo($secondlist_pf2);
            $('<li><a href="javascript:void(0);"><span class="txt">玩具专区</span></a></li>').appendTo($secondlist_pf2);
            var $contMid_pf2 = $('<div/>').addClass('contMid').appendTo($cont_pf2);
            var $contMidul_pf2 = $('<ul/>').appendTo($contMid_pf2);
            var $contRig_pf2 = $('<div/>').addClass('contRig').appendTo($cont_pf2);
            $('<h3/>').addClass('titl').html('最新热卖').appendTo($contRig_pf2);
            var $prolist_pf2 = $('<div/>').addClass('prolist').appendTo($contRig_pf2);
            var $itemgroup1_pf2 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist_pf2);
            var $itemgroup2_pf2 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist_pf2);
            var $itemgroup3_pf2 = $('<div/>').css('opacity', '1').addClass('itemgroup').appendTo($prolist_pf2);
            var $table_pf2 = $('<table/>').append('<tr><td class="pageBox"><a class="idxicon" href="javascript:void(0)">0</a><a class="idxicon" href="javascript:void(0)">1</a><a class="idxicon" href="javascript:void(0)">2</a></td></tr>').appendTo($contRig_pf2);
            var $logolist_pf2 = $('<div/>').addClass('logolist').append('<span>热卖品牌：</span>').appendTo($pf_pf2);
            $.each(data, function(idx, pic) {
                if (idx < 2) {
                    $('<li><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul_pf2);
                }
                if (idx > 1 && idx < 4) {
                    $('<li class="below"><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul_pf2);
                }
                if (idx > 3 && idx < 7) {
                    var $itemsale_pf2 = $('<div/>').addClass('itemsale').appendTo($itemgroup1_pf2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale_pf2);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale_pf2);
                };
                if (idx == 7) {
                    var $itemsale_pf2 = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup1_pf2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale_pf2);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale_pf2);
                };
                if (idx > 7 && idx < 11) {
                    var $itemsale_pf2 = $('<div/>').addClass('itemsale').appendTo($itemgroup2_pf2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale_pf2);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale_pf2);
                };
                if (idx == 11) {
                    var $itemsale_pf2 = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup2_pf2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale_pf2);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale_pf2);
                };
                if (idx > 11 && idx < 15) {
                    var $itemsale_pf2 = $('<div/>').addClass('itemsale').appendTo($itemgroup3_pf2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale_pf2);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale_pf2);
                };
                if (idx == 15) {
                    var $itemsale_pf2 = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup3_pf2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale_pf2);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale_pf2);
                };
                if (idx > 15) {
                    $('<a/>').addClass('pic').attr('href', pic["url"]).append('<img src="' + pic["imgurl"] + '">').appendTo($logolist_pf2);
                };
            });
            var i = 0;
            setInterval(show_pf2, 3000);

            function show_pf2() {
                $('.productfloor2 .idxicon').removeClass('active').eq(i).addClass('active');
                $('.productfloor2 .itemgroup').eq(i).stop().animate({ 'opacity': 1 }, 500, function() {
                    if (i == 2) {
                        i = 0;
                    } else {
                        i++;
                    };
                }).siblings().stop().animate({ 'opacity': 0 }, 500);
            };
        }
    });
    // 美容彩妆
    // 服饰鞋包
    // 家居个护
    // 营养保健
    // 海外直邮
    // 数码家电
    // 环球美食
});