let k = 0;
$('.ico_search').click(function(){
    $('.visual').toggleClass('on');

    if(k == 0){
        $('.search_box').fadeIn(100, function(){
        $('.search_box').animate({top:'50%'},700);
    })
        k = 1;
    }
    else{
    k = 0
    $('.search_box').fadeOut(300, function(){
        $('.search_box').css({top:''})
    })
}
    console.log("k=",k)
})

$('.btn_close').click(function(){
    $('.visual').removeClass('on');
    $('.search_box').fadeOut(300, function(){
        $('.search_box').css({top:''})
    })
    k = 0;
    return false
})





$('.mo_nav').html($('.pc_nav').html())
$('.mo_icons').html($('.icons').html())

//mo nav
$('.hamburger').click(function(){
    $('.mo_wrap').show()
})

$('.mo_wrap').click(function(){
    $(this).hide();
})
$('.mo_nav').click(function(e){
    e.stopPropagation();   //이벤트 전파 차단
})