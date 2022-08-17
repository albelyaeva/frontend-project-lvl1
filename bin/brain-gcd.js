#!/usr/bin/env node

import { game } from '../src/index';
import { rule, getQuestionAndCorrectAnswer } from '../src/games/gcd';

game(rule, getQuestionAndCorrectAnswer);
