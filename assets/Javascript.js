
    var char ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var dig = "0123456789";
    var scs = "~!@#$%^&*()_+{}:?><,./';][|\=-";

    var charnumb = document.getElementById("charnumb");
    var numBox =document.getElementById("dig");
    var spcBox = document.getElementById("scs");
    var generateBtn = document.querySelector("#generate");
    var passwordText = document.querySelector("#password");
   
    console.log
    
    generateBtn.addEventListener("click", writePassword);{
    var Characters =char;
    (numBox.Checked)? characters += dig: "";
    (spcBox.Checked)? characters += scs: "";
    Password.value=password(charnumb.value, characters);
    }
    function writePassword(l, characters) {
    var Password=" ";
    for(var i=0; i < 1; i++){password += characters.charAt(Math.floor(Math.random()*characters.length));
    }    
    return Password;
    } 