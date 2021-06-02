import moment from 'moment';

let now = moment();

const horas = [];

for (let i = 1; i <= 60; i++) {
  horas.push(now.subtract(1, 'minute').format('HH:mm'));
}

export default horas.reverse();
