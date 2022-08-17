#!/usr/bin/env node

import { game } from '../src/index';
import { rule, getProgressionGameData } from '../src/games/progression';

game(rule, getProgressionGameData);
