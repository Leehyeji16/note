let k = 0;
$('.ico_search').click(function(){
    $('.visual').toggleClass('on');

    if(k == 0){
        $('.search_box').fadeIn(100, function(){
            $('.search_box').animate({top:'50%'}, 700);
        })
        k = 1;
    }
    else{
        k = 0
        $('.search_box').fadeOut(300, function(){
            $('.search_box').css({top:'-500px'})
        })
    }
    console.log("k=",k)
})

$('.btn_close').click(function(){
    $('.visual').removeClass('on');
    $('.search_box').fadeOut(300, function(){
        $('.search_box').css({top:'-500px'})
    })
    k = 0;
    return false
})



$('.mo_nav').html($('.pc_nav').html())
$('.mo_icons').html($('.icons a img').map(function(){
    return '<a href="#">' + $(this).prop('outerHTML') + '</a>';
}).get().join(''))

$('.hamburger').click(function(){
    $('.mo_wrap').css('display', 'flex').addClass('open');
})

$('.mo_wrap').click(function(){
    $(this).hide().removeClass('open');
})

$('.mo_close').click(function(e){
    e.stopPropagation();
    $('.mo_wrap').hide().removeClass('open');
})

$('.mo_nav').click(function(e){
    e.stopPropagation();
})

