#!/usr/bin/env node

import { game } from '../src/index.js';
import { gameRule, getRoundData } from '../src/games/even.js';

game(gameRule, getRoundData);
