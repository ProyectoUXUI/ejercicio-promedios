document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelectorAll(".form")[0];
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.querySelectorAll(".nombre")[0].value;
        const apellidos = document.querySelectorAll(".apellidos")[0].value;
        const promedio1 = parseFloat(document.querySelectorAll(".promedio1")[0].value);
        const promedio2 = parseFloat(document.querySelectorAll(".promedio2")[0].value);
        const promedio3 = parseFloat(document.querySelectorAll(".promedio3")[0].value);
        const pf = promedio1*0.2 + promedio2*0.3 + promedio3*0.4;

        const mensajeTexto = document.querySelectorAll(".mensaje-texto")[0];
        mensajeTexto.innerHTML = `Tu promedio final es ${pf} ${nombre}`;

    });
});
