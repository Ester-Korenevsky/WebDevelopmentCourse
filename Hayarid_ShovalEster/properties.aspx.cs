using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml; 

public partial class properties : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {
 XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));
        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        XmlNode mygame = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']");
        ProperGameName.Text = mygame.Attributes["gamename"].Value;

            DropDownList1.SelectedValue = mygame.Attributes["time"].Value;

        }

    }

    protected void Button1_Click(object sender, EventArgs e)
    {
        Response.Redirect("GridDefault.aspx");
    }

    

 

    protected void saveC_Click(object sender, EventArgs e)//שמירת שינויים
    {
        XmlDocument myDoc = new XmlDocument();
        myDoc.Load(MapPath("trees/XMLFile.xml"));

        string myGameNum = Convert.ToString(Session["theItemIdSessions"]);
        XmlNode myGame = myDoc.SelectSingleNode("//Game[@id='" + myGameNum + "']");

        myGame.Attributes["gamename"].Value = ProperGameName.Text;
        myGame.Attributes["time"].Value = DropDownList1.SelectedValue;

        myDoc.Save(MapPath("trees/XMLFile.xml"));
    }
}