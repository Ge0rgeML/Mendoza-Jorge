(function () {
    const RandomNumberGenerator = (function () {
        const numbers = [];
        const container = document.getElementById('numbers-container');

        function generateRandomNumber() {
            return Math.floor(Math.random() * 99) + 1;
        }

        function createNumberBox(number) {
            const div = document.createElement('div');
            div.className = 'number-box';
            const span = document.createElement('span');
            span.textContent = number;
            div.appendChild(span);
            container.appendChild(div);
        }

        function updateDisplay() {
            
            container.innerHTML = '';
            numbers.forEach(number => createNumberBox(number));
        }

        return {
            generateNumber: function () {
                
                if (numbers.length >= 99) {
                    alert('Ya se han generado todos los números posibles (1-99).');
                    return;
                }

                let newNumber;
                do {
                    newNumber = generateRandomNumber();
                } while (numbers.includes(newNumber));

                numbers.push(newNumber);
                createNumberBox(newNumber);
            },
            sortAscending: function () {
                numbers.sort((a, b) => a - b);
                updateDisplay();
            },
            sortDescending: function () {
                numbers.sort((a, b) => b - a);
                updateDisplay();
            }
        };
    })();

    document.getElementById('generate').addEventListener('click', function () {
        RandomNumberGenerator.generateNumber();
    });

    document.getElementById('sortAsc').addEventListener('click', function () {
        RandomNumberGenerator.sortAscending();
    });

    document.getElementById('sortDesc').addEventListener('click', function () {
        RandomNumberGenerator.sortDescending();
    });
})();
