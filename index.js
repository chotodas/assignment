 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCWJGbdWreW_uI2bkpwU5l4oYb9ixP39qE",
    authDomain: "krishassignment-bc989.firebaseapp.com",
    projectId: "krishassignment-bc989",
    storageBucket: "krishassignment-bc989.appspot.com",
    messagingSenderId: "356058477644",
    appId: "1:356058477644:web:89baed135b5990048570e9",
    measurementId: "G-WH9EX4NXXP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()

// setup our submit function
function submit(){
    register-username = document.getElementById('register-username').value
    register-useremail = document.getElementById('register-useremail').value
    register-userphnumber = document.getElementById('register-userphnumber').value
    register-userpassword = document.getElementById('register-userpassword').value
    
    if (validate_register-useremail(register-useremail) == false && validate_register-userpassword(register-userpassword) == false){
        alert('email or password is out of line')
        return
    }
    auth.creatregister-usernameWithregister-useremailAndregister-userpassword( register-useremail, register-userpassword )
    .then(function()
    {
     var user = auth.currentUser

     var database_ref = database.ref()
     var user_data = {
        register-username : register-username,
        register-useremail : register-useremail,
        register-userphnumber : register-userphnumber,
        register-userpassword : register-userpassword,
        last_login : Date.now()
     }
     database_ref.child('users/' + user.uid).set(user_data)

     alert('User Created')
    })
    .catch(function(error)
    {
        var error_code = error.code 
        var error_message = erroe.message 

        alert(error_message)
    })
}

function validate_register-useremail(register-useremail)
{
   expression= /^[^@]+@\w+(\.\w+)+\w$/
   if (expretion.test(register-useremail) == true)
   {
       return true
   }
    else
    {
        return false 
    }

}
function validate_register-userpassword(register-userpassword)
{
    if(register-userpassword < 8)
    {
        return false
    }
    else{
        return true
    }
}
function validate_field(field){
    if (field == null){
        return false
    }
    if (field.length <= 0)
    {
        return false
    }else{
        return true 
    }
}