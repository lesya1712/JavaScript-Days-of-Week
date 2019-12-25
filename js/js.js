var name = prompt('Привет, как Вас зовут?');
alert('Привет ' + name);


var week = +prompt('Введите число от 1 до 7');

var answer;

switch(week){
    case 1  : answer = 'Понедельник';  break;
    case 2  : answer = 'Вторник';      break;
    case 3  : answer = 'Среда';        break;
    case 4  : answer = 'Четверг';      break;
    case 5  : answer = 'Пятница';      break;
    case 6  : answer = 'Суббота';      break;
    case 7  : answer = 'Воскресенье';  break;
    default : answer = 'Упс.... нечего!))'
}
alert('Вы выбрали день недели: ' + answer);

