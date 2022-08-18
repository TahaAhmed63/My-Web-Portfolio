$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times')
        $('header').toggleClass('toggle')
    })
})
$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times') 
   //  $('.container').animate({right: '50px'});
   

    })

 

})
$("header").first().delay(100).animate({'opacity':'1'},800);



$('.container').first().delay(100).animate({'opacity':'1'},600);
$('.home h3').first().delay(100).animate({'opacity':'1'},800);
$('.home .name').first().delay(100).animate({'opacity':'1'},800);
$('.home p').last().delay(400).animate({'opacity':'1'},800);
$('.home .share').last().delay(400).animate({'opacity':'1'},800);

$(document).ready(function(){
    $('#anime').click(function(){
        $('.about').animate({'opacity':'1'},2000);
        // $('.about .content h3').animate({'opacity':'1'},1000);
        // $('.heading').animate({'opacity':'1'},1000);
       
        // $('.about .content p').animate({'opacity':'1'},1100);
        // $('.about .skills').animate({'opacity':'1'},1200);
       
    })
})
$(document).ready(function(){
    $('#anime1').click(function(){
        $('.education').animate({'opacity':'1'},2500);
       
       
    })
})
$(document).ready(function(){
    $('#anime2').click(function(){
        $('.portfolio').animate({'opacity':'1'},3000);
       
       
    })
})
$(document).ready(function(){
    $('#anime3').click(function(){
        $('.contact').animate({'opacity':'1'},2400);
       
       
    })
})
