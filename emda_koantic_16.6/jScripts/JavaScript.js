
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
    console.log($(window).width());

   var myConfObj = {
        iframeMouseOver: false
   }
   window.addEventListener("load", function () {
       var elem = document.getElementById("myvideo");

    window.addEventListener('blur', function () {
        if (myConfObj.iframeMouseOver) {
            console.log('Wow! Iframe Click!');
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
          
        }
    });

    document.getElementById('myvideo').addEventListener('mouseover', function () {
        myConfObj.iframeMouseOver = true;
    });
    document.getElementById('myvideo').addEventListener('mouseout', function () {
        myConfObj.iframeMouseOver = false;
    });
   });
 

    
 
});


  

