//После игры необходимо спросить номер вопроса.
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

//Выход из игры изменил на 0, т.к. при отмене промпта возвращается 0, что возвращает false по ветке else в
//isresult и выйти из цикла по кнопке нельзя.

var log = [],
    result;

do { //Выводим первый вопрос
    result = askQuestion('a');
    if (result.answer == 0) {
        break;
    }
    log.push(['a', result.answer]);
} while (!result.ok);
switch (result.answer) {
    case 1: // Первое действие - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            result = askQuestion('b');
            if (result.answer == 0) {
                break;
            }
            log.push(['b', result.answer]);
        } while (!result.ok);
        switch (result.answer) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // Второе действие Если ввели 2 то также переходим на 4 окно
                do {
                    result = askQuestion('d');
                    if (result.answer == 0) {
                        break;
                    }
                    log.push(['d', result.answer]);
                } while (!result.ok);
                break;
            case 0: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            result = askQuestion('c');
            if (result.answer == 0) {
                break;
            }
            log.push(['c', result.answer]);
        } while (!result.ok);
        switch (result.answer) {
            case 1: // Второе действие
            case 2: // Второе действие
                do {
                    result = askQuestion('d');
                    if (result.answer == 0) {
                        break;
                    }
                    log.push(['d', result.answer]);
                } while (!result.ok);
                break;
            case 0: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 0: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

//console.log(answers);
if (log.length != 0) {
    do {
        move = +prompt('Сделано ходов : ' + log.length + '.\nКакой из ходов просмотреть?');
        result = isresult(log.length, move);
        if (move == 0) {
            break;
        }
        logIndex = move - 1;
        if (result) {
            alert(works[log[logIndex][0] + '00'] + 'Выбран ход:\n' + works[log[logIndex][0] + log[logIndex][1]]);
        }
    } while (!result);

}

//------------------------------------------
function isresult(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    } else if (event < 0 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}

function askQuestion(step) {
    ok = false;
    answer = +prompt(works[step + '00'] + works[step + '1'] + works[step + '2'] + '0 - Выход из игры');
    if (answer != 0) {
        ok = isresult(works[step + '0'], answer);
    }
    return {
        ok,
        answer
    };
}