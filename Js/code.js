function array(){
    let arr = new Array();
    arr.length = 200;
    for (i=0;i<arr.length;i++){
        arr[i]=i+1;
    }
    return arr;
}

function posicion(num){
    const arr = array();
    return arr.indexOf(num);
}

function mostrarPares(){
    const arr = array();
    const par = arr.filter((arr)=> arr%2==0);
    const formulario = document.getElementById('formulario');
formulario.innerHTML ='<h1>PARES' +
par.map((num)=>'<h2> Numero '+num+', en la posicion '+(posicion(num))+'.</h2>').join('')
+  '</h1>';
var form = document.getElementById('form_num');
form.innerHTML='';
}

function mostrarImpares(){
    const arr = array();
    const impar = arr.filter((arr)=> arr%2!=0);
    const formulario = document.getElementById('formulario');
formulario.innerHTML ='<h1>IMPARES' +
impar.map((num)=>'<h2> Numero '+num+', en la posicion '+(posicion(num))+'.</h2>').join('')
+  '</h1>';
var form = document.getElementById('form_num');
form.innerHTML='';
}

function ParesMayor(){
    var form = document.getElementById('form_num');
    form.innerHTML = '';
    var formulario = form; 
formulario.innerHTML +='<h1>PARES>#</h1>';
formulario.innerHTML +='<input type="number" max="200" id="numero">';
formulario.innerHTML +='<button type="button" onclick="numpar()" id="valor">Mirar</button>'

}

function numpar(){
    var num = document.getElementById('numero').value;
    if(num%2==0){
        num= num/2;
    }else{
    num = (num/2);
    }
    ParesMayorbtn(num);

}

function ParesMayorbtn(num){
    var arr = array();
    parr = arr.filter((num)=> num%2==0);
    par = parr.slice(num);
    console.log(par)
    const formulario = document.getElementById('formulario');
formulario.innerHTML ='<h1>PARES' +
par.map((num)=>'<h2> Numero '+num+', en la posicion '+(posicion(num))+'.</h2>').join('')
+  '</h1>';
num=0;

}
function ImparesMayor(){
    var form = document.getElementById('form_num');
    form.innerHTML = '';
    var formulario = document.getElementById('form_num'); 
    formulario.innerHTML +='<h1>IMPARES>#</h1>';
    formulario.innerHTML +='<input type="number" max="200" id="numero">';
    formulario.innerHTML +='<button type="button" onclick="numimp()" id="valor">Mirar</button>';

}

function numimp(){
    var num = document.getElementById('numero').value;
    if(num%2==0){
        num= num/2;
    }else{
    num = (num/2)+1;
    }
    ImparesMayorbtn(num);
}

function ImparesMayorbtn(num){
    var arr = array();
    imparr = arr.filter((num)=> num%2!=0);
    impar = imparr.slice(num);
    console.log(impar)
    const formulario = document.getElementById('formulario');
formulario.innerHTML ='<h1>IMPARES' +
impar.map((num)=>'<h2> Numero '+num+', en la posicion '+(posicion(num))+'.</h2>').join('')
+  '</h1>';
num=0;
}