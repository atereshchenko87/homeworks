var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    figures = ['&#9823;', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;'];
//figures = ['п', 'Л', 'Кн', 'С', 'Ф', 'К', 'С', 'Кн', 'Л'];

function drawBoard(element) {
    for (i = 1; i <= 8; i++) {
        document.getElementById('top-row').insertAdjacentHTML('beforeend', `<div class='outer-cell'>${letters[i-1]}</dvi>`);
        document.getElementById('bottom-row').insertAdjacentHTML('beforeend', `<div class='outer-cell'>${letters[i-1]}</dvi>`);
        document.getElementById('left-col').insertAdjacentHTML('beforeend', `<div class='outer-cell'>${i}</dvi>`);
        document.getElementById('right-col').insertAdjacentHTML('beforeend', `<div class='outer-cell'>${i}</dvi>`);

        for (j = 1; j <= 8; j++) {
            var cell = document.createElement('div');
            cell.classList.add('cell');
            // cell.setAttribute('data-x', i);
            // cell.setAttribute('data-y', j);
            if ((i + j) % 2 != 0) {
                cell.classList.add('black');
            } else {
                cell.classList.add('white');
            }
            switch (i) {
                case 1:
                    cell.innerHTML = figures[j];
                    break;
                case 2:
                    cell.innerHTML = figures[0];
                    break;
                case 7:
                    cell.innerHTML = figures[0];
                    cell.style.color = 'white';
                    break;
                case 8:
                    cell.innerHTML = figures[j];
                    cell.style.color = 'white';
                    break;
            }
            document.getElementById(element).append(cell);
        }
    }
}
drawBoard('board');