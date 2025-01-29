<<<<<<< HEAD
const {DateTime, Interval} = require('luxon')

const agora = DateTime.now()
console.log(agora)

const diaDoAniversario = DateTime.fromFormat('01/02/1998', 'dd/MM/yyyy')
console.log(diaDoAniversario.day)
console.log(diaDoAniversario.month)

const idade = Interval.fromDateTimes(diaDoAniversario, agora).length('year')
=======
const {DateTime, Interval} = require('luxon')

const agora = DateTime.now()
console.log(agora)

const diaDoAniversario = DateTime.fromFormat('01/02/1998', 'dd/MM/yyyy')
console.log(diaDoAniversario.day)
console.log(diaDoAniversario.month)

const idade = Interval.fromDateTimes(diaDoAniversario, agora).length('year')
>>>>>>> f43de4f920a76d0c1c7021834e7989383592b387
console.log(Math.floor(idade))