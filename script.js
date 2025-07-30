
    var istatus=document.querySelector("h5")
    var btn=document.querySelector("#add")
    var check = 0
   

    btn.addEventListener("click",function(){
        if(check == 0){
        istatus.innerHTML="Friend"
        istatus.style.color="green"
        btn.style.background="red"
        btn.innerHTML="Remove"
        
        check = 1

        }else{
            istatus.innerHTML="Follow"
            istatus.style.color="red"
            btn.innerHTML="Add Friend"
            btn.style.background="green"
            
            
            check=0

        }
    })
    
