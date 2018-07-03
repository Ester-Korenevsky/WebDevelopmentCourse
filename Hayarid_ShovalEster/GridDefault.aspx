<%@ Page Language="C#" AutoEventWireup="true" CodeFile="GridDefault.aspx.cs" Inherits="GridDefault" %>

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
                            <p class="b x-large">אפיון ופיתוח: <span id="names3">אסתר קורנבסקי ושובל שירום</span></p><br/>
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
        



    <form id="form1" method="post" runat="server">
    <div id="addingGame">
  
        הוסף משחק<asp:TextBox ID="GameText" keyup="keyup1" placeholder="הקלד את שם המשחק" runat="server" onkeypress="return check(event)" MaxLength="40" onkeyup="SetButtonStatus(this, 'Button1game')"></asp:TextBox>
    
        <asp:Button ID="Button1game" runat="server" Text="הוסף" OnClick="Button1_Click1"  Enabled="false" />
   
            <asp:Label ID="limitG" runat="server" Text="Label"></asp:Label>

    </div>
        <div id="grid">
        <asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/trees/XMLFile.xml" XPath="/Hayarid/Game"></asp:XmlDataSource>
<asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="XmlDataSource1" OnRowCommand="GridView1_RowCommand" BackColor="#CCCCCC" BorderColor="#999999" BorderStyle="Solid" BorderWidth="2px" CellPadding="4" CellSpacing="2" ForeColor="Black" Width="815px" >
            <Columns>
                <asp:TemplateField HeaderText="שם המשחק">
	<ItemTemplate>
		<asp:Label ID="NameLabel" runat="server" Text='<%#Server.UrlDecode(XPathBinder.Eval(Container.DataItem, "@gamename").ToString())%>'> </asp:Label>
	</ItemTemplate>
</asp:TemplateField>
                
                  <asp:TemplateField HeaderText="קוד">
	<ItemTemplate>
		<asp:Label ID="CodeLabel" runat="server" Text='<%#Server.UrlDecode(XPathBinder.Eval(Container.DataItem, "@gamecode").ToString())%>'> </asp:Label>
	</ItemTemplate>
</asp:TemplateField>
             
                <asp:TemplateField HeaderText="הגדרות">
	<ItemTemplate>
		<asp:ImageButton ID="properties" theItemId='<%#XPathBinder.Eval(Container.DataItem,"@id")%>' runat="server" ImageUrl="~/images/properties.png" CommandName="properties_btn" />
	</ItemTemplate>
</asp:TemplateField>
                 <asp:TemplateField HeaderText="עריכה">
	<ItemTemplate>
		<asp:ImageButton ID="editImageButton" theItemId='<%#XPathBinder.Eval(Container.DataItem,"@id")%>' runat="server" ImageUrl="~/images/EditGame.png" CommandName="edit" />
	</ItemTemplate>
</asp:TemplateField>
               
                 <asp:TemplateField HeaderText="מחיקה">
	<ItemTemplate>
		<asp:ImageButton ID="DeleteImageButton" theItemId='<%#XPathBinder.Eval(Container.DataItem,"@id")%>' runat="server" ImageUrl="~/images/DeleteGame.png" CommandName="deleteRow" />
	</ItemTemplate>
</asp:TemplateField>
                 <asp:TemplateField HeaderText="פרסום">
	<ItemTemplate>
             <asp:CheckBox ID="PublishLabel" runat="server"  AutoPostBack="true" OnCheckedChanged="SelectCheckBox_OnCheckedChanged" /> 

	</ItemTemplate>
</asp:TemplateField>
             
            </Columns>
            <FooterStyle BackColor="#CCCCCC" />
            <HeaderStyle BackColor="White" Font-Bold="True" ForeColor="Black" />
            <PagerStyle BackColor="#CCCCCC" ForeColor="Black" HorizontalAlign="Center" />
            <RowStyle BackColor="White" />
            <SelectedRowStyle BackColor="#000099" HorizontalAlign="Center" Font-Bold="True" ForeColor="White" />
            <SortedAscendingCellStyle BackColor="#F1F1F1" />
            <SortedAscendingHeaderStyle BackColor="#808080" />
            <SortedDescendingCellStyle BackColor="#CAC9C9" />
            <SortedDescendingHeaderStyle BackColor="#383838" />
        </asp:GridView>
            </div>
        <br />
        <asp:Panel ID="BackPanel" runat="server">
        </asp:Panel>
        <asp:Panel ID="DeleteGame" runat="server">
            <asp:Label ID="GameN" runat="server" Text="Label"></asp:Label>
            <br />
            <br />
            <asp:Button ID="OkGame" keyup="keyup1" runat="server" Height="31px" OnClick="OkGame_Click" Text="אישור" Width="71px" />
            <asp:Button ID="CancelGame" runat="server" OnClick="CancelGame_Click" Text="ביטול" Width="70px" />

           

        </asp:Panel>
    </form>
</body>
</html>
