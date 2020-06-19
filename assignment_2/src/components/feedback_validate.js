   function feedback_validate()
    {
        var fname = document.feedback_form.fname.value;
        var lname = document.feedback_form.lname.value;	
        var email = document.feedback_form.email.value;
        var feedback_sub = document.feedback_form.feedback_sub.value;
        var feedback_dis = document.feedback_form.feedback_dis.value;

    
        if(fname == "" || fname == null )
        {
            document.getElementById("first_name_val").innerHTML = "Enter the valid First Name";
            return false;
        }
    
        if(lname == "" || lname == null )
        {
            document.getElementById("last_name_val").innerHTML = "Enter the valid Last Name";
            return false;
        }
    
        if(email == "" || email == null )
        {
            document.getElementById("email_val").innerHTML = "Enter the valid Email ID";
            return false;
        }
    
        if(feedback_sub == "" || feedback_sub == null )
        {
            document.getElementById("feedback_sub_val").innerHTML = "Enter the Feedback subject Please";
            return false;
        }
        
        if(feedback_dis == "" || feedback_dis == null )
        {
            document.getElementById("feedback_des_val").innerHTML = "Enter the Feedback discription Please";
            return false;
        }

    }   