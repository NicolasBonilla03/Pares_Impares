function array(){
    let arr = new Array();
    arr.length = 200;
    for (i=0;i<arr.length;i++){
        arr[i]=i+1;
    }
    return arr;
}

function mostrarPares(){
    const arr = array();
    const par = arr.filter((arr)=> arr%2==0);
    const formulario = $('#formulario'); 
let html = '';
formulario.html(html);
html +='<h1>PARES</h1>';
i=0;
pars=0;
while (i<200){
    if (par[i]%2==0){
html += '<h1>El numero '+par[i]+' se encuentra en la posicion '+(pars+1)+'</h1>';
    }
    i++;
    pars=pars+2;
}
formulario.prepend(html);

}

function mostrarImpares(){
    const arr = array();
    const impar = arr.filter((arr)=> arr%2!=0);
    const formulario = $('#formulario'); 
let html = '';
formulario.html(html);
html +='<h1>IMPARES</h1>';
i=0;
imp=0
while (i<100){
    if (impar[i]%2!=0){
html += '<h1>El numero '+impar[i]+' se encuentra en la posicion '+(imp)+'</h1>';
    }
    i++;
    imp=imp+2;
}
formulario.prepend(html);
}

function ParesMayor(){
    const formulario = $('#form_num'); 
let html = '';
formulario.html(html);
html +='<h1>PARES>#</h1>';
html +='<input type="number" max="200" id="numero">';
html +='<button type="button" onclick="numpar()" id="valor">Mirar</button>'
formulario.prepend(html);

}

function numpar(){
    const num = $('#numero').val()
    ParesMayorbtn(num);
}


function ParesMayorbtn(num){
    var numd = num;
    numd = Math.ceil(num);
    if (num%2==0){
        num = num/2;
    }else{
        num = num/2;
        num = Math.ceil(num);
        num = num-1;
    }
    console.log(numd);
    console.log(num);
    const arr = array();
    const par = arr.filter((arr)=> arr%2==0);
    const formulario = $('#formulario'); 
let html = '';
formulario.html(html);
html +='<h1>PARES</h1>';
i=num;
pars=0;
if (numd%2==0){
    pars=numd;
while (pars<200){
    if (par[i]%2==0){
html += '<h1>El numero '+par[i]+' se encuentra en la posicion '+((pars+1))+'</h1>';
    }
    i++;
    pars=pars+2;
}
}else if(numd%2!=0){
    pars=numd;
    while (pars<200){
        if (par[i]%2==0){
    html += '<h1>El numero '+par[i]+' se encuentra en la posicion '+((pars))+'</h1>';
        }
        i++;
        pars=pars+2;
    }
}
formulario.prepend(html);

}
function ImparesMayor(){
    const formulario = $('#form_num'); 
    let html = '';
    formulario.html(html);
    html +='<h1>IMPARES>#</h1>';
    html +='<input type="number" max="200" id="numero">';
    html +='<button type="button" onclick="numimp()" id="valor">Mirar</button>'
    formulario.prepend(html);
}

function numimp(){
    const num = $('#numero').val()
    ImparesMayorbtn(num);
}


function ImparesMayorbtn(num){
    var numd = num;
    numd = Math.ceil(num);
    if (num%2==0){
        num = num/2;
    }else{
        num = num/2;
        num = Math.ceil(num);
        num = num-1;
    }
    
    console.log(num);
    const arr = array();
    const impar = arr.filter((arr)=> arr%2!=0);
    const formulario = $('#formulario'); 
let html = '';
formulario.html(html);
html +='<h1>IMPARES>#</h1>';
i=num;
pars=0;
if (numd%2!=0){
    pars=numd;
while (pars<199){
    if (impar[i]%2!=0){
html += '<h1>El numero '+impar[i+1]+' se encuentra en la posicion '+((pars+1))+'</h1>';
    }
    i++;
    pars=pars+2;
}
} else {
    pars=numd;
    while (pars<200){
        if (impar[i]%2!=0){
    html += '<h1>El numero '+impar[i]+' se encuentra en la posicion '+((pars))+'</h1>';
        }
        i++;
        pars=pars+2;
    }
}
formulario.prepend(html);
}
