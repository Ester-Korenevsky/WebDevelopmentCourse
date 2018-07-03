$(function () {
    console.log("נסגר");
    $('.modal').on('hidden.bs.modal', function (e) {
        $iframe = $(this).find("iframe");
        $iframe.attr("src", $iframe.attr("src"));
    });
});
function readURL(input) {//תצוגה מקדימה לתמונה הנבחרת
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var image = new Image();
            image.src = e.target.result;
            var mywidth = 0;
            var myheight = 0;
            image.onload = function () {
                console.log(this.width);
                if (this.width * (80 / 100) > this.height) {
                    mywidth = 100;
                    var smaller = 100 / this.width;
                    var newH = smaller * this.height;
                    myheight = newH;
                }
                else if (this.width * (80 / 100) < this.height) {
                    myheight = 80;
                    var newsize = 80 / this.height;
                    var newW = newsize * this.width;
                    mywidth = newW;
                }
                else {
                    mywidth = 100;
                    myheight = 80;
                }
                $('#Image1').attr('src', this.src);
                $('#Image1').width(mywidth);
                $('#Image1').height(myheight);
                $('#Button2').prop('disabled', false);
                $('#Button4').prop('disabled', false);
            }
        }
        reader.readAsDataURL(input.files[0]);
    }
    else {
        console.log("לא נבחר");
        $('#Image1').attr('src', "");
        $('#Button2').prop('disabled', true);
        $('#Button4').prop('disabled', true);
    }
}
$("#FileUpload1").change(function () {
    readURL(this);
});
function check(e) {//בדיקת תווים בתיבות טקסט
    var keynum
    var keychar
    var numcheck
    // For Internet Explorer
    if (window.event) {
        keynum = e.keyCode
    }
        // For Netscape/Firefox/Opera
    else if (e.which) {
        keynum = e.which
    }
    keychar = String.fromCharCode(keynum)
    //List of special characters you want to restrict
    if (keychar == "@" || keychar == ">" || keychar == "<" || keychar == "\\" || keychar == "&" || keychar == "\"" || keychar == "$" || keychar == "}" || keychar == "]" || keychar == "[" || keychar == "_" || keychar == "{" || keychar == "#" || keychar == "%" || keychar == "^" || keychar == "*" || keychar == ")" || keychar == "(" || keychar == "." || keychar == "|" || keychar == "/" || keychar == ";" || keychar == ":" || keychar == "~") {

        return false;
    }
    else {
        return true;
    }
}


function keyup1 (event) {//הפעלת כפתור אנטר בלחיצה
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Trigger the button element with a click
      
        document.getElementById("Button1game").click();


    }
}
function keyup2(event) {//הפעלת כפתור אנטר בלחיצה
    // Cancel the default action, if needed
    event.preventDefault();
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Trigger the button element with a click

        document.getElementById("enterBtn").click();


    }
}

window.onload = function () {
    if ($("#deleteCategory").is(":visible") == true) {
        document.getElementById("OkCate").focus();
        if (event.keyCode === 13) {
            // Trigger the button element with a click

            document.getElementById("OkCate").click();


        }
    }
        if ($("#deleteParit").is(":visible") == true) {
            document.getElementById("ok").focus();
            if (event.keyCode === 13) {
                // Trigger the button element with a click

                document.getElementById("ok").click();


            }
        }
        if ($("#DeleteGame").is(":visible") == true) {
            document.getElementById("OkGame").focus();
            if (event.keyCode === 13) {
                // Trigger the button element with a click

                document.getElementById("OkGame").click();


            }
        }
      
    }

$(document).on('keypress', '#TextBox2', function (e) {//אנטר בהוספת פריטים ללא ירידת שורה והפעלת כפתור
    
    if (e.keyCode == 13) {  
        e.preventDefault();
        if ($("#Button2").is(":visible") == true) {
            $('#Button2').click();
        }
        else {
            $('#Button4').click(); 
        }
       
    }
});


function SetButtonStatus(sender, target) {
    if ($("#Button4").is(":visible") == false && target == 'Button4') {
        target = 'Button2';
    }
    else if (($("#Button4").is(":visible") == true && target == 'Button4')) {
        target = 'Button4';
    }
    if ($("#Button6").is(":visible") == false && target == 'Button6') {
        target = 'Button1';
    }
    else if (($("#Button6").is(":visible") == true && target == 'Button6')) {
        target = 'Button6';
    }
  
        if (sender.value.length >= 2) {
            document.getElementById(target).disabled = false;
        }
        else {
            document.getElementById(target).disabled = true;
        }
    
   
}
function SetButtonEnter(sender, target) {
   

    if (document.getElementById("nameenter").value.length >= 2 && document.getElementById("password").value.length >= 2) {
        document.getElementById(target).disabled = false;
    }
    else {
        document.getElementById(target).disabled = true;
    }


}