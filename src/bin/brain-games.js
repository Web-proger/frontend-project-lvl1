#!/usr/bin/env node

import startGame from '../index';
import getData from '../games/games';

startGame(getData, null);
