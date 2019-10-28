const main = ()=>{
    const canvas = document.getElementById('glCanvas');
    const gl = canvas.getContext('webgl');

    //El navegador es compatible con webgl?

    if(!gl){
        canvas.innerHTML = '<span>Tu navegador no soporta webgl</span>';
        return;
    }

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;