const materias = {
    fisica: [100,6,3],
    matematica: [75,7,4],
    logica: [22,2,1,],
    quimica: [90,4,4],
    calculo: [99,5,3],
    programacion: [99,10,4],
    biologia: [10,2,1],
    bd: [91,8,4],
    algebra: [89,10,4]
}

const aprobo = ()=>{
    for (materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        console.log(materia);
        if(asistencias >= 90){
            console.log("%cAsistencias en orden", "color:green");
        } else {
            console.log("%cFalta de asistencias", "color:red");
        }
        if(promedio >= 7){
            console.log("%cPromedio en Orden", "color:green");
        }else{
            console.log("%cPromedio desaprobado", "color:red");
        }
        if (trabajos >= 3){
            console.log("%cTrabajos practicos en Orden", "color:green");
        } else {
            console.log("%cFaltan trabajos practicos", "color:red")
        }
    }
}


aprobo();