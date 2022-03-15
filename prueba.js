console.log("App workinkg")


function verradiovalue(){
    let radiovalue=document.tabla.testRange.value;
    if(radiovalue.length==0) radiovalue="ninguno";
    alert("Valor seleccionado: " + radiovalue);
}
