using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml;
public partial class GridDefault : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (this.IsPostBack)
        {
            Button1game.Enabled = false;
            
        }
        DeleteGame.Visible = false;
        BackPanel.Visible = false;
        limitG.Text = "עד 40 תווים";
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        XmlNodeList myGame = myDoc.SelectNodes("//Game");
        
        for (int i = 0; i < GridView1.Rows.Count; i++)//עדכון מצב הצ'קס בוקס
        {
            CheckBox chk = (CheckBox)GridView1.Rows[i].FindControl("PublishLabel");
            if (myGame.Item(i).Attributes["published"].Value=="False")
            {
                chk.Enabled = false;

                chk.ToolTip = "על מנת לפרסם נדרשות לפחות 3 קטגוריות ו-5 פריטים בכל אחת";
                
            }
            else
            {

              
                if (myGame.Item(i).Attributes["NoPublished"].Value == "True")
                {
                    
                  chk.Checked = true;
                }
                else
                {
                    chk.Enabled = true;
                }

            }
        }
    }

    protected void SelectCheckBox_OnCheckedChanged(object sender, EventArgs e)//בלחיצה על הצ'קבוקס
    {
        
        XmlDocument Document = XmlDataSource1.GetXmlDocument();
        Document.Load(MapPath("trees/XMLFile.xml"));
        GridViewRow row = ((GridViewRow)((CheckBox)sender).NamingContainer);
        int index = row.RowIndex;


        XmlNode parentG = Document.SelectSingleNode("/Hayarid");
        XmlNode myGame = parentG.ChildNodes.Item(index);
        bool ifclickCheck = true;
         CheckBox cb1 = (CheckBox)GridView1.Rows[index].FindControl("PublishLabel");

        if (myGame.Attributes["NoPublished"].Value == "False")
        {
            ifclickCheck = true;
            myGame.Attributes["NoPublished"].Value = ifclickCheck.ToString();
            Document.Save(MapPath("trees/XMLFile.xml"));
            if (myGame.Attributes["NoPublished"].Value == "True")
            {
                cb1.Checked = true;
            }


        }

        else
        {
          
                ifclickCheck = false;
            myGame.Attributes["NoPublished"].Value = ifclickCheck.ToString();
            Document.Save(MapPath("trees/XMLFile.xml"));
            if (myGame.Attributes["NoPublished"].Value == "False")
            {
                cb1.Checked = false;
            }
        }
        

        myGame.Attributes["NoPublished"].Value = ifclickCheck.ToString();
       
        Document.Save(MapPath("trees/XMLFile.xml"));
        

    }
   
    protected void GridView1_RowCommand(object sender, GridViewCommandEventArgs e)//פונקציה המקשרת בין העריכה והמחיקה לבין מה שנלחץ
    {
        // תחילה אנו מבררים מהו ה -אי די- של הפריט בעץ ה אקס אם אל
        ImageButton i = (ImageButton)e.CommandSource;
        // אנו מושכים את האי די של הפריט באמצעות מאפיין לא שמור במערכת שהוספנו באופן ידני לכפתור-תמונה
        string theId = i.Attributes["theItemId"];
        Session["theItemIdSession"] = i.Attributes["theItemId"];
        
        // עלינו לברר איזו פקודה צריכה להתבצע - הפקודה רשומה בכל כפתור
        switch (e.CommandName)
        {
            //אם נלחץ על כפתור מחיקה יקרא לפונקציה של מחיקה
            case "deleteRow":

                //לקיחת ID לפי הלחיצה של המשתמש 
                Session["theItemIdSessions"] = i.Attributes["theItemId"];
                deleteRow((string)Session["theItemIdSessions"]);
                break;

            //אם נלחץ על כפתור עריכה (העפרון) נעבור לדף עריכה
            case "edit":
                Session["theItemIdSessions"] = i.Attributes["theItemId"];
                Response.Redirect("edit.aspx");

                break;

            case "properties_btn"://מעבר לדף ההגדרות

                Session["theItemIdSessions"] = i.Attributes["theItemId"];



                Response.Redirect("properties.aspx");
                break;


        }
    }
     

    
    
  
    void deleteRow(string theItemId)//מחיקת המשחק הנבחר
    {
        //הסרת ענף של משחק קיים באמצעות זיהוי האיי דיי שניתן לו על ידי לחיצה עליו מתוך הטבלה
        //שמירה ועדכון לתוך העץ ולגריד ויו
        DeleteGame.Visible = true;
        BackPanel.Visible = true;
        XmlDocument Document = XmlDataSource1.GetXmlDocument();
       XmlNode node = Document.SelectSingleNode("/Hayarid/Game[@id='" + theItemId + "']");
        GameN.Text ="האם אתה בטוח שברצונך למחוק את המשחק"+" " +"\""+node.Attributes["gamename"].Value+"\"?";
        ViewState["gameN"] = theItemId;


    }

    protected void Button1_Click1(object sender, EventArgs e)//כפתור הוספת משחק חדש
    {
        XmlDocument xmlDoc = XmlDataSource1.GetXmlDocument();
        // הקפצה של מונה האי די בתוך קובץ האקס אם אל באחד
        int gameCount = Convert.ToInt16(xmlDoc.SelectNodes("//Game").Count);
        XmlNodeList myGame = xmlDoc.SelectNodes("//Game");
        XmlNode current = xmlDoc.SelectSingleNode("//Hayarid");
        int myId = 1;
        int newCode = 1234;
        if (gameCount > 0)
        {
            int currentGame = Convert.ToInt16(current.ChildNodes.Item(0).Attributes["id"].Value);

            int NewId = currentGame;
            NewId++;
            myId = NewId;
           int Code = Convert.ToInt16(current.ChildNodes.Item(0).Attributes["gamecode"].Value);
            Code++;
            newCode = Code;
        }
        else
        {
            myId = 1;
            newCode = 1234;
        }
        string myNewId = myId.ToString();
        XmlElement myNewGameNode = xmlDoc.CreateElement("Game");
        xmlDoc.SelectSingleNode("/Hayarid").PrependChild(myNewGameNode);
       
        string myNewCode = newCode.ToString();
        
        myNewGameNode.SetAttribute("id", myNewId);
        myNewGameNode.SetAttribute("gamecode", myNewCode);
        myNewGameNode.SetAttribute("gamename", GameText.Text);
        myNewGameNode.SetAttribute("categorycounter", "0");
        myNewGameNode.SetAttribute("published", "False");
        myNewGameNode.SetAttribute("NoPublished", "False");
        myNewGameNode.SetAttribute("instruction", "לחץ על הקטגוריה המתאימה למופיע על הלוח");
        myNewGameNode.SetAttribute("time", "30");


        XmlDataSource1.Save();
        GridView1.DataBind();
        // ניקוי תיבות טקסט
        GameText.Text = "";
        for (int i = 0; i < GridView1.Rows.Count; i++)
        {
            CheckBox chk = (CheckBox)GridView1.Rows[i].FindControl("PublishLabel");
            if (myGame.Item(i).Attributes["published"].Value == "False")
            {
                chk.Enabled = false;


            }
            else
            {


                if (myGame.Item(i).Attributes["NoPublished"].Value == "True")
                {
                    chk.Checked = true;
                }
                else
                {
                    chk.Enabled = true;
                }

            }
        }

    }

    protected void OkGame_Click(object sender, EventArgs e)//מחיקת משחק
    {
         //הסרת ענף של משחק קיים באמצעות זיהוי האיי דיי שניתן לו על ידי לחיצה עליו מתוך הטבלה
        //שמירה ועדכון לתוך העץ ולגריד ויו
       XmlDocument Document = XmlDataSource1.GetXmlDocument();
       XmlNode node = Document.SelectSingleNode("/Hayarid/Game[@id='" +(string)ViewState["gameN"] + "']");
        XmlNodeList myGame = Document.SelectNodes("//Game");

        node.ParentNode.RemoveChild(node);
        XmlDataSource1.Save();
        GridView1.DataBind();

        for (int i = 0; i < GridView1.Rows.Count; i++)
        {
            CheckBox chk = (CheckBox)GridView1.Rows[i].FindControl("PublishLabel");
            if (myGame.Item(i).Attributes["published"].Value == "False")
            {
                chk.Enabled = false;


            }
            else
            {


                if (myGame.Item(i).Attributes["NoPublished"].Value == "True")
                {
                    chk.Checked = true;
                }
                else
                {
                    chk.Enabled = true;
                }

            }
        }

    }

    protected void CancelGame_Click(object sender, EventArgs e)
    {
        DeleteGame.Visible = false;
        BackPanel.Visible = false;
    }
}
