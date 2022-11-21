
var c
c=0
function click1(a){
    // console.log(document.getElementById(""+a).textContent+1);
    if(document.getElementById(""+a).textContent=="O"||document.getElementById(""+a).textContent=="X"){
        return
    }
    c+=1
    if (c%2==0){
        document.getElementById(""+a).textContent="O"
    }
    else{
        document.getElementById(""+a).textContent="X"
    }

    
    x=0
    o=0
    gc=document.getElementsByClassName("gc")
    s=[]
    for (i in gc){
        s.push(gc[i].textContent)
    
    }
    if(s[0]+s[1]+s[2]=="XXX"||s[0]+s[4]+s[8]=="XXX"||s[0]+s[3]+s[6]==="XXX"||s[3]+s[4]+s[5]=="XXX"||s[6]+s[7]+s[8]=="XXX"||s[1]+s[4]+s[7]=="XXX"||s[2]+s[5]+s[8]=="XXX"){
        x+=1
        
        document.getElementById("X").textContent=x
        c2()
    }

    else if(s[0]+s[1]+s[2]=="OOO"||s[0]+s[4]+s[8]=="OOO"||s[0]+s[3]+s[6]==="OOO"||s[3]+s[4]+s[5]=="OOO"||s[6]+s[7]+s[8]=="OOO"||s[1]+s[4]+s[7]=="OOO"||s[2]+s[5]+s[8]=="OOO"){
        o+=1
        document.getElementById("O").textContent=o
        c2()
    }
}
function c2(){
    for (i in document.getElementsByClassName("gc")){
        document.getElementsByClassName("gc")[i].textContent=""
    
    }
    c=0
    return
}
