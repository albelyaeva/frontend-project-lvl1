#!/usr/bin/env node

import { game } from '../src/index';
import { rule, getPrimeGameData } from '../src/games/prime';

game(rule, getPrimeGameData);
