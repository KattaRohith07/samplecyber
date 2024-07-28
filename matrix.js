const canvas = document.getElementById('Matrix');
        const context = canvas.getContext('2d');

        const headerDiv = document.getElementById('header');
        canvas.width = headerDiv.clientWidth;
        canvas.height = headerDiv.clientHeight;

        const katakana = '#include<stdio.h>#include<conio.h>SJITcybertrix2k24';
        const latin = 'printf("sjit cybertrix")';
        const nums = '69420';

        const alphabet = katakana + latin + nums;

        const fontSize = 16;
        const columns = canvas.width / fontSize;

        const rainDrops = [];

        for (let x = 0; x < columns; x++) {
            rainDrops[x] = 1;
        }

        const draw = () => {
            context.fillStyle = 'rgba(0, 0, 0, 0.05)';
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.fillStyle = '#6ad7d9';
            context.font = fontSize + 'px monospace';

            for (let i = 0; i < rainDrops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

                if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    rainDrops[i] = 0;
                }
                rainDrops[i]++;
            }
        };

        setInterval(draw, 30);

        window.onresize = () => {
            canvas.width = headerDiv.clientWidth;
            canvas.height = headerDiv.clientHeight;

            const columns = canvas.width / fontSize;
            while (rainDrops.length < columns) {
                rainDrops.push(1);
            }
            while (rainDrops.length > columns) {
                rainDrops.pop();
            }
        };

        window.onresize();