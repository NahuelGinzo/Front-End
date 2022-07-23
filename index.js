var app={};
var about= datos =>{
    console.log(datos);
    app.about=datos;
var html="";
html+= "<h2>Studies</h2>"
app.about.map( about => {
for(let propiedad of Object.keys(about)){
    html+= "<li>"+propiedad+": "+about[propiedad]+"</li>"
}
html+= "<hr/>"
}
)
document.getElementById("results").innerHTML = html;
}
