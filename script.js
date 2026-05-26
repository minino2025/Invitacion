const FechaEvento=new Date("June 20, 2026 18:00:00").getTime();

setInterval(()=>{
    const ahora=new Date().getTime();
    const diferencia=FechaEvento-ahora;

    const dias=Math.floor (diferencia/(1000*60*60*24));
    const horas=Math.floor((diferencia/(1000*60*60))%24);

    const minutos=Math.floor((diferencia /(1000*60))%60);
    const segundos=Math.floor((diferencia/1000)%60);

    document.getElementById("Dias").textContent=dias;
    document.getElementById("Horas").textContent=horas;
    document.getElementById("Minutos").textContent=minutos;
    document.getElementById("Segundos").textContent=segundos;
}, 1000);

let botonEnter=document.getElementById("EnterR");
let Input=document.getElementById("Codigo");
let Invitados = [];

botonEnter.addEventListener("click", function() {

    const Codigo = Input.value;

    if(Codigo.trim() !== ""){
        Invitados.push(Codigo.trim());
        const link="https://forms.office.com/Pages/ResponsePage.aspx?id=gsNAcvN36kKVdjcJfbNi0Ewx9lMei1FEpO_HLcKHHAdUNkJENTJZWjFNRFZOOU5ZNU9ETzVGVjVIQS4u&re330aa5bbb874101ac666f8179666aff=" + Codigo;
        setTimeout(()=>{
        window.open(link);
        },2000);
        Input.value="";
        document.getElementById("Mensaje").textContent=
        "Ya casi terminas... ✨";
    
    
    }

});
