$(document).ready(function() {
    
   $(".alert-success").hide();
   $(".alert-danger").hide();
   $(".alert-warning").hide();
   $(".alert-secondary").hide();
//    $(".alert-primary").hide();

//    var success_alert =  <?php echo $success_alert; ?> ;
//    console.log(success_alert);

//  if(success_alert){ $(".alert-success").show(); }

    $("#error_fname").hide();
    $("#error_lname").hide();
    $("#error_email").hide();
    $("#error_password").hide();
    $("#error_re_password").hide();

    var password, re_password;

    function check_fname() {
        console.log("username");
        var pattern = /^[a-z A-Z]*$/;
        var username = $("#username").val();
        console.log(username);
        console.log($("#username").val());
        if (pattern.test(username) && username != "") {
            console.log("IF");
            $("#username").css("border-bottom", "2px solid green");
            $("#error_fname").hide();
        }
        else {
            console.log(" ELSE");
            $("#username").css("border-bottom", "2px solid red");
            $("#error_fname").show();
        }
    }

    function check_email() {        
        var email = $("#email").val();
        console.log(email);
        console.log($("#email").val());
        if (email != "" && email.indexOf("@gmail.com") != -1 ) {
            console.log("if ");
            $("#email").css("border-bottom", "2px solid green");
            $("#error_email").hide();
        }
        else {
            console.log("else ");
            $("#email").css("border-bottom", "2px solid red");
            $("#error_email").show();
        }
    }

    function check_password() {
        var pattern = /^[a-zA-Z]*$/;
        var password_len = $("#password").val().length;
        if (password_len >=8) {
            console.log("if password ok");
            $("#password").css("border-bottom", "2px solid green");
            $("#error_password").hide();
        }
        else {
            $("#password").css("border-bottom", "2px solid red");
            $("#error_password").show();
        }
    }

    function check_re_password() {    
        password =  $("#password").val();
        re_password = $("#cpassword").val();
        if (password == re_password && re_password != "") {
            console.log("re_passs ok");
            $("#cpassword").css("border-bottom", "2px solid green");
            $("#error_re_password").hide();
        }
        else {
            $("#cpassword").css("border-bottom", "2px solid red");
            $("#error_re_password").show();
        }
    }

    $("#username").on("blur", function(){
        check_fname();
    }
    );

    $("#username").keyup(function(){
        var name = $('#username').val();  
        console.log(name)
        $.post("index.php",{ check:name }, function(data){
              console.log(data);
              console.log(data[0]);
               if(data[0]=="1"){
               alert("select another username");
               }
               else{
                $("#username").css("border-bottom", "2px solid green");
               }
             }
        );  
    })

    $("#email").on('blur',function(){
        console.log("sucess");
        check_email();
        console.log("sucess3");
    })

    $("#password").on('blur',function(){
        console.log("sucess");
        check_password();
        console.log("sucess4");
    })

    $("#cpassword").on('blur',function(){
        console.log("sucess");
        check_re_password();
        console.log("sucess5");
    })
})