#!/usr/bin/env node

import { game } from '../src/index';
import { gameRule, getRoundData } from '../src/games/even';

game(gameRule, getRoundData);
