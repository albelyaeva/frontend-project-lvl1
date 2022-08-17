#!/usr/bin/env node

import { game } from '../src/index.js';
import { rule, getPrimeGameData } from '../src/games/prime.js';

game(rule, getPrimeGameData);
