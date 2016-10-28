$(function() {
    // 母婴专区
    $.ajax({
        type: 'GET',
        url: 'src/json/productfloor1.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            var $pf = $('.productfloor').eq(0).addClass('productfloor1');
            var $title = $('<div/>').addClass('title').appendTo($pf);
            var $h2 = $('<h2/>').append('<span class="big">母婴专区</span>').appendTo($title);
            var $titlea = $('<a/>').addClass('more').attr('href', 'javascript:void(0);').html('更多好货<i class="iconfont" style="font-size:14px;">&#xe60c;</i>').appendTo($title);
            var $cont = $('<div/>').addClass('cont').appendTo($pf);
            var $contLef = $('<div/>').addClass('contLef').appendTo($cont);
            $('<a/>').attr('href', 'javascript:void(0);').append('<img src="src/img/index_section/pf_1/p1.jpg">').appendTo($contLef);
            var $secondlist = $('<ul/>').addClass('secondlist').appendTo($contLef);
            $('<li><a href="javascript:void(0);"><span class="txt">大牌奶粉</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">纸尿裤</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">洗护喂养</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">营养辅食</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">孕妈专区</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">玩具专区</span></a></li>').appendTo($secondlist);
            var $contMid = $('<div/>').addClass('contMid').appendTo($cont);
            var $contMidul = $('<ul/>').appendTo($contMid);
            var $contRig = $('<div/>').addClass('contRig').appendTo($cont);
            $('<h3/>').addClass('titl').html('最新热卖').appendTo($contRig);
            var $prolist = $('<div/>').addClass('prolist').appendTo($contRig);
            var $itemgroup1 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup2 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup3 = $('<div/>').css('opacity', '1').addClass('itemgroup').appendTo($prolist);
            var $table = $('<table/>').append('<tr><td class="pageBox"><a class="idxicon" href="javascript:void(0)">0</a><a class="idxicon" href="javascript:void(0)">1</a><a class="idxicon" href="javascript:void(0)">2</a></td></tr>').appendTo($contRig);
            var $logolist = $('<div/>').addClass('logolist').append('<span>热卖品牌：</span>').appendTo($pf);
            $.each(data, function(idx, pic) {
                if (idx < 2) {
                    $('<li><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 1 && idx < 4) {
                    $('<li class="below"><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 3 && idx < 7) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 7) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 7 && idx < 11) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 11) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 11 && idx < 15) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 15) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 15) {
                    $('<a/>').addClass('pic').attr('href', pic["url"]).append('<img src="' + pic["imgurl"] + '">').appendTo($logolist);
                };
            });
            var i = 0;
            setInterval(show, 3000);

            function show() {
                $('.productfloor1 .idxicon').removeClass('active').eq(i).addClass('active');
                $('.productfloor1 .itemgroup').eq(i).stop().animate({ 'opacity': 1 }, 500, function() {
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
    $.ajax({
        type: 'GET',
        url: 'src/json/productfloor2.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            var $pf = $('.productfloor').eq(1).addClass('productfloor2');
            var $title = $('<div/>').addClass('title').appendTo($pf);
            var $h2 = $('<h2/>').append('<span class="big">美容彩妆</span>').appendTo($title);
            var $titlea = $('<a/>').addClass('more').attr('href', 'javascript:void(0);').html('更多好货<i class="iconfont" style="font-size:14px;">&#xe60c;</i>').appendTo($title);
            var $cont = $('<div/>').addClass('cont').appendTo($pf);
            var $contLef = $('<div/>').addClass('contLef').appendTo($cont);
            $('<a/>').attr('href', 'javascript:void(0);').append('<img src="src/img/index_section/pf_2/p1.jpg">').appendTo($contLef);
            var $secondlist = $('<ul/>').addClass('secondlist').appendTo($contLef);
            $('<li><a href="javascript:void(0);"><span class="txt">基础护肤</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">彩妆香氛</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">韩国美妆</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">人气面膜</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">奢宠保养</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">身体护理</span></a></li>').appendTo($secondlist);
            var $contMid = $('<div/>').addClass('contMid').appendTo($cont);
            var $contMidul = $('<ul/>').appendTo($contMid);
            var $contRig = $('<div/>').addClass('contRig').appendTo($cont);
            $('<h3/>').addClass('titl').html('最新热卖').appendTo($contRig);
            var $prolist = $('<div/>').addClass('prolist').appendTo($contRig);
            var $itemgroup1 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup2 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup3 = $('<div/>').css('opacity', '1').addClass('itemgroup').appendTo($prolist);
            var $table = $('<table/>').append('<tr><td class="pageBox"><a class="idxicon" href="javascript:void(0)">0</a><a class="idxicon" href="javascript:void(0)">1</a><a class="idxicon" href="javascript:void(0)">2</a></td></tr>').appendTo($contRig);
            var $logolist = $('<div/>').addClass('logolist').append('<span>热卖品牌：</span>').appendTo($pf);
            $.each(data, function(idx, pic) {
                if (idx < 2) {
                    $('<li><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 1 && idx < 4) {
                    $('<li class="below"><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 3 && idx < 7) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 7) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 7 && idx < 11) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 11) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 11 && idx < 15) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 15) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 15) {
                    $('<a/>').addClass('pic').attr('href', pic["url"]).append('<img src="' + pic["imgurl"] + '">').appendTo($logolist);
                };
            });
            var i = 0;
            setInterval(show, 3000);

            function show() {
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
    // 服饰鞋包
    $.ajax({
        type: 'GET',
        url: 'src/json/productfloor3.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            var $pf = $('.productfloor').eq(2).addClass('productfloor3');
            var $title = $('<div/>').addClass('title').appendTo($pf);
            var $h2 = $('<h2/>').append('<span class="big">服饰鞋包</span>').appendTo($title);
            var $titlea = $('<a/>').addClass('more').attr('href', 'javascript:void(0);').html('更多好货<i class="iconfont" style="font-size:14px;">&#xe60c;</i>').appendTo($title);
            var $cont = $('<div/>').addClass('cont').appendTo($pf);
            var $contLef = $('<div/>').addClass('contLef').appendTo($cont);
            $('<a/>').attr('href', 'javascript:void(0);').append('<img src="src/img/index_section/pf_3/p1.jpg">').appendTo($contLef);
            var $secondlist = $('<ul/>').addClass('secondlist').appendTo($contLef);
            $('<li><a href="javascript:void(0);"><span class="txt">大牌女包</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">品质男包</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">精致手表</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">珠宝饰品</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">臻品腰带</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">时尚墨镜</span></a></li>').appendTo($secondlist);
            var $contMid = $('<div/>').addClass('contMid').appendTo($cont);
            var $contMidul = $('<ul/>').appendTo($contMid);
            var $contRig = $('<div/>').addClass('contRig').appendTo($cont);
            $('<h3/>').addClass('titl').html('最新热卖').appendTo($contRig);
            var $prolist = $('<div/>').addClass('prolist').appendTo($contRig);
            var $itemgroup1 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup2 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup3 = $('<div/>').css('opacity', '1').addClass('itemgroup').appendTo($prolist);
            var $table = $('<table/>').append('<tr><td class="pageBox"><a class="idxicon" href="javascript:void(0)">0</a><a class="idxicon" href="javascript:void(0)">1</a><a class="idxicon" href="javascript:void(0)">2</a></td></tr>').appendTo($contRig);
            var $logolist = $('<div/>').addClass('logolist').append('<span>热卖品牌：</span>').appendTo($pf);
            $.each(data, function(idx, pic) {
                if (idx < 2) {
                    $('<li><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 1 && idx < 4) {
                    $('<li class="below"><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 3 && idx < 7) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 7) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 7 && idx < 11) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 11) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 11 && idx < 15) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 15) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 15) {
                    $('<a/>').addClass('pic').attr('href', pic["url"]).append('<img src="' + pic["imgurl"] + '">').appendTo($logolist);
                };
            });
            var i = 0;
            setInterval(show, 3000);

            function show() {
                $('.productfloor3 .idxicon').removeClass('active').eq(i).addClass('active');
                $('.productfloor3 .itemgroup').eq(i).stop().animate({ 'opacity': 1 }, 500, function() {
                    if (i == 2) {
                        i = 0;
                    } else {
                        i++;
                    };
                }).siblings().stop().animate({ 'opacity': 0 }, 500);
            };
        }
    });
    // 家居个护
    $.ajax({
        type: 'GET',
        url: 'src/json/productfloor4.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            var $pf = $('.productfloor').eq(3).addClass('productfloor4');
            var $title = $('<div/>').addClass('title').appendTo($pf);
            var $h2 = $('<h2/>').append('<span class="big">家居个护</span>').appendTo($title);
            var $titlea = $('<a/>').addClass('more').attr('href', 'javascript:void(0);').html('更多好货<i class="iconfont" style="font-size:14px;">&#xe60c;</i>').appendTo($title);
            var $cont = $('<div/>').addClass('cont').appendTo($pf);
            var $contLef = $('<div/>').addClass('contLef').appendTo($cont);
            $('<a/>').attr('href', 'javascript:void(0);').append('<img src="src/img/index_section/pf_4/p1.jpg">').appendTo($contLef);
            var $secondlist = $('<ul/>').addClass('secondlist').appendTo($contLef);
            $('<li><a href="javascript:void(0);"><span class="txt">洗发护发</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">沐浴清洁</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">口腔护理</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">厨房餐饮</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">家装家纺</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">家居清洁</span></a></li>').appendTo($secondlist);
            var $contMid = $('<div/>').addClass('contMid').appendTo($cont);
            var $contMidul = $('<ul/>').appendTo($contMid);
            var $contRig = $('<div/>').addClass('contRig').appendTo($cont);
            $('<h3/>').addClass('titl').html('最新热卖').appendTo($contRig);
            var $prolist = $('<div/>').addClass('prolist').appendTo($contRig);
            var $itemgroup1 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup2 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup3 = $('<div/>').css('opacity', '1').addClass('itemgroup').appendTo($prolist);
            var $table = $('<table/>').append('<tr><td class="pageBox"><a class="idxicon" href="javascript:void(0)">0</a><a class="idxicon" href="javascript:void(0)">1</a><a class="idxicon" href="javascript:void(0)">2</a></td></tr>').appendTo($contRig);
            var $logolist = $('<div/>').addClass('logolist').append('<span>热卖品牌：</span>').appendTo($pf);
            $.each(data, function(idx, pic) {
                if (idx < 2) {
                    $('<li><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 1 && idx < 4) {
                    $('<li class="below"><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 3 && idx < 7) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 7) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 7 && idx < 11) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 11) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 11 && idx < 15) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 15) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 15) {
                    $('<a/>').addClass('pic').attr('href', pic["url"]).append('<img src="' + pic["imgurl"] + '">').appendTo($logolist);
                };
            });
            var i = 0;
            setInterval(show, 3000);

            function show() {
                $('.productfloor4 .idxicon').removeClass('active').eq(i).addClass('active');
                $('.productfloor4 .itemgroup').eq(i).stop().animate({ 'opacity': 1 }, 500, function() {
                    if (i == 2) {
                        i = 0;
                    } else {
                        i++;
                    };
                }).siblings().stop().animate({ 'opacity': 0 }, 500);
            };
        }
    });
    // 营养保健
    $.ajax({
        type: 'GET',
        url: 'src/json/productfloor5.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            var $pf = $('.productfloor').eq(4).addClass('productfloor5');
            var $title = $('<div/>').addClass('title').appendTo($pf);
            var $h2 = $('<h2/>').append('<span class="big">营养保健</span>').appendTo($title);
            var $titlea = $('<a/>').addClass('more').attr('href', 'javascript:void(0);').html('更多好货<i class="iconfont" style="font-size:14px;">&#xe60c;</i>').appendTo($title);
            var $cont = $('<div/>').addClass('cont').appendTo($pf);
            var $contLef = $('<div/>').addClass('contLef').appendTo($cont);
            $('<a/>').attr('href', 'javascript:void(0);').append('<img src="src/img/index_section/pf_5/p1.jpg">').appendTo($contLef);
            var $secondlist = $('<ul/>').addClass('secondlist').appendTo($contLef);
            $('<li><a href="javascript:void(0);"><span class="txt">清仓馆</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">长辈馆</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">男性馆</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">滋补馆</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">美容馆</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">瘦身馆</span></a></li>').appendTo($secondlist);
            var $contMid = $('<div/>').addClass('contMid').appendTo($cont);
            var $contMidul = $('<ul/>').appendTo($contMid);
            var $contRig = $('<div/>').addClass('contRig').appendTo($cont);
            $('<h3/>').addClass('titl').html('最新热卖').appendTo($contRig);
            var $prolist = $('<div/>').addClass('prolist').appendTo($contRig);
            var $itemgroup1 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup2 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup3 = $('<div/>').css('opacity', '1').addClass('itemgroup').appendTo($prolist);
            var $table = $('<table/>').append('<tr><td class="pageBox"><a class="idxicon" href="javascript:void(0)">0</a><a class="idxicon" href="javascript:void(0)">1</a><a class="idxicon" href="javascript:void(0)">2</a></td></tr>').appendTo($contRig);
            var $logolist = $('<div/>').addClass('logolist').append('<span>热卖品牌：</span>').appendTo($pf);
            $.each(data, function(idx, pic) {
                if (idx < 2) {
                    $('<li><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 1 && idx < 4) {
                    $('<li class="below"><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 3 && idx < 7) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 7) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 7 && idx < 11) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 11) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 11 && idx < 15) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 15) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 15) {
                    $('<a/>').addClass('pic').attr('href', pic["url"]).append('<img src="' + pic["imgurl"] + '">').appendTo($logolist);
                };
            });
            var i = 0;
            setInterval(show, 3000);

            function show() {
                $('.productfloor5 .idxicon').removeClass('active').eq(i).addClass('active');
                $('.productfloor5 .itemgroup').eq(i).stop().animate({ 'opacity': 1 }, 500, function() {
                    if (i == 2) {
                        i = 0;
                    } else {
                        i++;
                    };
                }).siblings().stop().animate({ 'opacity': 0 }, 500);
            };
        }
    });
    // 海外直邮
    $.ajax({
        type: 'GET',
        url: 'src/json/productfloor6.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            var $pf = $('.productfloor').eq(5).addClass('productfloor6');
            var $title = $('<div/>').addClass('title').appendTo($pf);
            var $h2 = $('<h2/>').append('<span class="big">海外直邮</span>').appendTo($title);
            var $titlea = $('<a/>').addClass('more').attr('href', 'javascript:void(0);').html('更多好货<i class="iconfont" style="font-size:14px;">&#xe60c;</i>').appendTo($title);
            var $cont = $('<div/>').addClass('cont').appendTo($pf);
            var $contLef = $('<div/>').addClass('contLef').appendTo($cont);
            $('<a/>').attr('href', 'javascript:void(0);').append('<img src="src/img/index_section/pf_6/p1.jpg">').appendTo($contLef);
            var $secondlist = $('<ul/>').addClass('secondlist').appendTo($contLef);
            $('<li><a href="javascript:void(0);"><span class="txt">母婴专区</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">电子生活</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">日用家居</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">营养保健</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">大牌手表</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">礼品配饰</span></a></li>').appendTo($secondlist);
            var $contMid = $('<div/>').addClass('contMid').appendTo($cont);
            var $contMidul = $('<ul/>').appendTo($contMid);
            var $contRig = $('<div/>').addClass('contRig').appendTo($cont);
            $('<h3/>').addClass('titl').html('最新热卖').appendTo($contRig);
            var $prolist = $('<div/>').addClass('prolist').appendTo($contRig);
            var $itemgroup1 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup2 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup3 = $('<div/>').css('opacity', '1').addClass('itemgroup').appendTo($prolist);
            var $table = $('<table/>').append('<tr><td class="pageBox"><a class="idxicon" href="javascript:void(0)">0</a><a class="idxicon" href="javascript:void(0)">1</a><a class="idxicon" href="javascript:void(0)">2</a></td></tr>').appendTo($contRig);
            var $logolist = $('<div/>').addClass('logolist').append('<span>热卖品牌：</span>').appendTo($pf);
            $.each(data, function(idx, pic) {
                if (idx < 2) {
                    $('<li><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 1 && idx < 4) {
                    $('<li class="below"><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 3 && idx < 7) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 7) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 7 && idx < 11) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 11) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 11 && idx < 15) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 15) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 15) {
                    $('<a/>').addClass('pic').attr('href', pic["url"]).append('<img src="' + pic["imgurl"] + '">').appendTo($logolist);
                };
            });
            var i = 0;
            setInterval(show, 3000);

            function show() {
                $('.productfloor6 .idxicon').removeClass('active').eq(i).addClass('active');
                $('.productfloor6 .itemgroup').eq(i).stop().animate({ 'opacity': 1 }, 500, function() {
                    if (i == 2) {
                        i = 0;
                    } else {
                        i++;
                    };
                }).siblings().stop().animate({ 'opacity': 0 }, 500);
            };
        }
    });
    // 数码家电
    $.ajax({
        type: 'GET',
        url: 'src/json/productfloor7.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            var $pf = $('.productfloor').eq(6).addClass('productfloor7');
            var $title = $('<div/>').addClass('title').appendTo($pf);
            var $h2 = $('<h2/>').append('<span class="big">数码家电</span>').appendTo($title);
            var $titlea = $('<a/>').addClass('more').attr('href', 'javascript:void(0);').html('更多好货<i class="iconfont" style="font-size:14px;">&#xe60c;</i>').appendTo($title);
            var $cont = $('<div/>').addClass('cont').appendTo($pf);
            var $contLef = $('<div/>').addClass('contLef').appendTo($cont);
            $('<a/>').attr('href', 'javascript:void(0);').append('<img src="src/img/index_section/pf_7/p1.jpg">').appendTo($contLef);
            var $secondlist = $('<ul/>').addClass('secondlist').appendTo($contLef);
            $('<li><a href="javascript:void(0);"><span class="txt">个护电器</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">生活电器</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">厨房电器</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">3C数码</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">办公学习</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">影音娱乐</span></a></li>').appendTo($secondlist);
            var $contMid = $('<div/>').addClass('contMid').appendTo($cont);
            var $contMidul = $('<ul/>').appendTo($contMid);
            var $contRig = $('<div/>').addClass('contRig').appendTo($cont);
            $('<h3/>').addClass('titl').html('最新热卖').appendTo($contRig);
            var $prolist = $('<div/>').addClass('prolist').appendTo($contRig);
            var $itemgroup1 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup2 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup3 = $('<div/>').css('opacity', '1').addClass('itemgroup').appendTo($prolist);
            var $table = $('<table/>').append('<tr><td class="pageBox"><a class="idxicon" href="javascript:void(0)">0</a><a class="idxicon" href="javascript:void(0)">1</a><a class="idxicon" href="javascript:void(0)">2</a></td></tr>').appendTo($contRig);
            var $logolist = $('<div/>').addClass('logolist').append('<span>热卖品牌：</span>').appendTo($pf);
            $.each(data, function(idx, pic) {
                if (idx < 2) {
                    $('<li><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 1 && idx < 4) {
                    $('<li class="below"><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 3 && idx < 7) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 7) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 7 && idx < 11) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 11) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 11 && idx < 15) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 15) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 15) {
                    $('<a/>').addClass('pic').attr('href', pic["url"]).append('<img src="' + pic["imgurl"] + '">').appendTo($logolist);
                };
            });
            var i = 0;
            setInterval(show, 3000);

            function show() {
                $('.productfloor7 .idxicon').removeClass('active').eq(i).addClass('active');
                $('.productfloor7 .itemgroup').eq(i).stop().animate({ 'opacity': 1 }, 500, function() {
                    if (i == 2) {
                        i = 0;
                    } else {
                        i++;
                    };
                }).siblings().stop().animate({ 'opacity': 0 }, 500);
            };
        }
    });
    // 环球美食
    $.ajax({
        type: 'GET',
        url: 'src/json/productfloor8.json',
        dataType: 'json',
        success: function(data) {
            console.log(data);
            var $pf = $('.productfloor').eq(7).addClass('productfloor8');
            var $title = $('<div/>').addClass('title').appendTo($pf);
            var $h2 = $('<h2/>').append('<span class="big">环球美食</span>').appendTo($title);
            var $titlea = $('<a/>').addClass('more').attr('href', 'javascript:void(0);').html('更多好货<i class="iconfont" style="font-size:14px;">&#xe60c;</i>').appendTo($title);
            var $cont = $('<div/>').addClass('cont').appendTo($pf);
            var $contLef = $('<div/>').addClass('contLef').appendTo($cont);
            $('<a/>').attr('href', 'javascript:void(0);').append('<img src="src/img/index_section/pf_8/p1.jpg">').appendTo($contLef);
            var $secondlist = $('<ul/>').addClass('secondlist').appendTo($contLef);
            $('<li><a href="javascript:void(0);"><span class="txt">饮料</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">咖啡冲饮</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">果干坚果</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">饼干糕点</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">休闲零食</span></a></li>').appendTo($secondlist);
            $('<li><a href="javascript:void(0);"><span class="txt">粮油副食</span></a></li>').appendTo($secondlist);
            var $contMid = $('<div/>').addClass('contMid').appendTo($cont);
            var $contMidul = $('<ul/>').appendTo($contMid);
            var $contRig = $('<div/>').addClass('contRig').appendTo($cont);
            $('<h3/>').addClass('titl').html('最新热卖').appendTo($contRig);
            var $prolist = $('<div/>').addClass('prolist').appendTo($contRig);
            var $itemgroup1 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup2 = $('<div/>').css('opacity', '0').addClass('itemgroup').appendTo($prolist);
            var $itemgroup3 = $('<div/>').css('opacity', '1').addClass('itemgroup').appendTo($prolist);
            var $table = $('<table/>').append('<tr><td class="pageBox"><a class="idxicon" href="javascript:void(0)">0</a><a class="idxicon" href="javascript:void(0)">1</a><a class="idxicon" href="javascript:void(0)">2</a></td></tr>').appendTo($contRig);
            var $logolist = $('<div/>').addClass('logolist').append('<span>热卖品牌：</span>').appendTo($pf);
            $.each(data, function(idx, pic) {
                if (idx < 2) {
                    $('<li><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 1 && idx < 4) {
                    $('<li class="below"><a href="javascript:void(0);"><h3>' + pic["title"] + '</h3><p>' + pic["category"] + '</p><img src="' + pic["imgurl"] + '"></a></li>').appendTo($contMidul);
                }
                if (idx > 3 && idx < 7) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 7) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup1);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 7 && idx < 11) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 11) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup2);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 11 && idx < 15) {
                    var $itemsale = $('<div/>').addClass('itemsale').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx == 15) {
                    var $itemsale = $('<div/>').addClass('itemsale itemsale-last').appendTo($itemgroup3);
                    $('<a/>').addClass('pic').append('<img src="' + pic["imgurl"] + '">').appendTo($itemsale);
                    $('<div/>')
                        .append('<h3 class="tit"><a href="javascript:void(0);">' + pic["title"] + '</a></h3><p class="curprice"><span>￥</span><strong>' + pic["off"] + '</strong><span class="del">￥<del>' + pic["price"] + '</del></span></p>')
                        .appendTo($itemsale);
                };
                if (idx > 15) {
                    $('<a/>').addClass('pic').attr('href', pic["url"]).append('<img src="' + pic["imgurl"] + '">').appendTo($logolist);
                };
            });
            var i = 0;
            setInterval(show, 3000);

            function show() {
                $('.productfloor8 .idxicon').removeClass('active').eq(i).addClass('active');
                $('.productfloor8 .itemgroup').eq(i).stop().animate({ 'opacity': 1 }, 500, function() {
                    if (i == 2) {
                        i = 0;
                    } else {
                        i++;
                    };
                }).siblings().stop().animate({ 'opacity': 0 }, 500);
            };
        }
    });
});