
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

    $('.carousel').carousel();//הפעלת קרוסלת התמונות בעמוד התנהגות חוזרת
    $(".clickedQ").hide(); //הסתרת קוביית התשובה לשאלה נפוצה טרם לחיצה על שאלה מסוימת


    //בעמוד התנהגות חוזרת, בכל מעבר בין תמונות בקרוסלה הכיתוב מעליה משתנה בהתאם למיקום התמונה

    var myactivity = [["גינון", "פעילות בגינה יכולה לשפר את המיומנויות המוטוריות"], ["יצירה", "ניתן ליצור פעילויות מחומרים בסיסיים, לפסל ולצייר"], [" בישול ואפייה", "העשייה במטבח מפעילה מספר חושים"]];
    $("#info").text(myactivity[0][0]);
    $("#infoP").text(myactivity[0][1]);

    $("#myCarousel").on('slide.bs.carousel', function () {
        currentIndex = $('div.active').index()+1;
        console.log(currentIndex);
        if (currentIndex == 0 || currentIndex == 3) {
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
     
    });

    //בסיס הנתונים לרשימת השאלות הנפוצות

    var myQ ={
        "questions":
            [{ "thequestion": "מה הסיבות למחלת אלצהיימר?", "theanswer": "הסיבה למחלה עדיין לא ידועה וטרם נמצאה לה תרופה. קיים רצון למצוא את הסיבות והתרופות למחלה לכן מתנהלים מחקרים רבים בעולם בנושא זה וגם בנושא מניעת המחלה." },
            {"thequestion":" מהו הטיפול התרופתי במחלת אלצהיימר?","theanswer":"למחלת אלצהיימר עדיין אין מרפא. בעולם וגם בישראל קיימות מספר תרופות לטיפול בהידרדרות יכולת הזיכרון והחשיבה. במרכזים שונים נערכים טיפולים בתרופות ניסיוניות."},
            {"thequestion":"מה שכיחות המחלה?","theanswer": "בישראל כ 150,000 ישראלים החולים במחלת אלצהיימר ומחלות מקורבות. בארצות הברית כ-5 מיליון אמריקאים חולים במחלה. ככל שעולה תוחלת החיים, גדלה שכיחותה של מחלת אלצהיימר."},
            {"thequestion":"האם ההתנהגויות מכוונות כלפי המשפחה והסביבה התומכת?","theanswer":"צריך לזכור תמיד, ההפרעות ההתנהגותיות הן חלק מהמחלה ומהביטויים שלה, הן אינן מכוונת כלפי אף אחד ולא נובעות מתוך רוע או כפיות טובה כלפי הסביבה התומכת. "},
            { "thequestion": "האם יש דרך מסוימת שבה כדאי לתקשר עם החולה?", "theanswer": "כדאי לדבר אל האדם החולה בצורה חיובית, מלאת קשב, כבוד וכשווה בין שווים. חשוב לתת לאדם תחושה של בעלי ערך ולהמנע משאילת שאלות מכשילות." }]
    };

    
    // ID בעמוד שאלות נפוצות בכל לחיצה על שאלה התשובה תתחלף משמאל בהתאם ל
    //class באמצעות הוספת ACTIVE בכל לחיצה השאלה הופכת ל 
    $("#Qgroup button").click(function () { 
        $(".clickedQ").show();
        var btnID = $(this).attr('id');
        var clickedID = btnID.split("");
        var TheQnum = clickedID[1];
        console.log(TheQnum);
        $("#Qgroup button").removeClass("active");
        $(this).addClass("active");
        $("#TheQuestion").text(myQ.questions[TheQnum].thequestion);
        $("#TheAnswer").text(myQ.questions[TheQnum].theanswer);

    });



  
   

});

