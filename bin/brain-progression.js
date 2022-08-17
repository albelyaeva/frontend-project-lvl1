#!/usr/bin/env node

import { game } from '../src/index.js';
import { rule, getProgressionGameData } from '../src/games/progression.js';

game(rule, getProgressionGameData);
