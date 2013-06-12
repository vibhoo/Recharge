$(document).delegate('a', 'click', function () {
    $('.content_div').hide();
    $('#' + $(this).attr('data-href')).show();
});

// Checking of inputting only number
$(document).ready(function () {
 $("#m_number").keypress(function(e) {
   if(e.which != 8 && e.which !=0 &&(e.which <48 || e.which >57)) {
      $("#errmsg").html("Digital Only").show().fadeOut("slow");
       return false;
       }
   }); 
}); 

$(document).delegate('a', 'click',function() {
    $('#dc,#cc').hide();
    $('#'+$(this).attr('data-href')).show();
});

$(document).delegate('a', 'click',function() {
    $('#dc,#nb').hide();
    $('#'+$(this).attr('data-href')).show();
}); 

$(document).delegate('a', 'click',function() {
    $('#nb,#cc').hide();
    $('#'+$(this).attr('data-href')).show();
});

$(document).delegate('a', 'click',function() {
    $('#success,#fail').hide();
    $('#'+$(this).attr('data-href')).show();
});

$(document).delegate('a', 'click',function() {
    $('#all,#fail').hide();
    $('#'+$(this).attr('data-href')).show();
});


$(document).delegate('a', 'click',function() {
    $('#all,#success').hide();
    $('#'+$(this).attr('data-href')).show();
});



$(document).delegate('a', 'click',function() {
    $('#faq,#t_c').hide();
    $('#'+$(this).attr('data-href')).show();
});

$(document).delegate('a', 'click',function() {
    $('#t_c,#he').hide();
    $('#'+$(this).attr('data-href')).show();
});

$(document).delegate('a', 'click',function() {
    $('#faq,#he').hide();
    $('#'+$(this).attr('data-href')).show();
});