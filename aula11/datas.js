const {DateTime, Interval} = require('luxon')

const agora = DateTime.now()
console.log(agora)

const diaDoAniversario = DateTime.fromFormat('01/02/1998', 'dd/MM/yyyy')
console.log(diaDoAniversario.day)
console.log(diaDoAniversario.month)

const idade = Interval.fromDateTimes(diaDoAniversario, agora).length('year')
console.log(Math.floor(idade))