#!/usr/bin/env node

import startGame from '../index';
import { getData, gamesDescription } from '../games/even';

startGame(getData, gamesDescription);
