#!/usr/bin/env node
import readlineSync from 'readline-sync';
import brainEven from './brain-even.js';
import brainCalc from './brain-calc.js';
import brainGcd from './brain-gcd.js';

const gameName = readlineSync.question('What do you want to play? ');
console.log(`${gameName}`);
if (gameName === 'brainEven') {
  brainEven();
}
if (gameName === 'brainCalc') {
  brainCalc();
}
if (gameName === 'brainGcd') {
  brainGcd();
}
