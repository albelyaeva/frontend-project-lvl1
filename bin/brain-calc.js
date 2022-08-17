#!/usr/bin/env node

import { game } from '../src/index.js';
import { gameRule, getRoundData } from '../src/games/calc.js';

game(gameRule, getRoundData);
