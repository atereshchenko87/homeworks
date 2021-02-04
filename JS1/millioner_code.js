var i = 0,
    score = 0,
    finish = false;

for (var i = 0; i < questions.length;) {
    result = +prompt(questions[i].question + '\n\n1) ' + questions[i].answers[0] + '\n2) ' + questions[i].answers[1] + '\n3) ' + questions[i].answers[2] + '\n4) ' + questions[i].answers[3] + '\n\n0 - закончить игру');

    if (isNaN(result)) {
        alert('Вы ввели не число');
    } else if (result < 0 || result > 4) {
        alert('Нет такого варианта ответа');
    } else if (result == questions[i].correctAnswer) {
        score += questions[i].cost;
        i++;
    } else {
        break;
    }
}
alert('Спасибо за игру\nВы набрали ' + score + ' баллов');