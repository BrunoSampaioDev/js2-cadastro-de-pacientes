var tabela = document.querySelector('table');

tabela.addEventListener('dblclick',function(pacienteClicado){
    
    pacienteClicado.target.parentNode.classList.add('fadeOut');
    //alvo do evento (paciente.target)
    //pai d alvo (parentNode)
    setTimeout(function(){
        pacienteClicado.target.parentNode.remove()
    }, 500);
});

