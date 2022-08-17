#!/usr/bin/env node

import { game } from '../src/index.js';
import { rule, getQuestionAndCorrectAnswer } from '../src/games/gcd.js';

game(rule, getQuestionAndCorrectAnswer);
