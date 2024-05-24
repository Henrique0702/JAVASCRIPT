function verificar() {
    var  n1 = document.getElementById("txtPratPrin").value;
    if(n1==""){ 
        window.alert("digite o número de passoas para a reserva");
        document.getElementById("txtPratPrin").focus();
        document.getElementById("txtPratPrin").style.backgroundColor="#ff0000";
        return false;
    }
    else if(isNaN(n1)){
        window.alert("digite APENAS números para a reserva");
        document.getElementById("txtPratPrin").value="";
        document.getElementById("txtPratPrin").focus();
        document.getElementById("txtPratPrin").style.backgroundColor="#ff0000";
        return false;
    }

    else{
        window.alert("número OK");
        document.getElementById("txtPratPrin").style.backgroundColor="#0000ff";
    }
    var n2 = document.getElementById("txtResp").value;
    if(n2==""){
        window.alert("digite o nome do responsável pela reserva");
        document.getElementById("txtResp"). focus();
        document.getElementById("txtResp").style.backgroundColor="#ff0000";
        return false;
    }
    else{
        window.alert("responsável OK");
        document.getElementById("txtResp").style.backgroundColor="#0000ff";
    }
    return true;
}
function carrega() {
    document.addEventListener("keydown",
    function(e) {
        if(e.keyCode === 13) {
            e.preventDefault();
        }
    });
}