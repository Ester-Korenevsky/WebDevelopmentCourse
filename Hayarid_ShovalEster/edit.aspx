<%@ Page Language="C#" AutoEventWireup="true" CodeFile="edit.aspx.cs" Inherits="_Default" %>


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
        
   




       
    <form id="form1" runat="server">
        <div id="adding">
           <%-- <span class="imageedit"></span>
            <span class="editpage">דף עריכה </span>--%>
             <div class="yarid"></div>
        <p>
                    <asp:Label ID="LabelG" runat="server" Text="Label"></asp:Label>
                </p>
           
                 <span class="titles">קטגוריה</span>: <asp:TextBox ID="TextBox1" placeholder="הקלד קטגוריה" runat="server" onkeypress="return check(event)" onkeyup="SetButtonStatus(this,'Button6')"  Width="180px"  MaxLength="20" ></asp:TextBox>
        <asp:Button ID="Button6" runat="server" OnClick="Button6_Click" Text="הוסף" Enabled="false" />
                    <asp:Button ID="Button1" runat="server" Text="שמור עדכון" OnClick="Button1_Click" Width="123px" />

                    <br />
                    <asp:Label ID="limitCate" runat="server" Text="Label"></asp:Label>
                    <br />
             <div id="category">
                   <span class="titles">הקטגוריות</span> <asp:ImageButton ID="Button3" runat="server" ImageUrl="~/images/edit.png" OnClick="Button3_Click1" Height="17px" Width="18px" />
                 
        <asp:ImageButton ID="Button5" runat="server" ImageUrl="~/images/delete.png" OnClick="Button5_Click1" Height="21px" Width="20px" />
                  
                  <asp:Label ID="MinC" runat="server" Text="מינימום 3 קטגוריות"></asp:Label>
                   <br />
            
        <asp:ListBox ID="ListBox1" runat="server" AutoPostBack="True" Height="172px" OnSelectedIndexChanged="ListBox1_SelectedIndexChanged" Width="245px"></asp:ListBox>
           </div>

  
                <br />
                    <span class="titles">פריט</span>                   
                    <br />
                    <asp:RadioButtonList RepeatDirection="Horizontal" ID="RadioButtonList1"  runat="server" AutoPostBack="True" OnSelectedIndexChanged="RadioButtonList1_SelectedIndexChanged">
                        <asp:ListItem  Selected="True" Value="txt">טקסט</asp:ListItem>
                        <asp:ListItem Value="pic">תמונה</asp:ListItem>
                    </asp:RadioButtonList>
                    <asp:FileUpload  ID="FileUpload1" runat="server" onchange="readURL(this)" />
                 

                    <asp:TextBox ID="TextBox2" placeholder="הקלד פריט" runat="server" onkeypress="return check(event)"  onkeyup="SetButtonStatus(this, 'Button4')" TextMode="MultiLine" MaxLength="60" ></asp:TextBox>
            
           
         <br />
                    <asp:Label ID="limitepar" runat="server" Text="Label"></asp:Label>
            
           
        <asp:Button ID="Button4" runat="server" OnClick="Button4_Click" Text="הוסף" Width="63px" Enabled="false" />
            
            <asp:Button ID="Button2" runat="server" OnClick="Button2_Click" Text="שמור עדכון" />
         </div>  

           
                    <asp:Image ID="Image1" runat="server" CssClass="auto-style1" />
       
  <div id="mainP">   
      <span class="titles">הפריטים</span>     
          <asp:Label ID="MinP" runat="server" Text="מינימום 5 פריטים בכל קטגוריה"></asp:Label>      
      <asp:Button ID="Button7" runat="server" OnClick="Button7_Click" Text="חזרה לדף הבית" />
      
        <asp:Panel ID="Panel1" runat="server">
        </asp:Panel>
    
    </div>
       
        <asp:Panel ID="deleteParit" runat="server">
            
            <div>
                <asp:Label ID="labelParit" runat="server" Text="Label"></asp:Label>
                <br />
            <asp:Button ID="ok" runat="server"  keyup="keyup1" OnClick="ok_Click" Text="אישור" />
            <asp:Button ID="cancel" runat="server" OnClick="cancel_Click" Text="ביטול" />
                </div>
        </asp:Panel>
        
        <asp:Panel ID="deleteCategory"  runat="server">
            <asp:Label ID="LabelCate" runat="server" Text="Label"></asp:Label>
            <br />
            <asp:Button ID="OkCate" keyup="keyup1" runat="server" OnClick="cancelCte_Click" Text="אישור" />
            <asp:Button ID="cancelCte" runat="server" OnClick="OkCate_Click" Text="ביטול" />
        </asp:Panel>
        <asp:Panel ID="BackPanel" runat="server">
        </asp:Panel>
              
       
      
    </form>
    </body>
</html>
