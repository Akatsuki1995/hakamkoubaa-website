<?php
class PHP_Email_Form{
    public $to;
    public $subject;
    public $from_email;
    public $from_name;
    private $message ="";
    function send() {
        if(isset($_POST['submit'])){
        mail($this->to,$this->subject,$this->message);
    }}
    function add_message($first,$second)
    {   if ($second=='From'){
        $this->message .= "You have recieved a new mail from: ".$first;
        }
        elseif ($second=='Email'){
        $this->message .= "the email of the sender is ".$first;
            }
        elseif ($second=='Message')
        {$this->message .= "this is the message ".$first;
        }
    }

    
}


?>