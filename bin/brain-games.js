#!/usr/bin/env node
import readlineSync from 'readline-sync';
import brainEven from './brain-even.js';
import brainCalc from './brain-calc.js';

const gameName = readlineSync.question('Во что ты блядь поиграть хочешь? ');
console.log(`${gameName}`);
if (gameName === 'brainEven') {
  brainEven();
}
if (gameName === 'brainCalc') {
  brainCalc();
}
