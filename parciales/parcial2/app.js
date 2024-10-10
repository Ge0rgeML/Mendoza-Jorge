(function () {
    const GeneradorNumeroAleatorio = (function () {
        const numeros = [];
        const contenedor = document.getElementById('contenedor-numeros');

        function generarNumeroAleatorio() {
            return Math.floor(Math.random() * 99) + 1;
        }

        function crearCajaNumero(numero) {
            const div = document.createElement('div');
            div.className = 'caja-numero';
            const span = document.createElement('span');
            span.textContent = numero;
            div.appendChild(span);
            contenedor.appendChild(div);
        }

        function actualizarPantalla() {
            contenedor.innerHTML = '';
            numeros.forEach(numero => crearCajaNumero(numero));
        }

        return {
            generarNumero: function () {
                if (numeros.length >= 99) {
                    alert('Ya se han generado todos los números posibles (1 al 99).');
                    return;
                }

                let nuevoNumero;
                do {
                    nuevoNumero = generarNumeroAleatorio();
                } while (numeros.includes(nuevoNumero));

                numeros.push(nuevoNumero);
                crearCajaNumero(nuevoNumero);
            },
            ordenarAscendente: function () {
                numeros.sort((a, b) => a - b);
                actualizarPantalla();
            },
            ordenarDescendente: function () {
                numeros.sort((a, b) => b - a);
                actualizarPantalla();
            }
        };
    })();

    document.getElementById('generar').addEventListener('click', function () {
        GeneradorNumeroAleatorio.generarNumero();
    });

    document.getElementById('ordenarAsc').addEventListener('click', function () {
        GeneradorNumeroAleatorio.ordenarAscendente();
    });

    document.getElementById('ordenarDesc').addEventListener('click', function () {
        GeneradorNumeroAleatorio.ordenarDescendente();
    });
})();
