var arr=[];
function validation(){
    var username = usernamestatus();
    var email = emailstatus();
    var password = passwordstatus();
    var gender = genderstatus();
    var address = addressstatus();

    var edisplay = document.getElementById("edisplay");
    var pdisplay = document.getElementById("pdisplay");
    var gdisplay = document.getElementById("gdisplay");
    var adisplay = document.getElementById("adisplay");

    if(username==false)
    {
        if(email==false)
        edisplay.innerHTML="*";

        if(password==false)
        pdisplay.innerHTML="*";

        if(gender==false)
        gdisplay.innerHTML="*";

        if(address==false)
        adisplay.innerHTML="*";

        return false;
    }
    else if(email==false)
    {
        if(password==false)
        pdisplay.innerHTML="*";

        if(gender==false)
        gdisplay.innerHTML="*";

        if(address==false)
        adisplay.innerHTML="*";

        return false;
    }
    else if(password==false)
    {
        if(gender==false)
        gdisplay.innerHTML="*";

        if(address==false)
        adisplay.innerHTML="*";

        return false;
    }
    else if(gender==false)
    {
        if(address==false)
        adisplay.innerHTML="*";

        return false;
    }
    else if(address==false)
    {
        return false;
    }
    else{
        /* main logic of registration starts*/
        var gender;
        var male = document.getElementById("male");
        var female = document.getElementById("female");
        if(male.checked==true)
            gender="male";
        else    
            gender="female";

            var obj = {
                username : document.getElementById("username").value,
                email : document.getElementById("email").value,
                password : document.getElementById("password").value,
                date : document.getElementById("date").value,
                gender: gender,
                address:document.getElementById("address").value
            }
            var data = localStorage.getItem("app_data");
            if(data!=null){
                var flag=0;
                arr = JSON.parse(data);
                for(var index in arr){
                    if(arr[index].email==obj.email){
                        alert("Email Already exist | Please try with new Email");
                        flag=1;
                        return false;
                    }
                }
                if(!flag){
                    arr = [...arr,obj];
                }
            }else{
                arr.push(obj);
            }    
            localStorage.setItem("app_data",JSON.stringify(arr));
        /* main logic of registration ends */
    }    
}
function usernamestatus(){
    var username = document.getElementById("username");
    var udisplay = document.getElementById("udisplay");

    if(username.value.trim()=="")
    {
        udisplay.innerHTML="Username Required";
        udisplay.style.color="red";
        return false;
    }
    else
    {
        udisplay.innerHTML="";
        return true;
    }
}
function emailstatus(){
    var email = document.getElementById("email");
    var edisplay = document.getElementById("edisplay");

    if(email.value.trim()=="")
    {
        edisplay.innerHTML="Email Required";
        edisplay.style.color="red";
        return false;
    }
    else
    {
        var reg=/^[\w\.-]+@gmail.com$/;

        if(reg.test(email.value))
        {
            edisplay.innerHTML="Valid";
            edisplay.style.color="green";
            return true;
        }
        else
        {
            edisplay.innerHTML="Invalid";
            edisplay.style.color="red";
            return false;
        }
    }
}
function passwordstatus(){
    var password = document.getElementById("password");
    var pdisplay = document.getElementById("pdisplay");

    if(password.value.trim()=="")
    {
        pdisplay.innerHTML="Password Required";
        pdisplay.style.color="red";
        return false;
    }
    else
    {
        var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

        if(reg.test(password.value))
        {
            pdisplay.innerHTML="Valid";
            pdisplay.style.color="green";
            return true;
        }
        else
        {
            pdisplay.innerHTML="Invalid";
            pdisplay.style.color="red";
            return false;
        }
    }
}
function datestatus(){
    var date = document.getElementById("date");
    var ddisplay = document.getElementById("ddisplay");

    
}
function genderstatus(){
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var gdisplay = document.getElementById("gdisplay");

    if(male.checked==false && female.checked==false)
    {
        gdisplay.innerHTML="Please Select Gender";
        gdisplay.style.color="red";
        return false;
    }
    else
    {
        gdisplay.innerHTML="";
        return true;
    }
}
function addressstatus(){
    var address = document.getElementById("address");
    var adisplay = document.getElementById("adisplay");

    if(address.value.trim()=="")
    {
        adisplay.innerHTML="Address Required";
        adisplay.style.color="red";
        return false;
    }
    else
    {
        adisplay.innerHTML="";
        return true;
    }
}

function checkLogin(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    arr = JSON.parse(localStorage.getItem("app_data"));
    for(var index in arr){
        if(arr[index].email==email && arr[index].password==password)
            return true;
        else
            return false;
    }    
}

function checkAdminLogin(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

        if(email=="admin@gmail.com" && password=="admin@123")
            return true;
        else
            return false;
    }    
