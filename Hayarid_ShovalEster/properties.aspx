<%@ Page Language="C#" AutoEventWireup="true" CodeFile="properties.aspx.cs" Inherits="properties" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    


     <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>היריד</title>
    <meta name="description" content="name of game" />
    <meta name="keywords" content="" />
    <meta name="author" content="names" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="JavaScript.js" type="text/javascript"></script>



    <!-- CSS -->
    <!--Bootstrap 3 css file-->
    <link href="bootstrap/css/bootstrap.css" rel="stylesheet" />
    <!--Bootstrap non-responsive css file (just add class "non-responsive" to the body tag)-->
    <link href="bootstrap/css/bootstrap-non-responsive.css" rel="stylesheet" />
    <!--Bootstrap fixes for hebrew (add class='rtl' to the body tag)-->
    <link href="bootstrap/css/bootstrap-rtl.css" rel="stylesheet" />
    <!--Bootstrap them - for changing the shape and colors of bootstrap objects like buttons-->
    <!--<link href="bootstrap/css/bootstrap-theme.css" rel="stylesheet" />-->
    <!--The only file you should right your css-->
    <link href="styles/myStyle.css" rel="stylesheet" />

    <link href="https://fonts.googleapis.com/css?family=Assistant:400,700&amp;subset=hebrew" rel="stylesheet"/>

    <!-- Scripts -->
    <!--jQuery library-->
    <script src="jScripts/jquery-1.12.0.min.js"></script>
    <!--Bootstrap library-->
    <script src="bootstrap/js/bootstrap.min.js"></script>
    
    <link rel="stylesheet" type="text/css" href="StyleSheet.css" />
     <style type="text/css">
         .auto-style1 {
             right: 0px;
             top: 373px;
         }
     </style>
    </head>
<body dir="rtl">
      <div id="container" class="container-full">
        <nav class="navbar navbar-default" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="brand" href="indextest.html">
                    <!-- UNCOMMENT THE CSS VALUES TO TEST OTHER DIMENTIONS -->
                    <!-- <img src="http://placehold.it/150x80&text=Logo" alt=""> -->
                    <img id="logo" src="logo.svg" />
                    <!--<img src="http://placehold.it/150x50&text=Logo" alt="">-->
                </a>
                <!--<a class="navbar-brand">בילד-אפ</a>-->
            </div>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="nav navbar-nav navbar-left">
                    <li><a data-toggle="modal" >עזרה</a></li>
                    <li><a href="#about" data-toggle="modal" data-target="#about">אודות</a></li>
                    
                    <li><a href="indextest.html" >למשחק</a></li>

                </ul>
            </div>
        </nav>


        <div class="modal fade" id="howToPlay">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h3 class="modal-title b">הוראות</h3>
                    </div>
                    <div class="modal-body">
                        <div id="insPic">
                           
                        </div>
                        <div>
                            <p class="b sizeIt"><iframe width="500" height="375" src="https://www.youtube.com/embed/IMNjGR2C2Ng?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>
                     
                        </div>

                    </div>
                    <div class="modal-footer">
                        <a href="#" data-dismiss="modal" class="btn btn-primary">סגור</a>
                        <!--<a href="#" class="btn btn-primary">סגור</a>-->
                    </div>
                </div>
            </div>
        </div>


        <div class="modal fade" id="about">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h3 class="modal-title b">אודות</h3>
                    </div>
                    <div class="modal-body royal">
                        <div id="aboutLogo">
                            <img src="logo2.png" id="aboutLogoSrc" />
                        </div>
                        <div>
                            <p class="b x-large"></p><br />
                            <p class="b x-large">אפיון ופיתוח: <span id="names4">אסתר קורנבסקי ושובל שירום</span></p><br/>
                             <p class="b x-large1">
                                פותח במסגרת פרויקט בקורסים: <br />
                                סביבות לימוד אינטראקטיביות 2 + תכנות 2 + תכנות אינטראקטיבי 2 תשע"ח
                            </p>
                            <img src="hitLogo.png" id="aboutLogoSrc2" />
                            <p id="hit">
                                <a href="//www.hit.ac.il/telem/overview" target="_blank">הפקולטה לטכנולוגיות למידה</a>
                                  <span id="telem">מכון טכנולוגי חולון</span> </p>
                                </div>
                            </div>



                        </div>

                    </div>
                  
                </div>
            </div>
        
   




    <form id="formP" runat="server">
    <div>
    
    </div>
        <asp:Label ID="LabelPro" runat="server" Text="הגדרות משחק"></asp:Label>
        <br />
        <br />
        שם המשחק:<asp:TextBox ID="ProperGameName" runat="server" Width="282px" onkeypress="return check(event)" onkeyup="SetButtonStatus(this, 'saveC')" MaxLength="40"></asp:TextBox>
        <br />
        <br />
        זמן לפריט:&nbsp;&nbsp;&nbsp; <asp:DropDownList ID="DropDownList1" runat="server" Height="18px" Width="65px">
            <asp:ListItem>20</asp:ListItem>
            <asp:ListItem Selected="True">30</asp:ListItem>
            <asp:ListItem>40</asp:ListItem>
            <asp:ListItem Value="no">ללא</asp:ListItem>
        </asp:DropDownList>
        <br />
        <br />
        <p>
            <asp:Button ID="Button1" runat="server" OnClick="Button1_Click" Text="חזור לדף הבית" />
            <asp:Button ID="saveC" runat="server" OnClick="saveC_Click" Text="שמור" />
        </p>
        <p>
        </p>
    </form>
</body>
</html>
