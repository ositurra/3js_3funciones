

/* Ejercicio 2.2. | Se deja como comentario ya que crea conflicto con 2.3.
const ele = document.getElementById("ele1")
ele.addEventListener("click",function(){
    ele.style.backgroundColor='yellow'
})
*/




// Ejercicio 2.3. | pintar.html
const ele = document.getElementById("ele1")
ele.addEventListener("click",function(){
    ele.style.backgroundColor='yellow';
})
ele.style.backgroundColor='green'



//Ejercicio 3.2. | 4_colores.html

const db=document.getElementById('div1')
const dr=document.getElementById('div2')
const dg=document.getElementById('div3')
const dy=document.getElementById('div4')


db.addEventListener('click', function(){
    db.style.backgroundColor="black";
})
dr.addEventListener('click', function(){
    dr.style.backgroundColor="black";
})
dg.addEventListener('click', function(){
    dg.style.backgroundColor="black";
})
dy.addEventListener('click', function(){
    dy.style.backgroundColor="black";
})


// Ejecicio 3.3. | teclado.html


var colorKey='';
document.addEventListener('keydown',function(event){
    if(event.key==='a'){colorKey='pink';
    }
    else if (event.key==='s'){colorKey='orange';
    }
    else if (event.key==='d'){colorKey='lightblue';
    }

    document.getElementById('key').style.backgroundColor=colorKey;
});


var colorKey2='';
document.addEventListener('keydown',function(event){
    if(event.key==='q'){colorKey2='purple';
    }
    else if (event.key==='w'){colorKey2='grey';
    }
    else if (event.key==='e'){colorKey2='brown';
    }

    document.getElementById('key2').style.backgroundColor=colorKey2;
});
