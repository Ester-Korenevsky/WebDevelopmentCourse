
$(document).ready(function () {

    $('.carousel').carousel();

    $(".clickedQ").hide();
 
    if ($("body").height() < $(window).height()) {
        $('#myfooter').css('position', 'absolute');
        $('#myfooter').css('bottom', 0);
        console.log("הטקסט" + $("body").height());
        console.log("המסך" + $(window).height());

    }
   
    var myactivity = [["גינון", "פעילות בגינה יכולה לשפר את המיומנויות המוטוריות"], ["יצירה", "ניתן ליצור פעילויות מחומרים בסיסיים, לפסל ולצייר"], [" בישול ואפייה", "העשייה במטבח מפעילה מספר חושים"]];
    $("#info").text(myactivity[0][0]);
    $("#infoP").text(myactivity[0][1]);

    $("#myCarousel").on('slide.bs.carousel', function () {
         currentIndex = $('div.active').index()+1;
         console.log(currentIndex);
         if (currentIndex == 0) {
             $("#info").text(myactivity[0][0]);
             $("#infoP").text(myactivity[0][1]);


         }
        if (currentIndex == 1) {
            $("#info").text(myactivity[1][0]);
            $("#infoP").text(myactivity[1][1]);


        }
        if (currentIndex == 2) {
            $("#info").text(myactivity[2][0]);
            $("#infoP").text(myactivity[2][1]);


        }
        if (currentIndex == 3) {
            $("#info").text(myactivity[0][0]);
            $("#infoP").text(myactivity[0][1]);


        }
    });

    var myQ = [[" מה הסיבות למחלת אלצהיימר?", "הסיבה למחלה עדיין לא ידועה וטרם נמצאה לה תרופה. קיים רצון למצוא את הסיבות והתרופות למחלה לכן מתנהלים מחקרים רבים בעולם בנושא זה וגם בנושא מניעת המחלה"],
     [" מהו הטיפול התרופתי במחלת אלצהיימר?", "למחלת אלצהיימר עדיין אין מרפא. בעולם וגם בישראל קיימות מספר תרופות לטיפול בהידרדרות יכולת הזיכרון והחשיבה. במרכזים שונים נערכים טיפולים בתרופות ניסיוניות"],
          ["מה שכיחות המחלה?", "בישראל כ 150,000 ישראלים החולים במחלת אלצהיימר ומחלות מקורבות. בארהב כ-5 מיליון אמריקאים חולים במחלה. ככל שעולה תוחלת החיים, גדלה שכיחותה של מחלת אלצהיימר"],
    ["האם ההתנהגויות מכוונות כלפי המשפחה והסביבה התומכת?", "צריך לזכור תמיד, ההפרעות ההתנהגותיות הן חלק מהמחלה ומהביטויים שלה, הן אינן מכוונת כלפי אף אחד ולא נובעות מתוך רוע או כפיות טובה כלפי הסביבה התומכת. "],
        ["האם יש דרך מסוימת שבה כדאי לתקשר עם החולה?", "כדאי לדבר אל האדם החולה בצורה חיובית, מלאת קשב, כבוד וכשווה בין שווים. חשוב לתת לאדם תחושה של בעלי ערך ולהמנע משאילת שאלות מכשילות."]];



    $("#Select1").change(function () {

        $(".clickedQ").show(200);

        var i = $(this).children("option:selected").val();


        $("#TheQuestion").text(myQ[i][0]);
        $("#TheAnswer").text(myQ[i][1]);

    });


});


