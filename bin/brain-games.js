#!/usr/bin/env node
import readlineSync from 'readline-sync';
import brainEven from './brain-even.js';
import brainCalc from './brain-calc.js';

const gameName = readlineSync.question('What do you want to play? ');
console.log(`${gameName}`);
if (gameName === 'brainEven') {
  brainEven();
}
if (gameName === 'brainCalc') {
  brainCalc();
}
