
    <?php    
        session_start();
            include "connection.php";
        
                if(isset($_GET['submit']))
                {
        
                          $user_admin_name=$_GET['loginUsername'];
                          $user_admin_pass=$_GET['loginPassword'];
        
                          $query="SELECT user_admin_name,user_admin_pass FROM mm_admin WHERE user_admin_name='$user_admin_name' and user_admin_pass='$user_admin_pass'";

                          $query_run=mysqli_query($conn,$query);
                          
                          if($row=mysqli_fetch_array($query_run))
                                  {
                                      //$user_admin_mail=$row['user_admin_mail'];
                                      //$_SESSION['user_admin_mail']=$user_admin_mail;
                                      $_SESSION['user_admin_name']=$user_admin_name;
                          
                                      header('Location: logout.php'); 
                                
                                  }
                                
                                 else
                                     {
                                
                                      
                          
                                      $_SESSION['status']='Username OR Password Invalid';
                                      header('Location: login.php');
                                
                                     }
                          
        
                    }
?>                    