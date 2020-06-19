function booking_validate()
{
    var fname = document.booking_form.fname.value;
    var lname = document.booking_form.lname.value;	
    var cname = document.booking_form.cname.value;		
    var email = document.booking_form.email.value;
    var phone = document.booking_form.phone.value;
    var address1 = document.booking_form.address1.value;
    var address2 = document.booking_form.address2.value;
    var city = document.booking_form.city.value;
    var state = document.booking_form.state.value;    
    var zip = document.booking_form.zip.value;
    var dname = document.booking_form.dname.value;	


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

    if(cname == "" || cname == null )
    {
        document.getElementById("child_name_val").innerHTML = "Enter the valid Child Name";
        return false;
    }

    if(email == "" || email == null )
    {
        document.getElementById("email_val").innerHTML = "Enter the valid Email ID";
        return false;
    }

    if(phone.length < 10 || phone.length > 10 )
    {
        document.getElementById("phone_val").innerHTML = "Enter the valid phone number";
        return false;
    }

    if(address1 == "" || address1 == null )
    {
        document.getElementById("address1_val").innerHTML = "Enter the address street and unit number";
        return false;
    }

    if(address2 == "" || address2 == null )
    {
        document.getElementById("address2_val").innerHTML = "Enter the address suburb name";
        return false;
    }
    
    if(city == "" || city == null )
    {
        document.getElementById("city_val").innerHTML = "Enter the city name";
        return false;
    }

    if(state == "Choose state")
    {
        document.getElementById("state_val").innerHTML = "select the state plese";
        return false;
    }

    if(zip  == "" || city == null )
    {
        document.getElementById("zip_val").innerHTML = "Enter the valid zip code";
        return false;
    }

    if(dname == "----Doctor Name----")
    {
        document.getElementById("dname_val").innerHTML = "Enter the valid Doctor Name";
        return false;
    }
}   