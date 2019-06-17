
$(document).ready(function () {

  
    //בהתאם לגודל המסך FOOTER בדיקה למיקום ה 
    if ($("body").height() < $(window).height()) {
        $('#myfooter').css('position', 'absolute');
        $('#myfooter').css('bottom', 0);
        console.log("הטקסט" + $("body").height());
        console.log("המסך" + $(window).height());

    }
    $(window).resize(function () {
        $('#myfooter').css('position', 'relative');
        $('#myfooter').css('bottom', 'auto');
        if ($("body").height() < $(window).height()) {
            $('#myfooter').css('position', 'absolute');
            $('#myfooter').css('bottom', 0);
            console.log("הטקסט" + $("body").height());
            console.log("המסך" + $(window).height());

        }
    });
   
});

