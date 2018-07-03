using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Enter : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        enterBtn.Enabled = false;
    }

    protected void enterBtn_Click(object sender, EventArgs e)
    {
        if (nameenter.Text == "hayarid" && password.Text == "hayarid2018")
        {
            Response.Redirect("GridDefault.aspx");
        }
        else
        {
            message.Text = "שם המשתמש או הסיסמה שגויים";
        }
    }
}