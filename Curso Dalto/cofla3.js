// Parte A del ejercicio
class Celular {
    constructor(color, peso, resPantalla, resCamara, memRam) {
        this.color = color;
        this.peso = peso;
        this.resPantalla = resPantalla;
        this.resCamara = resCamara;
        this.memRam = memRam;
        this.encendido = false;
    }
    PrecionarBotonEncendido(){
        if (this.encendido == false){
            alert("Celular prendido")
            this.encendido = true;
        }else{
            alert("Celular Apagado");
            this.encendido = false;
        }
    }
    Reiniciar(){
        if (this.encendido == true){
            alert("Apagando");
            alert("Encendiendo");
        }else{
            alert("El celular esta apagado");
        }
    }
    TomarFoto(){
        if (this.encendido == true){
            alert(`Foto tomada en una resolucion de: ${this.resCamara}`);
        } else {
            alert("El celular esta apagado")
        }
    }
    GrabarVideo(){
        if (this.encendido == true){
            alert(`Grabando video en una resolucion de camara: ${this.resCamara}`);
        } else {
            alert("El celular esta apagado")
        }
    }
    mobileInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.resPantalla}</b><br>
        Resolucion de Camara: <b>${this.resCamara}</b><br>
        Memoria Ram: <b>${this.memRam}</b><br>
        `
    }
}

// Parte B del ejercicio

class CelularGamaAlta extends Celular{
    constructor(color, peso, resPantalla, resCamara, memRam, cantCamaras, nomfacial){
        super(color, peso, resPantalla, resCamara, memRam);
        this.cantCamaras = cantCamaras;
        this.reconocimentoFacial = true;
        this.camaraLenta = true;
        this.nomfacial = nomfacial;
    }
    GrabarVideoLento(){
        if (this.encendido == true){
            if (this.camaraLenta == true){
                alert(`Grabando video en camara lenta`);
            }else {
                alert(`No tiene camara Lenta`);
            }
        } else {
            alert("El celular esta apagado")
        }
    }
    ReconocerFacial(){
        if(this.encendido == true){
            if (this.reconocimentoFacial == true){
                if (this.nomfacial == prompt("nombre")){
                    alert("celular desbloqueado");
                }else{
                    alert("no reconocido");
                }
            }else{
                alert("no reconocimiento facial");
            }
        }else{
            alert("celular apagado")
        }
    }
}

// Parte C del ejercicio

class App {
    constructor(nomApp, cantDescargas, pntApp, peso){
        this.nomApp = nomApp;
        this.cantDescargas = cantDescargas;
        this.pntApp = pntApp;
        this.peso = peso;
        this.instalado = false;
        this.appAbierta = false;
    }
    InstalarApp(){
        if(this.instalado == false){
            alert("App instalada correctamente");
            this.instalado = true;
        } else{
            alert('La App ya estaba instalada');
        }
    }
    AbrirApp(){
        if(this.instalado == true){
            if(this.appAbierta == false){
                alert("App Abierta");
                this.appAbierta = true;
            }else{
                alert('La App ya estaba abierta');
            }
        }else{
            alert("La aplicacion no esta instalada");
        }
    }
    CerrarApp(){
        if(this.instalado == true){
            if(this.appAbierta == true){
                alert("App Cerrada");
                this.appAbierta = false;
            }else{
                alert('La App ya estaba cerrada');
            }
        }else{
            alert("La App no esta instalada");
        }
    }
    DesinstalarApp(){
        if(this.instalado == true){
            alert('App desinstalada correctamente');
            this.instalado = false;
        }else{
            alert('La App no estaba instalada');
        }
    }
    MostrarInfoApp(){
        return `
        Nombre: <b>${this.nomApp}</b><br>
        Peso de la App: <b>${this.peso}</b><br>
        Cantidad de descargas: <b>${this.cantDescargas}</b><br>
        Puntos de la App: <b>${this.pntApp}</b><br>
        `;
    }
}



// const celular1 = new Celular("rojo", "150g", "5.5'", "full hd", "3GB");
// const celular2 = new Celular("azul", "155g", "6'", "full hd", "2GB");
// const celular3 = new Celular("verde", "130g", "6.3'", "qhd", "4GB");

// const celular4 = new CelularGamaAlta("negro", "200gr", "6.5'", "uhd", "6GB", "2", "cofla");
// const celular5 = new CelularGamaAlta("blanco perla", "195gr", "6.4'", "uhd", "8GB", '8', "cofla");


// document.write(`Celular 1 <br>` + celular1.mobileInfo() + '<br>');
// document.write(`Celular 2 <br>` + celular2.mobileInfo() + '<br>');
// document.write(`Celular 3 <br>` + celular3.mobileInfo() + '<br>');
// '<br>';
// document.write(`Celular 4 <br>` + celular4.mobileInfo() + '<br>');
// document.write(`Celular 5 <br>` + celular5.mobileInfo() + '<br>');



// alert("celular 1");
// celular1.PrecionarBotonEncendido();
// celular1.PrecionarBotonEncendido();

// alert("celular 2");
// celular2.Reiniciar();
// celular2.PrecionarBotonEncendido();
// celular2.Reiniciar();

// alert("celular 3");
// celular3.TomarFoto();
// celular3.GrabarVideo();
// celular3.PrecionarBotonEncendido();
// celular3.GrabarVideo();
// celular3.TomarFoto();


const juego1 = new App("holapepe", "100k", '3.5', "120mb");
const juego2 = new App("holatom", "5M", '3.3', "150mb");
const juego3 = new App("holaales", "50M", '1.4', "220mb");
const juego4 = new App("holamundo", "5k", '4.4', "300mb");
const juego5 = new App("holanda", "50k", '5', "200mb");
const juego6 = new App("holancia", "500M", '3', "100mb");
const juego7 = new App("holame", "550k", '4.4', "500mb");

document.write(`Juego 1 <br>` + juego1.MostrarInfoApp() + '<br>');
document.write(`Juego 2 <br>` + juego2.MostrarInfoApp() + '<br>');
document.write(`Juego 3 <br>` + juego3.MostrarInfoApp() + '<br>');
document.write(`Juego 4 <br>` + juego4.MostrarInfoApp() + '<br>');
document.write(`Juego 5 <br>` + juego5.MostrarInfoApp() + '<br>');
document.write(`Juego 6 <br>` + juego6.MostrarInfoApp() + '<br>');
document.write(`Juego 7 <br>` + juego7.MostrarInfoApp() + '<br>');




// alert("desinstalada");
// juego1.AbrirApp();
// juego1.CerrarApp();
// juego1.DesinstalarApp();

// alert('instalada');
// juego1.InstalarApp();
// juego1.CerrarApp();
// juego1.AbrirApp();
// juego1.CerrarApp();
// juego1.DesinstalarApp();
