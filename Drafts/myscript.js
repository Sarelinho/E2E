
var result=0;
var input=0;
var changeC="green";
function myFunction() {
    document.getElementById("charge").style.height = result+"%";
  }
  function color() {
    document.getElementById("charge").style.backgroundColor = changeC;
  }


for (i=0; i<5; i++)
{

    
     function fun() {  
         input = prompt("what item did you chose?");
        
    }
    fun();

    var theItemTheyChose=input;
    var theCorrectItem=2;
    if (theItemTheyChose!=theCorrectItem)
        {
            result-=5;

        }

    else if ( theItemTheyChose==theCorrectItem)
        {
            result+=20;
                if ( result>=0)
                    {
                        myFunction();
                            if (result<25)
                            {
                                changeC="red";
                                color();
                            }
                            else  if (result>24 && result <50)
                            {
                                changeC="orange";
                                color();
                            }
                            else if (result>49 && result <75)
                            {
                                changeC="yellow";
                                color(); 
                            }
                            else if (result>74)
                            {
                                changeC="#00ff00";
                                color(); 
                            }
                        
                        console.log(result);
                    }
        }


}

