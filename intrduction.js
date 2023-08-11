
    
    function sendInfos(){
        var output=document.getElementById('output');
        output.style.color='white'
         var fname=document.getElementById('fname').value;
    
    var lname=document.getElementById('lname').value;
    console.log(lname)
    var textArea=document.getElementById('textArea').value;

    console.log(textArea)

    if(fname =='' && lname ==' '|| fname !==''&& lname ==''){
        console.log('error')
        fname='';
    }
    if(textArea ==''){
        lname=''
        fname=''
     }

    if(fname !=='' && lname !==' '&& textArea !== ''){
        output.innerHTML=`<p>First name : ${fname} </p> <p>Last name :${lname}  </p> <p>${textArea}</p>`

    }
6
    }
   
    
