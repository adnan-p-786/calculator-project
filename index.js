
function buttonclick(val){
    document.getElementById("screen").value+=val;
}


function cleardisplay(){
    document.getElementById('screen').value="";
}

function equalclick(){
    let text = document.getElementById('screen').value
    let result =eval(text)
    document.getElementById('screen').value=result
}