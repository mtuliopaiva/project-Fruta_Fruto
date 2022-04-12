
function scrolltop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
function scrollReceitas() {
    document.querySelector('.sobre').scrollIntoView({ 
        behavior: 'smooth'
    })
}
function scrollQuemSomos() {
    document.querySelector('.quem-somos').scrollIntoView({ 
        behavior: 'smooth'
    })
}
function scrollContato() {
    document.querySelector('.contato').scrollIntoView({ 
        behavior: 'smooth'
    })
}

function update() {
 
    var endereco = ['Av. Carlos Consoni, 460<br>', 'Rua Avelino Amaral, 30<br>', 'Rua Pedro gatera, 150<br>', 'Av. Leopoldino de Oliveira, 1255<br>','Av. João Naves de Ávila, 2121<br>'];
    var cep = ['36581-174<br>','12345-678<br>','14589-654<br>','38071-090<br>','38408-100<br>'];
    var telefone = ['(16) 3313-3217<br>','(19) 3215-9856<br>','(11) 3078-0966<br>','(34) 3025-6541<br>','(34) 3211-4569<br>'];
    var horario = ['Segunda à sexta: 8h às 18h<br>','Segunda  à sexta: 07h às 17:30h<br>','Segunda  à sexta: 08h às 18h<br>','Segunda  à sexta: 08h às 18h<br>','Segunda  à sexta: 08h às 18h<br>'];

    if(document.querySelector('#unidades')[1].selected){
        document.getElementById('end').innerHTML = endereco[0];
        document.getElementById('cep').innerHTML = cep[0];
        document.getElementById('tel').innerHTML = telefone[0];
        document.getElementById('horario').innerHTML = horario[0];
    }
    
    if(document.querySelector('#unidades')[2].selected){
        document.getElementById('end').innerHTML = endereco[1];
        document.getElementById('cep').innerHTML = cep[1];
        document.getElementById('tel').innerHTML = telefone[1];
        document.getElementById('horario').innerHTML = horario[1];
    }
    if(document.querySelector('#unidades')[3].selected){
        document.getElementById('end').innerHTML = endereco[2];
        document.getElementById('cep').innerHTML = cep[2];
        document.getElementById('tel').innerHTML = telefone[2];
        document.getElementById('horario').innerHTML = horario[2];
    }
    if(document.querySelector('#unidades')[4].selected){
        document.getElementById('end').innerHTML = endereco[3];
        document.getElementById('cep').innerHTML = cep[3];
        document.getElementById('tel').innerHTML = telefone[3];
        document.getElementById('horario').innerHTML = horario[3];
    }
    if(document.querySelector('#unidades')[5].selected){
        document.getElementById('end').innerHTML = endereco[4];
        document.getElementById('cep').innerHTML = cep[4];
        document.getElementById('tel').innerHTML = telefone[4];
        document.getElementById('horario').innerHTML = horario[4];
    }
    
}




