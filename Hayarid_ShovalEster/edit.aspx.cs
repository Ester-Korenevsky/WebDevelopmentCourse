using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;
using System.Drawing.Imaging;
using System.Drawing.Drawing2D;
using System.IO;


public partial class _Default : System.Web.UI.Page
{
    string imagesLibPath = "UploadedFiles/";
    protected void Page_Load(object sender, EventArgs e)
    {
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        XmlNode mygame = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']");
        LabelG.Text = mygame.Attributes["gamename"].Value;
        Button6.Enabled = false;



        if (RadioButtonList1.SelectedValue == "pic")
        {
            Button4.Enabled = true;
            limitepar.Visible = false;
            FileUpload1.Visible = true;

        }
        else if (RadioButtonList1.SelectedValue == "txt")
        {
            Button4.Enabled = false;

            FileUpload1.Visible = false;
            Image1.Visible = false;
        }


        limitCate.Text = " עד 20 תווים";
        limitepar.Text = "עד 60 תווים";
        if (!IsPostBack)
        {
            TextBox2.Attributes.Add("maxlength", "60");
        }
        limitepar.Visible = true;
        deleteParit.Visible = false;
        deleteCategory.Visible = false;
        BackPanel.Visible = false;

        if (Convert.ToInt16(mygame.Attributes["categorycounter"].Value) == 0)

        {
            RadioButtonList1.Enabled = false;
            limitepar.Visible = false;
            TextBox2.Visible = false;
            Button4.Visible = false;
            RadioButtonList1.ToolTip = "להוספת פריטים נדרשות קטגוריות";
            Button5.Visible = false;
            Button3.Visible = false;
        }
        else if (Convert.ToInt16(mygame.Attributes["categorycounter"].Value) >= 0)
        {
            RadioButtonList1.Enabled = true;
            limitepar.Visible = true;
            TextBox2.Visible = true;
            Button4.Visible = true;
            Button5.Visible = true;
            Button5.ToolTip = "מחיקת קטגוריה נבחרת";
            Button3.Visible = true;
            Button3.ToolTip = "עריכת קטגוריה נבחרת";

        }

        if (mygame.Attributes["categorycounter"].Value == "4")
        {
            TextBox1.Enabled = false;
            Button6.Visible = false;
            limitCate.Visible = false;
            TextBox1.Attributes.Add("placeholder", "");
        }
        else
        {
            TextBox1.Enabled = true;
            limitCate.Visible = true;
            TextBox1.Attributes.Add("placeholder", "הקלד קטגוריה");
        }
        Button2.Visible = false;
        Button1.Visible = false;

        checkForPublish();
        if (Page.IsPostBack == false)
        {
            updateListBox1();
            if (ListBox1.Items.Count > 0)
            {
                ViewState["counter"] = 0;
                ListBox1.SelectedIndex = 0;
                int selectedCategory = Convert.ToInt16(ListBox1.SelectedValue);
                XmlNode myCategory = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(selectedCategory);

                int noPritim = myCategory.ChildNodes.Count - 1;
                if (noPritim >= 0)
                {
                    GeneratePritim(noPritim);
                }
                if ((mygame.Attributes["categorycounter"].Value == "4") || (mygame.Attributes["categorycounter"].Value == "3"))
                {
                    MinC.ForeColor = System.Drawing.Color.Green;
                }
                XmlNodeList myCategorys = myDoc.SelectNodes("//Game[@id='" + myGameNum + "']/Category");
                bool paritok = true;
                int counCategory = myCategorys.Count;


                for (int i = 0; i < counCategory; i++)
                {
                    if ((Convert.ToInt16(mygame.ChildNodes.Item(i).Attributes["paritcounter"].Value) < 5))
                    {
                        paritok = false;

                    }
                }
                if (paritok == true)
                {
                    MinP.ForeColor = System.Drawing.Color.Green;
                }
            }

        }
        else
        {
            if (ListBox1.Items.Count > 0)
            {

                int selectedCategory = Convert.ToInt16(ListBox1.SelectedValue);
                XmlNode myCategory = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(selectedCategory);

                int noPritim = myCategory.ChildNodes.Count - 1;
                if (noPritim >= 0)
                {
                    GeneratePritim(noPritim);
                }
                if ((mygame.Attributes["categorycounter"].Value == "4") || (mygame.Attributes["categorycounter"].Value == "3"))
                {
                    MinC.ForeColor = System.Drawing.Color.Green;

                }
                

            }


        }

    }

    protected void checkForPublish()//בדיקה האם ניתן לפרסם
    {

        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        XmlNode mygame = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']");
        XmlNodeList myCategorys = myDoc.SelectNodes("//Game[@id='" + myGameNum + "']/Category");
        int categoryMany = myCategorys.Count;

        int counCategory = myCategorys.Count;
        bool ifPublishOK = true;


        if (counCategory >= 3)
        {

            for (int i = 0; i < counCategory; i++)
            {
                if ((Convert.ToInt16(mygame.ChildNodes.Item(i).Attributes["paritcounter"].Value) < 5))
                {
                    ifPublishOK = false;
                }


            }
            mygame.Attributes["published"].Value = ifPublishOK.ToString();

            myDoc.Save(MapPath("trees/XMLFile.xml"));
        }
        else
        {
            ifPublishOK = false;
            mygame.Attributes["published"].Value = ifPublishOK.ToString();

            myDoc.Save(MapPath("trees/XMLFile.xml"));
        }
    }

    protected void GeneratePritim(int nop)//בלחיצה על אחת הקטגוריות מופעלת הפונקציה להצגת הפריטים
    {

        int selectedCategory = Convert.ToInt16(ListBox1.SelectedValue);
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        XmlNode myCategory = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(selectedCategory);

        if (nop >= 0)
        {

            for (int x = 0; x <= nop; x++)
            {

                if (myCategory.ChildNodes.Item(x).Attributes["type"].Value == "text")
                {
                    Panel mypanelT = new Panel();
                    mypanelT.ID = "panelT" + x.ToString();
                    mypanelT.CssClass = "Pane";

                    Panel mypanelDesign = new Panel();
                    mypanelDesign.ID = "designP" + x.ToString();
                    mypanelDesign.CssClass = "designP";

                    Label mylabel = new Label();
                    mylabel.ID = "Label" + x.ToString();
                    mylabel.Text = myCategory.ChildNodes.Item(x).InnerXml;
                    mylabel.CssClass = "LabelC";
                    




                    ImageButton DeleteBTN = new ImageButton();
                    DeleteBTN.ImageUrl = "~/images/delete.png ";
                    DeleteBTN.ID = "deleteI" + x.ToString();
                    DeleteBTN.CssClass = "DeleteB";

                    ImageButton EditBTN = new ImageButton();
                    EditBTN.ImageUrl = "~/images/edit.png";
                    EditBTN.ID = "editI" + x.ToString();
                    EditBTN.CssClass = "EditB";


                    EditBTN.Click += edit_text;
                    DeleteBTN.Click += delete_Show;

                    mypanelDesign.Controls.Add(EditBTN);
                    mypanelDesign.Controls.Add(DeleteBTN);


                    mypanelT.Controls.Add(mylabel);
                    mypanelT.Controls.Add(mypanelDesign);

                    Panel1.Controls.Add(mypanelT);


                }



                else
                {

                    Panel panelPic = new Panel();
                    panelPic.ID = "panelPic" + x.ToString();
                    panelPic.CssClass = "Pane";

                    Panel mypanelDesignP = new Panel();
                    mypanelDesignP.ID = "designPIC" + x.ToString();
                    mypanelDesignP.CssClass = "designPIC";


                    Image picturebox = new Image();
                    picturebox.ID = "picturebox" + x.ToString();
                    picturebox.ImageUrl = myCategory.ChildNodes.Item(x).InnerXml;
                    picturebox.CssClass = "imageC";

                    using (System.Drawing.Image img =
                    System.Drawing.Image.FromFile(Server.MapPath(picturebox.ImageUrl)))
                    {
                        picturebox.Width = new Unit(img.Width);
                        picturebox.Height = new Unit(img.Height);

                        if (Convert.ToInt16(img.Width) > Convert.ToInt16(img.Height))
                        {
                            picturebox.Width = 108;
                            int smaller = img.Width / 108;
                            int newH = Convert.ToInt16(img.Height / (smaller));
                            picturebox.Height = new Unit(newH);


                        }
                        else if (Convert.ToInt16(img.Width) < Convert.ToInt16(img.Height))
                        {
                            picturebox.Height = 87;
                            int newsize = img.Height / 87;
                            int newW = Convert.ToInt16(img.Width / (newsize));
                            picturebox.Width = new Unit(newW);
                        }
                        else
                        {
                            picturebox.Width = 91;
                            picturebox.Height = 91;
                        }

                    }


                    ImageButton DeleteBTN = new ImageButton();
                    DeleteBTN.ImageUrl = "~/images/delete.png ";
                    DeleteBTN.ID = "deleteI" + x.ToString();
                    DeleteBTN.CssClass = "DeleteB";

                    ImageButton EditBTNP = new ImageButton();
                    EditBTNP.ImageUrl = "~/images/edit.png";
                    EditBTNP.ID = "editI" + x.ToString();
                    EditBTNP.CssClass = "EditBP";


                    EditBTNP.Click += edit_Pic;
                    DeleteBTN.Click += delete_pic;

                    mypanelDesignP.Controls.Add(EditBTNP);
                    mypanelDesignP.Controls.Add(DeleteBTN);


                    panelPic.Controls.Add(picturebox);
                    panelPic.Controls.Add(mypanelDesignP);

                    Panel1.Controls.Add(panelPic);


                }
                Panel1.DataBind();

            }
        }
        else
        {

        }
    }
    protected void edit_Pic(object sender, EventArgs e)//עריכת פריט תמונה
    {
        Button4.Visible = false;
        Button2.Visible = true;
        Button2.Enabled = false;
        TextBox1.Text = "";
        int selectedCategory = Convert.ToInt16(ListBox1.SelectedValue);
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        ImageButton button = (ImageButton)sender;
        string buttonId = button.ID;
        string str = buttonId;
        char c = str[5];
        TextBox2.Visible = false;
        FileUpload1.Visible = true;
        Image1.Visible = true;
        Image1.ImageUrl = "";
        RadioButtonList1.SelectedValue = "pic";
        limitepar.Visible = false;
        int mikum = c - 48;
        ViewState["changeP"] = mikum;

        XmlNode myCategory = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(selectedCategory);

        Image1.ImageUrl = myCategory.ChildNodes.Item(mikum).InnerXml;




    }

    protected void edit_text(object sender, EventArgs e) //עריכת פריט טקסט
    {
        Button6.Visible = true;
        limitCate.Visible = true;
        Button4.Visible = false;
        Button2.Visible = true;
        RadioButtonList1.SelectedValue = "txt";
        Image1.Visible = false;
        FileUpload1.Visible = false;
        int selectedCategory = Convert.ToInt16(ListBox1.SelectedValue);
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        Button2.Visible = true;
        Button4.Visible = false;
        ImageButton button = (ImageButton)sender;
        string buttonId = button.ID;
        string str = buttonId;
        char c = str[5];
        int mikum = c - 48;
        ViewState["changeP"] = mikum;
        XmlNode mygame = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']");
        XmlNode myCategory = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(selectedCategory);
        TextBox2.Text = myCategory.ChildNodes.Item(mikum).InnerXml;

        if (mygame.Attributes["categorycounter"].Value == "4")
        {
            Button6.Visible = false;
            limitCate.Visible = false;
        }
        TextBox1.Text = "";
    }

    protected void delete_Show(object sender, EventArgs e)//הצגת פאנל פריט מסוג טקסט
    {
        deleteParit.Visible = true;
        BackPanel.Visible = true;
        Button6.Visible = true;
        FileUpload1.Visible = false;
        Image1.Visible = false;
        RadioButtonList1.SelectedValue = "txt";
        int selectedCategory = Convert.ToInt16(ListBox1.SelectedValue);
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        ImageButton button = (ImageButton)sender;
        string buttonId = button.ID;
        string str = buttonId;
        char c = str[7];
        int mikum = c - 48;
        ViewState["mikum"] = mikum;
        XmlNode mygame = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']");
        XmlNode myCategory = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(selectedCategory);
        labelParit.Text = "האם אתה בטוח כי ברצונך למחוק את הפריט" + " " + "\"" + myCategory.ChildNodes.Item((int)ViewState["mikum"]).InnerXml + "\"?";

        if (mygame.Attributes["categorycounter"].Value == "4")
        {
            Button6.Visible = false;
            limitCate.Visible = false;
        }

    }

    protected void delete_pic(object sender, EventArgs e)//פאנל להצגת מחיקת פריט מסוג תמונה
    {
        Button6.Visible = true;
        deleteParit.Visible = true;
        BackPanel.Visible = true;
        FileUpload1.Visible = false;
        Image1.Visible = false;
        RadioButtonList1.SelectedValue = "txt";
        TextBox2.Text = "";
        int selectedCategory = Convert.ToInt16(ListBox1.SelectedValue);
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        ImageButton button = (ImageButton)sender;
        string buttonId = button.ID;
        string str = buttonId;
        char c = str[7];
        int mikum = c - 48;
        ViewState["mikum"] = mikum;
        XmlNode mygame = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']");
        XmlNode myCategory = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(selectedCategory);
        labelParit.Text = "האם אתה בטוח כי ברצונך למחוק את הפריט" + "?";
        if (mygame.Attributes["categorycounter"].Value == "4")
        {
            Button6.Visible = false;
            limitCate.Visible = false;
        }

    }

    protected void updateListBox1()//יצירת רשימה כמספר הקטגוריות
    {


        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        XmlNodeList myCategorys = myDoc.SelectNodes("//Game[@id='" + myGameNum + "']/ Category");

        ListBox1.Items.Clear();


        for (int i = 0; i < myCategorys.Count; i++)
        {
            ListItem li = new ListItem();
            li.Text = myCategorys.Item(i).Attributes["categoryname"].Value + " " + "(" + myCategorys.Item(i).Attributes["paritcounter"].Value + ")";
            li.Value = i.ToString();
            ListBox1.Items.Add(li);


        }

    }


    protected void ListBox1_SelectedIndexChanged(object sender, EventArgs e)//פונקציה המפעילה את יצירת הפריטים והכנסת הטקסט לכל תיבה של קטגוריה
    {
        Button6.Visible = true;
        TextBox2.Text = "";
        TextBox1.Text = "";
        Image1.Visible = false;
        RadioButtonList1.SelectedValue = "txt";
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        int selectedCategory = Convert.ToInt16(ListBox1.SelectedValue);
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        XmlNode mygame = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']");
        XmlNode myCategory = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(selectedCategory);
        int noPritim = myCategory.ChildNodes.Count - 1;
        Panel1.Controls.Clear();
        GeneratePritim(noPritim);
        if (mygame.Attributes["categorycounter"].Value == "4") {
            Button6.Visible = false;
            limitCate.Visible = false;
        }
        if (RadioButtonList1.SelectedValue == "txt")
        {
            FileUpload1.Visible = false;
            Image1.Visible = false;
        }
        else
        {
            FileUpload1.Visible = true;
            Image1.Visible = true;
            Image1.ImageUrl = "";
        }

    }

    protected void Button2_Click(object sender, EventArgs e) //שמור עדכון פריט
    {

        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        int selectedCategory = Convert.ToInt16(ListBox1.SelectedValue);
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        XmlNode myCategory = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(selectedCategory);
        if (RadioButtonList1.SelectedValue == "txt")
        {
            myCategory.ChildNodes.Item((int)ViewState["changeP"]).InnerXml = TextBox2.Text;
        }
        else
        {
            System.IO.File.Delete(Request.PhysicalApplicationPath + myCategory.ChildNodes.Item((int)ViewState["changeP"]).InnerXml);



            string fileName = FileUpload1.PostedFile.FileName;
            // הסיומת של הקובץ
            string endOfFileName = fileName.Substring(fileName.LastIndexOf("."));
            String myTime = DateTime.Now.ToString("dd_MM_yy - HH_mm_ss");
            //שמירת השעה על השרת
            // חיבור השם החדש עם הסיומת של הקובץ
            string imageNewName = "imageNewName" + myTime + endOfFileName;           //שמירה של הקובץ לספרייה בשם החדש שלו

            FileUpload1.PostedFile.SaveAs(Server.MapPath(imagesLibPath) + imageNewName);

            System.Drawing.Image bitmap;
            using (var bmpTemp = new System.Drawing.Bitmap(Server.MapPath(imagesLibPath) + imageNewName))
            {
                bitmap = new System.Drawing.Bitmap(bmpTemp);
            }
            bitmap = FixedSize(bitmap, 217, 140);
            bitmap.Save(Server.MapPath(imagesLibPath) + imageNewName);

            myCategory.ChildNodes.Item((int)ViewState["changeP"]).InnerXml = imagesLibPath + imageNewName.ToString();

            myDoc.Save(MapPath("trees/XMLFile.xml"));
            FileUpload1.Visible = false;

        }
        if (RadioButtonList1.SelectedValue != "txt")
        {
            Image1.Visible = false;
        }


        myDoc.Save(MapPath("trees/XMLFile.xml"));
        int noPritim = myCategory.ChildNodes.Count - 1;
        Panel1.Controls.Clear();
        GeneratePritim(noPritim);
        TextBox2.Text = "";
        ViewState["changeP"] = "";
        RadioButtonList1.SelectedValue = "txt";
        Button4.Enabled = false;
    }


    protected void Button1_Click(object sender, EventArgs e)//שמירת שם הקטגוריה לאחר שינוי
    {

        Button6.Visible = true;
        limitCate.Visible = true;
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        int selectedCategory = Convert.ToInt16(ListBox1.SelectedValue);
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        XmlNode mygame = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']");
        XmlNode myCategory = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(selectedCategory);
        string selectedvalue = ListBox1.SelectedValue;
        ViewState["x"] = selectedvalue;
        myCategory.Attributes["categoryname"].Value = TextBox1.Text;

        myDoc.Save(MapPath("trees/XMLFile.xml"));
        TextBox1.Text = "";
        updateListBox1();
        ListBox1.SelectedValue = ViewState["x"].ToString();
        if (mygame.Attributes["categorycounter"].Value == "4")
        {
            Button6.Visible = false;
            limitCate.Visible = false;
        }
    }


    protected void Button4_Click(object sender, EventArgs e)//הוספת פריט חדש אל קטגוריה נבחרת
    {

        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        int selectedCategory = Convert.ToInt16(ListBox1.SelectedValue);
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        XmlNode myCategory = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(selectedCategory);
        string fileType = "";
         if (TextBox2.Visible == false)
        {
            fileType = FileUpload1.PostedFile.ContentType;

        }
        if (RadioButtonList1.SelectedValue == "txt")
        {
            FileUpload1.Visible = false;
            Image1.Visible = false;
            XmlElement myParit = myDoc.CreateElement("parit");
            XmlText myText = myDoc.CreateTextNode(TextBox2.Text);
            myParit.AppendChild(myText);
            myParit.SetAttribute("type", "text");
            myCategory.AppendChild(myParit);

            int ParitCount = Convert.ToInt16(myCategory.SelectSingleNode("@paritcounter").Value);
            ParitCount++;

            string newParitCount = ParitCount.ToString();
            myCategory.SelectSingleNode("@paritcounter").Value = newParitCount;

            myDoc.Save(MapPath("trees/XMLFile.xml"));
            int noPritim = myCategory.ChildNodes.Count - 1;
            Panel1.Controls.Clear();
            GeneratePritim(noPritim);
            TextBox2.Text = "";
            checkForPublish();
            ViewState["selectedCategory"] = selectedCategory;

            updateListBox1();
            ListBox1.SelectedValue = ViewState["selectedCategory"].ToString();
        }

        if (RadioButtonList1.SelectedValue == "pic")
        {
            FileUpload1.Visible = true;
            Image1.ImageUrl = "";
            Image1.Visible = true;
            //שמירת הנתיב המלא של הקובץ
            string fileName = FileUpload1.PostedFile.FileName;
            // הסיומת של הקובץ
            string endOfFileName = fileName.Substring(fileName.LastIndexOf("."));
            String myTime = DateTime.Now.ToString("dd_MM_yy - HH_mm_ss");
            //שמירת השעה על השרת
            // חיבור השם החדש עם הסיומת של הקובץ
            string imageNewName = "imageNewName" + myTime + endOfFileName;           //שמירה של הקובץ לספרייה בשם החדש שלו


            FileUpload1.PostedFile.SaveAs(Server.MapPath(imagesLibPath) + imageNewName);
            System.Drawing.Image bitmap;
            using (var bmpTemp = new System.Drawing.Bitmap(Server.MapPath(imagesLibPath) + imageNewName))
            {
                bitmap = new System.Drawing.Bitmap(bmpTemp);
            }
            bitmap = FixedSize(bitmap, 217, 140);
            bitmap.Save(Server.MapPath(imagesLibPath) + imageNewName);
            //Image1.ImageUrl = imagesLibPath + imageNewName;
            XmlElement myParit = myDoc.CreateElement("parit");
            XmlText myText = myDoc.CreateTextNode(imagesLibPath + imageNewName.ToString());
            myParit.AppendChild(myText);
            myParit.SetAttribute("type", "pic");
            myCategory.AppendChild(myParit);


            int ParitCount = Convert.ToInt16(myCategory.SelectSingleNode("@paritcounter").Value);
            ParitCount++;

            string newParitCount = ParitCount.ToString();
            myCategory.SelectSingleNode("@paritcounter").Value = newParitCount;

            myDoc.Save(MapPath("trees/XMLFile.xml"));
            int noPritim = myCategory.ChildNodes.Count - 1;
            Panel1.Controls.Clear();
            GeneratePritim(noPritim);
            TextBox2.Text = "";
            checkForPublish();
            ViewState["selectedCategory"] = selectedCategory;

            updateListBox1();
            ListBox1.SelectedValue = ViewState["selectedCategory"].ToString();
        }


        else
        {

            // הקובץ אינו תמונה ולכן לא ניתן להעלות אותו

        }
        FileUpload1.Visible = false;
        RadioButtonList1.SelectedValue = "txt";
        XmlNodeList myCategorys = myDoc.SelectNodes("//Game[@id='" + myGameNum + "']/Category");
        XmlNode mygame = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']");
        bool paritok = true;
        int counCategory = myCategorys.Count;

        if (mygame.Attributes["categorycounter"].Value != "4")
        {
            Button6.Visible = true;
            TextBox1.Text = "";
        }
        for (int i = 0; i < counCategory; i++)
        {
            if ((Convert.ToInt16(mygame.ChildNodes.Item(i).Attributes["paritcounter"].Value) < 5))
            {
                paritok = false;

            }
        }
        if (paritok == true)
        {
            MinP.ForeColor = System.Drawing.Color.Green;
        }
        
    }

    static System.Drawing.Image FixedSize(System.Drawing.Image imgPhoto, int Width, int Height)
    {
        int sourceWidth = Convert.ToInt32(imgPhoto.Width);
        int sourceHeight = Convert.ToInt32(imgPhoto.Height);
        int sourceX = 0;
        int sourceY = 0;
        int destX = 0;
        int destY = 0;

        float nPercent = 0;
        float nPercentW = 0;
        float nPercentH = 0;

        nPercentW = ((float)Width / (float)sourceWidth);
        nPercentH = ((float)Height / (float)sourceHeight);
        if (nPercentH < nPercentW)
        {
            nPercent = nPercentH;
            destX = System.Convert.ToInt16((Width -
                          (sourceWidth * nPercent)) / 2);
        }
        else
        {
            nPercent = nPercentW;
            destY = System.Convert.ToInt16((Height -
                          (sourceHeight * nPercent)) / 2);
        }

        int destWidth = (int)(sourceWidth * nPercent);
        int destHeight = (int)(sourceHeight * nPercent);

        System.Drawing.Bitmap bmPhoto = new System.Drawing.Bitmap(Width, Height,
                          PixelFormat.Format24bppRgb);
        bmPhoto.SetResolution(imgPhoto.HorizontalResolution,
                         imgPhoto.VerticalResolution);

        System.Drawing.Graphics grPhoto = System.Drawing.Graphics.FromImage(bmPhoto);
        grPhoto.Clear(System.Drawing.Color.White);
        grPhoto.InterpolationMode =
                InterpolationMode.HighQualityBicubic;

        grPhoto.DrawImage(imgPhoto,
            new System.Drawing.Rectangle(destX, destY, destWidth, destHeight),
            new System.Drawing.Rectangle(sourceX, sourceY, sourceWidth, sourceHeight),
            System.Drawing.GraphicsUnit.Pixel);

        grPhoto.Dispose();
        return bmPhoto;
    }

    protected void Button6_Click(object sender, EventArgs e)//הוספת קטגוריה חדשה
    {


        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        XmlNode mygame = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']");
        int categories = mygame.ChildNodes.Count;
        if (Button5.Visible == false)
        {
            Button5.Visible = true;
            Button5.ToolTip = "מחיקת קטגוריה נבחרת";
            Button3.Visible = true;
            Button3.ToolTip = "עריכת קטגוריה נבחרת";
        }


        int newID = 1;
        if (categories != 0)
        {
            string x = mygame.ChildNodes.Item(categories - 1).Attributes["id"].Value;
            newID = Convert.ToInt16(x) + 1;

        }

        XmlElement myNewC = myDoc.CreateElement("Category");
        myNewC.SetAttribute("id", newID.ToString());
        myNewC.SetAttribute("categoryname", TextBox1.Text);

        myNewC.SetAttribute("paritcounter", "0");
        mygame.AppendChild(myNewC);
        int CategoryC = Convert.ToInt16(mygame.SelectSingleNode("@categorycounter").Value);
        CategoryC++;

        string newCategoryCount = CategoryC.ToString();
        mygame.SelectSingleNode("@categorycounter").Value = newCategoryCount;

        myDoc.Save(MapPath("trees/XMLFile.xml"));
        int nocategory = mygame.ChildNodes.Count - 1;
        Panel1.Controls.Clear();
        TextBox1.Text = "";
        updateListBox1();
        ListBox1.SelectedValue = (this.ListBox1.Items.Count - 1).ToString();

        checkForPublish();
        if (mygame.Attributes["categorycounter"].Value == "4")
        {
            TextBox1.Enabled = false;
            Button6.Visible = false;
            limitCate.Visible = false;
            TextBox1.Attributes.Add("placeholder", "");
        }
        if (mygame.Attributes["categorycounter"].Value == "3" || mygame.Attributes["categorycounter"].Value == "4")
        {
            MinC.ForeColor = System.Drawing.Color.Green;
        }
        else
        {
            TextBox1.Enabled = true;
            TextBox1.Attributes.Add("placeholder", "הקלד קטגוריה");
        }
        if (Convert.ToInt16(mygame.Attributes["categorycounter"].Value) == 0)

        {
            RadioButtonList1.Enabled = false;
            limitepar.Visible = false;
            TextBox2.Visible = false;
            Button4.Visible = false;
            RadioButtonList1.ToolTip = "להוספת פריטים נדרשות קטגוריות";
        }
        else if (Convert.ToInt16(mygame.Attributes["categorycounter"].Value) >= 0)
        {
            RadioButtonList1.Enabled = true;
            limitepar.Visible = true;
            TextBox2.Visible = true;
            Button4.Visible = true;
        }
        MinP.ForeColor = System.Drawing.Color.Black;
        Image1.Visible = false;
        FileUpload1.Visible = false;
        RadioButtonList1.SelectedValue = "txt";
        
    }


    protected void Button3_Click1(object sender, ImageClickEventArgs e)//העברת הטקסט מהקטגוריה בליסט בוקס אל תיבת הטקסט של הקטגוריה לצורך עריכה
    {

        Button1.Visible = true;
        Button6.Visible = false;
        limitCate.Visible = false;
        int selectedCategory = Convert.ToInt16(ListBox1.SelectedValue);
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);

        XmlNode myCategory = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(selectedCategory);

        TextBox1.Text = myCategory.Attributes["categoryname"].Value;
        TextBox1.Enabled = true;
        TextBox2.Text = "";



    }



    protected void Button5_Click1(object sender, ImageClickEventArgs e)//הודעה המופיעה לצורך בדיקה במחיקת הקטגוריה
    {
        Button6.Visible = true;
        limitCate.Visible = true;
        int selectedCategory = Convert.ToInt16(ListBox1.SelectedValue);
        XmlDocument myDoc = new XmlDocument();
        ViewState["selected"] = selectedCategory;
        FileUpload1.Visible = false;
        Image1.Visible = false;
        RadioButtonList1.SelectedValue = "txt";
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        XmlNode myCategory = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(selectedCategory);
        deleteCategory.Visible = true;
        BackPanel.Visible = true;
        LabelCate.Text = "האם אתה בטוח כי ברצונך למחוק את הקטגוריה" + " " + "\"" + myCategory.Attributes["categoryname"].Value + "\"?";
        XmlNode mygame = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']");
        if (mygame.Attributes["categorycounter"].Value == "4")
        {
            Button6.Visible = false;
            limitCate.Visible = false;
        }
    }

    protected void Button7_Click(object sender, EventArgs e)//חזרה אל דף המשחקים
    {
        Response.Redirect("GridDefault.aspx");
    }

    protected void RadioButtonList1_SelectedIndexChanged(object sender, EventArgs e)//בחירת סוג הפריט
    {
        Button6.Visible = true;
        limitCate.Visible = true;
        TextBox1.Text = "";
        if (RadioButtonList1.SelectedValue == "txt")
        {
            TextBox2.Visible = true;
            Image1.Visible = false;
        }
        else
        {
            Button4.Enabled = false;
            Image1.Visible = true;
            Image1.ImageUrl = "";
            TextBox2.Visible = false;
            limitepar.Visible = false;
        }
    }

    protected void ok_Click(object sender, EventArgs e)//אישור מחיקת פריט
    {
        TextBox2.Text = "";
        Button6.Visible = true;
        limitCate.Visible = true;
        int selectedCategory = Convert.ToInt16(ListBox1.SelectedValue);
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        XmlNode mygame = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']");


        XmlNode myCategory = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(selectedCategory);
        System.IO.File.Delete(Request.PhysicalApplicationPath + myCategory.ChildNodes.Item((int)ViewState["mikum"]).InnerXml);

        (myCategory.ChildNodes.Item((int)ViewState["mikum"])).ParentNode.RemoveChild(myCategory.ChildNodes.Item((int)ViewState["mikum"]));
        int ParitCount = Convert.ToInt16(myCategory.SelectSingleNode("@paritcounter").Value);
        ParitCount--;

        string newParitCount = ParitCount.ToString();
        myCategory.SelectSingleNode("@paritcounter").Value = newParitCount;

        myDoc.Save(MapPath("trees/XMLFile.xml"));
        int noPritim = myCategory.ChildNodes.Count - 1;

        ViewState["selectedCategory"] = selectedCategory;

        Panel1.Controls.Clear();
        GeneratePritim(noPritim);
        updateListBox1();
        ListBox1.SelectedValue = ViewState["selectedCategory"].ToString();
        XmlNodeList myCategorys = myDoc.SelectNodes("//Game[@id='" + myGameNum + "']/Category");
        int counCategory = myCategorys.Count;

        Image1.Visible = false;
        for (int i = 0; i < counCategory; i++)
        {
            if ((Convert.ToInt16(mygame.ChildNodes.Item(i).Attributes["paritcounter"].Value) < 5))
            {
                MinP.ForeColor = System.Drawing.Color.Black;
                if (mygame.Attributes["NoPublished"].Value == "True")
                {


                    mygame.Attributes["NoPublished"].Value = "False";
                }
            }
        }
        if (mygame.Attributes["categorycounter"].Value == "4")
        {
            Button6.Visible = false;
        }
    }

    protected void cancel_Click(object sender, EventArgs e)//ביטול מחיקת פריט
    {
        deleteParit.Visible = false;
        BackPanel.Visible = false;
    }

    protected void cancelCte_Click(object sender, EventArgs e)//מחיקת קטגוריה
    {

        int selectedCategory = Convert.ToInt16(ListBox1.SelectedValue);
        XmlDocument myDoc = new XmlDocument();
        ViewState["selected"] = selectedCategory;

        myDoc.Load(MapPath("trees/XMLFile.xml"));
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        XmlNode myCategory = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(selectedCategory);
        myCategory.ParentNode.RemoveChild(myCategory);

        XmlNode mygame = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']");
        int CategoryC = Convert.ToInt16(mygame.SelectSingleNode("@categorycounter").Value);
        CategoryC--;

        string newCategoryCount = CategoryC.ToString();
        mygame.SelectSingleNode("@categorycounter").Value = newCategoryCount;

        myDoc.Save(MapPath("trees/XMLFile.xml"));
        updateListBox1();
        Panel1.Controls.Clear();

        if (mygame.Attributes["NoPublished"].Value == "True")
        {


            mygame.Attributes["NoPublished"].Value = "False";
        }
        int newSelected = (int)ViewState["selected"];

        if ((int)ViewState["selected"] != 0)
        {
            newSelected--;
        }
        else if ((int)ViewState["selected"] == 0 && mygame.Attributes["categorycounter"].Value != "1" && mygame.Attributes["categorycounter"].Value != "0")
        {
            newSelected++;
        }
        else if ((int)ViewState["selected"] == 0 && mygame.Attributes["categorycounter"].Value == "1")
        {
            newSelected = 0;
        }
        if (newSelected >= 0 && mygame.Attributes["categorycounter"].Value != "0")
        {
            ListBox1.SelectedValue = newSelected.ToString();
            int noPritim = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']").ChildNodes.Item(newSelected).ChildNodes.Count - 1;

            GeneratePritim(noPritim);

        }
        if (mygame.Attributes["categorycounter"].Value != "4")
        {
            TextBox1.Enabled = true;
            Button6.Visible = true;
            limitCate.Visible = true;
            TextBox1.Attributes.Add("placeholder", "הקלד קטגוריה");
        }
        if ((mygame.Attributes["categorycounter"].Value != "4") || (mygame.Attributes["categorycounter"].Value != "3")) {
            MinC.ForeColor = System.Drawing.Color.Black;
        }
        if (mygame.Attributes["categorycounter"].Value == "4")
        {
            TextBox1.Enabled = false;
            Button6.Visible = false;
            limitCate.Visible = false;
            TextBox1.Attributes.Add("placeholder", "");
        }

        if (Convert.ToInt16(mygame.Attributes["categorycounter"].Value) == 0)

        {
            RadioButtonList1.Enabled = false;
            limitepar.Visible = false;
            TextBox2.Visible = false;
            Button4.Visible = false;
            RadioButtonList1.ToolTip = "להוספת פריטים נדרשות קטגוריות";

            Button5.Visible = false;
            Button3.Visible = false;


        }
        else if (Convert.ToInt16(mygame.Attributes["categorycounter"].Value) >= 0)
        {
            RadioButtonList1.Enabled = true;
            limitepar.Visible = true;
            TextBox2.Visible = true;
            Button4.Visible = true;
        }

        XmlNodeList myCategorys = myDoc.SelectNodes("//Game[@id='" + myGameNum + "']/Category");
        bool paritok = true;
        int counCategory = myCategorys.Count;


        for (int i = 0; i < counCategory; i++)
        {
            if ((Convert.ToInt16(mygame.ChildNodes.Item(i).Attributes["paritcounter"].Value) < 5))
            {
                paritok = false;

            }
        }
        if (paritok == true)
        {
            MinP.ForeColor = System.Drawing.Color.Green;
        }

        if ((mygame.Attributes["categorycounter"].Value == "4") || (mygame.Attributes["categorycounter"].Value == "3"))
        {
            MinC.ForeColor = System.Drawing.Color.Green;
        }

    }

    protected void OkCate_Click(object sender, EventArgs e)//ביטול מחיקת קטגוריה
    {
        deleteCategory.Visible = false;
        BackPanel.Visible = false;
    }


}


