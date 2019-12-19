//=============================================================================
// Yanfly Engine Plugins - Picture Common Events
// YEP_PictureCommonEvents.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_PictureCommonEvents = true;

var Yanfly = Yanfly || {};
Yanfly.PCE = Yanfly.PCE || {};
Yanfly.PCE.version = 1.05;

//=============================================================================
 /*:
 * @plugindesc v1.05 Causes common events to run when certain pictures
 * are clicked while on the map.
 * @author Yanfly Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Enable Touch Move
 * @desc Is touch movement enabled by default?
 * NO - false   YES - true   Default: true
 * @default true
 *
 * @param Hide Message
 * @desc Hide Pictures with common events during messages?
 * NO - false   YES - true   Default: true
 * @default true
 *
 * @param ---Picture 1---
 * @default
 *
 * @param Picture 1 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 1 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 1 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 1 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 2---
 * @default
 *
 * @param Picture 2 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 2 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 2 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 2 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 3---
 * @default
 *
 * @param Picture 3 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 3 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 3 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 3 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 4---
 * @default
 *
 * @param Picture 4 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 4 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 4 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 4 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 5---
 * @default
 *
 * @param Picture 5 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 5 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 5 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 5 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 6---
 * @default
 *
 * @param Picture 6 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 6 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 6 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 6 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 7---
 * @default
 *
 * @param Picture 7 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 7 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 7 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 7 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 8---
 * @default
 *
 * @param Picture 8 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 8 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 8 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 8 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 9---
 * @default
 *
 * @param Picture 9 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 9 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 9 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 9 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 10---
 * @default
 *
 * @param Picture 10 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 10 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 10 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 10 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 11---
 * @default
 *
 * @param Picture 11 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 11 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 11 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 11 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 12---
 * @default
 *
 * @param Picture 12 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 12 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 12 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 12 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 13---
 * @default
 *
 * @param Picture 13 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 13 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 13 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 13 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 14---
 * @default
 *
 * @param Picture 14 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 14 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 14 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 14 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 15---
 * @default
 *
 * @param Picture 15 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 15 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 15 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 15 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 16---
 * @default
 *
 * @param Picture 16 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 16 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 16 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 16 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 17---
 * @default
 *
 * @param Picture 17 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 17 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 17 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 17 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 18---
 * @default
 *
 * @param Picture 18 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 18 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 18 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 18 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 19---
 * @default
 *
 * @param Picture 19 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 19 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 19 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 19 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 20---
 * @default
 *
 * @param Picture 20 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 20 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 20 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 20 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 21---
 * @default
 *
 * @param Picture 21 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 21 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 21 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 21 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 22---
 * @default
 *
 * @param Picture 22 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 22 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 22 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 22 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 23---
 * @default
 *
 * @param Picture 23 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 23 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 23 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 23 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 24---
 * @default
 *
 * @param Picture 24 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 24 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 24 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 24 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 25---
 * @default
 *
 * @param Picture 25 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 25 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 25 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 25 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 26---
 * @default
 *
 * @param Picture 26 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 26 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 26 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 26 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 27---
 * @default
 *
 * @param Picture 27 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 27 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 27 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 27 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 28---
 * @default
 *
 * @param Picture 28 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 28 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 28 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 28 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 29---
 * @default
 *
 * @param Picture 29 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 29 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 29 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 29 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 30---
 * @default
 *
 * @param Picture 30 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 30 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 30 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 30 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 31---
 * @default
 *
 * @param Picture 31 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 31 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 31 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 31 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 32---
 * @default
 *
 * @param Picture 32 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 32 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 32 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 32 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 33---
 * @default
 *
 * @param Picture 33 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 33 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 33 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 33 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 34---
 * @default
 *
 * @param Picture 34 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 34 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 34 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 34 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 35---
 * @default
 *
 * @param Picture 35 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 35 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 35 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 35 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 36---
 * @default
 *
 * @param Picture 36 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 36 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 36 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 36 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 37---
 * @default
 *
 * @param Picture 37 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 37 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 37 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 37 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 38---
 * @default
 *
 * @param Picture 38 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 38 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 38 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 38 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 39---
 * @default
 *
 * @param Picture 39 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 39 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 39 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 39 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 40---
 * @default
 *
 * @param Picture 40 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 40 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 40 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 40 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 41---
 * @default
 *
 * @param Picture 41 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 41 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 41 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 41 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 42---
 * @default
 *
 * @param Picture 42 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 42 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 42 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 42 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 43---
 * @default
 *
 * @param Picture 43 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 43 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 43 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 43 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 44---
 * @default
 *
 * @param Picture 44 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 44 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 44 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 44 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 45---
 * @default
 *
 * @param Picture 45 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 45 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 45 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 45 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 46---
 * @default
 *
 * @param Picture 46 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 46 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 46 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 46 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 47---
 * @default
 *
 * @param Picture 47 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 47 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 47 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 47 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 48---
 * @default
 *
 * @param Picture 48 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 48 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 48 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 48 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 49---
 * @default
 *
 * @param Picture 49 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 49 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 49 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 49 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 50---
 * @default
 *
 * @param Picture 50 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 50 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 50 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 50 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 51---
 * @default
 *
 * @param Picture 51 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 51 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 51 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 51 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 52---
 * @default
 *
 * @param Picture 52 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 52 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 52 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 52 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 53---
 * @default
 *
 * @param Picture 53 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 53 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 53 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 53 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 54---
 * @default
 *
 * @param Picture 54 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 54 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 54 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 54 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 55---
 * @default
 *
 * @param Picture 55 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 55 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 55 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 55 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 56---
 * @default
 *
 * @param Picture 56 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 56 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 56 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 56 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 57---
 * @default
 *
 * @param Picture 57 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 57 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 57 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 57 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 58---
 * @default
 *
 * @param Picture 58 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 58 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 58 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 58 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 59---
 * @default
 *
 * @param Picture 59 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 59 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 59 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 59 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 60---
 * @default
 *
 * @param Picture 60 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 60 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 60 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 60 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 61---
 * @default
 *
 * @param Picture 61 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 61 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 61 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 61 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 62---
 * @default
 *
 * @param Picture 62 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 62 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 62 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 62 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 63---
 * @default
 *
 * @param Picture 63 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 63 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 63 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 63 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 64---
 * @default
 *
 * @param Picture 64 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 64 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 64 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 64 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 65---
 * @default
 *
 * @param Picture 65 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 65 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 65 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 65 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 66---
 * @default
 *
 * @param Picture 66 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 66 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 66 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 66 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 67---
 * @default
 *
 * @param Picture 67 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 67 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 67 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 67 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 68---
 * @default
 *
 * @param Picture 68 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 68 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 68 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 68 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 69---
 * @default
 *
 * @param Picture 69 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 69 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 69 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 69 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 70---
 * @default
 *
 * @param Picture 70 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 70 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 70 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 70 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 71---
 * @default
 *
 * @param Picture 71 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 71 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 71 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 71 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 72---
 * @default
 *
 * @param Picture 72 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 72 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 72 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 72 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 73---
 * @default
 *
 * @param Picture 73 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 73 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 73 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 73 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 74---
 * @default
 *
 * @param Picture 74 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 74 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 74 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 74 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 75---
 * @default
 *
 * @param Picture 75 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 75 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 75 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 75 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 76---
 * @default
 *
 * @param Picture 76 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 76 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 76 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 76 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 77---
 * @default
 *
 * @param Picture 77 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 77 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 77 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 77 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 78---
 * @default
 *
 * @param Picture 78 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 78 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 78 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 78 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 79---
 * @default
 *
 * @param Picture 79 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 79 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 79 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 79 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 80---
 * @default
 *
 * @param Picture 80 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 80 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 80 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 80 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 81---
 * @default
 *
 * @param Picture 81 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 81 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 81 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 81 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 82---
 * @default
 *
 * @param Picture 82 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 82 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 82 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 82 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 83---
 * @default
 *
 * @param Picture 83 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 83 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 83 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 83 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 84---
 * @default
 *
 * @param Picture 84 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 84 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 84 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 84 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 85---
 * @default
 *
 * @param Picture 85 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 85 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 85 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 85 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 86---
 * @default
 *
 * @param Picture 86 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 86 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 86 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 86 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 87---
 * @default
 *
 * @param Picture 87 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 87 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 87 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 87 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 88---
 * @default
 *
 * @param Picture 88 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 88 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 88 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 88 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 89---
 * @default
 *
 * @param Picture 89 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 89 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 89 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 89 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 90---
 * @default
 *
 * @param Picture 90 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 90 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 90 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 90 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 91---
 * @default
 *
 * @param Picture 91 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 91 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 91 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 91 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 92---
 * @default
 *
 * @param Picture 92 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 92 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 92 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 92 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 93---
 * @default
 *
 * @param Picture 93 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 93 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 93 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 93 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 94---
 * @default
 *
 * @param Picture 94 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 94 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 94 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 94 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 95---
 * @default
 *
 * @param Picture 95 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 95 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 95 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 95 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 96---
 * @default
 *
 * @param Picture 96 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 96 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 96 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 96 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 97---
 * @default
 *
 * @param Picture 97 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 97 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 97 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 97 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 98---
 * @default
 *
 * @param Picture 98 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 98 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 98 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 98 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 99---
 * @default
 *
 * @param Picture 99 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 99 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 99 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 99 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 100---
 * @default
 *
 * @param Picture 100 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 100 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 100 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 100 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Pictures can function as something other than just a visual for your game.
 * They can sometimes serve as UI elements or more! However, what they don't
 * have the ability to inherently do is to call upon common events when clicked
 * on by the mouse. With this plugin, the pictures bound to a common event will
 * become usable when clicked or touched!
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * In the plugin's parameters, you can set common event ID's to each picture ID
 * listed from 1 to 100 (max number of pictures used in RPG Maker MV is 100).
 * If the picture is has even a value of 1 opacity, that picture can be used
 * for a common event. There are four condition types that can be bound with
 * the common events:
 *
 * ---
 *
 * - CLICK -
 * If the picture is clicked upon, this will prompt the common event to trigger
 * if the common event value listed is above 0. This will trigger only once
 * until the player releases the mouse (or stops touching the screen).
 *
 * - REPEAT -
 * If the mouse is clicked and then held (or if the touch screen is pushed and
 * held), as long as the mouse is above the picture area and the common event
 * value listed is above 0, then this will trigger once every 6 frames until
 * the player releases the mouse (or stops touching the screen) or moves the
 * mouse outside of the picture boundaries.
 *
 * - HOLD -
 * If the mouse is clicked and then held (or if the touch screen is pushed and
 * held), as long as the mouse is above the picture area and the common event
 * value listed is above 0, then this will trigger every frame until the player
 * releases the mouse (or stops touching the screen) or moves the mouse outside
 * of the picture boundaries.
 *
 * - RELEASE -
 * Upon releasing the clicked mouse (or the moment the player stops touching
 * the screen) and releases the mouse above this picture and if the picture's
 * common event value listed is above 0, then this will trigger upon release.
 *
 * ---
 * 
 * Note that there are some behavioral changes in regards to pictures bound to
 * that of common events. Any picture that's bound to a common event will be
 * separate from the map's spriteset, and instead, bound to the scene. This is
 * so that in the event the screen is scrolled, zoomed in, shakes, etc., it
 * will NOT affect the bound pictures.
 *
 * This is because the pictures are generally to be used as UI elements and UI
 * elements best work under the practice that they do not change position.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are some plugin commands you can use should you want to add a
 * bit of control with the Picture Common Events.
 *
 * Plugin Command
 *
 *   EnableTouchMove
 *   DisableTouchMove
 *   - Allows the player to press a destination on the screen and move there or
 *   disables the player from using touch movement.
 *   
 *   HidePictureCommonEvents
 *   ShowPictureCommonEvents
 *   - Manually hide all pictures bound to common events or show them. If shown
 *   then pictures will return to their previous opacity value. Hidden pictures
 *   cannot be triggered to activate common events.
 *
 *   MovePlayer Down
 *   MovePlayer Left
 *   MovePlayer Right
 *   MovePlayer Up
 *   - Will cause the player character to move as if moving by using a 4-dir
 *   input (either via keyboard or controller). This is best used with 'Press'.
 *
 *   TriggerButton Ok
 *   TriggerButton Cancel
 *   TriggerButton Dash
 *   TriggerButton PageUp
 *   TriggerButton PageDown
 *   TriggerButton Left
 *   TriggerButton Up
 *   TriggerButton Right
 *   TriggerButton Down
 *   - This will cause the game to simulate triggering the button command of
 *   one of those original functions even if there is a common event bound to
 *   all of the keys of that original function.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.05:
 * - Added bug fixes found by Splendith:
 * - Bug fixed for events that allow the player to move immediately after
 * pressing the picture common event.
 * - Bug fixed for 'HidePictureCommonEvents' and 'ShowPictureCommonEvents'
 * plugin command that caused normal pictures to hide/show, too.
 *
 * Version 1.04:
 * - Fixed a bug that caused the 'HidePictureCommonEvents' plugin command to
 * not function properly.
 *
 * Version 1.03:
 * - Disabling Touch Move now also disables the Right Click button and
 * on-screen Two Finger tap to prevent random menu calls.
 *
 * Version 1.02:
 * - Fixed a bug that prevented the MovePlayer commands from working without a
 * dependency on the YEP_RegionEvents plugin.
 *
 * Version 1.01:
 * - Changed this plugin's Imported setting to YEP_PictureCommonEvents.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.makePictureCommonEventSettings = function(a, b) {
    Yanfly.PCE.Trigger = [null];
    Yanfly.PCE.Repeated = [null];
    Yanfly.PCE.Pressed = [null];
    Yanfly.PCE.Released = [null];
    for (var i = a; i < b + 1; ++i) {
      var param = 'Picture ' + i + ' Click';
      var value = Number(Yanfly.Parameters[param]);
      Yanfly.PCE.Trigger.push(value);
      var param = 'Picture ' + i + ' Repeat';
      var value = Number(Yanfly.Parameters[param]);
      Yanfly.PCE.Repeated.push(value);
      var param = 'Picture ' + i + ' Hold';
      var value = Number(Yanfly.Parameters[param]);
      Yanfly.PCE.Pressed.push(value);
      var param = 'Picture ' + i + ' Release';
      var value = Number(Yanfly.Parameters[param]);
      Yanfly.PCE.Released.push(value);
    }
};

Yanfly.Parameters = PluginManager.parameters('YEP_PictureCommonEvents');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.PCEMove = eval(String(Yanfly.Parameters['Enable Touch Move']));
Yanfly.Param.PCEHideMsg = eval(String(Yanfly.Parameters['Hide Message']));

Yanfly.makePictureCommonEventSettings(1, 100);

//=============================================================================
// Game_System
//=============================================================================

Yanfly.PCE.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Yanfly.PCE.Game_System_initialize.call(this);
    this.initPCESettings();
};

Game_System.prototype.initPCESettings = function() {
    this._touchMovement = Yanfly.Param.PCEMove;
    this._hidePceMsg = Yanfly.Param.PCEHideMsg;
    this._hidePceAll = false;
};

Game_System.prototype.isTouchMoveEnabled = function() {
    if (this._touchMovement === undefined) this.initPCESettings();
    return this._touchMovement;
};

Game_System.prototype.setTouchMoveEnabled = function(value) {
    if (this._touchMovement === undefined) this.initPCESettings();
    this._touchMovement = value;
};

Game_System.prototype.isPictureHiddenDuringMessage = function() {
    if (this._hidePceMsg === undefined) this.initPCESettings();
    return this._hidePceMsg;
};

Game_System.prototype.setPictureHiddenDuringMessage = function(value) {
    if (this._hidePceMsg === undefined) this.initPCESettings();
    this._hidePceMsg = value;
};

Game_System.prototype.isPictureHidden = function() {
    if (this._hidePceAll === undefined) this.initPCESettings();
    return this._hidePceAll;
};

Game_System.prototype.setPictureHidden = function(value) {
    if (this._hidePceAll === undefined) this.initPCESettings();
    this._hidePceAll = value;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.PCE.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.PCE.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'EnableTouchMove') {
      $gameSystem.setTouchMoveEnabled(true);
    } else if (command === 'DisableTouchMove') {
      $gameSystem.setTouchMoveEnabled(false);
    } else if (command === 'MovePlayer') {
      this.pictureCommonEventsMove(args);
    } else if (command === 'HidePictureCommonEvents') {
      $gameSystem.setPictureHidden(true);
    } else if (command === 'ShowPictureCommonEvents') {
      $gameSystem.setPictureHidden(false);
    } else if (command === 'TriggerButton') {
      this.triggerButton(args)
    }
};

Game_Interpreter.prototype.pictureCommonEventsMove = function(args) {
    var dir = args[0];
    if (dir.match(/down/i)) {
      $gamePlayer.moveByPictureCommonEvent(2);
    } else if (dir.match(/left/i)) {
      $gamePlayer.moveByPictureCommonEvent(4);
    } else if (dir.match(/right/i)) {
      $gamePlayer.moveByPictureCommonEvent(6);
    } else if (dir.match(/up/i)) {
      $gamePlayer.moveByPictureCommonEvent(8);
    }
};

Game_Interpreter.prototype.triggerButton = function(args) {
  if (!args) return;
  var button = args[0].toLowerCase();
  if (button === 'cancel') button = 'escape';
  if (button === 'dash') button = 'shift';
  Input._latestButton = button;
  Input._pressedTime = 0;
};

//=============================================================================
// Game_Player
//=============================================================================

Game_Player.prototype.moveByPictureCommonEvent = function(direction) {
    if (!this.isMoving() && this.canMove() && direction > 0) {
      Input._dir4 = direction;
    }
};

Yanfly.PCE.Game_Player_canMove = Game_Player.prototype.canMove;
Game_Player.prototype.canMove = function() {
    if ($gameMap.isEventRunning() && $gameMap.moveAfterCommonEvent()) {
      return true;
    }
    return Yanfly.PCE.Game_Player_canMove.call(this);
};

//=============================================================================
// Game_Map
//=============================================================================

Yanfly.PCE.Game_Map_isEventRunning = Game_Map.prototype.isEventRunning;
Game_Map.prototype.isEventRunning = function() {
    if ($gameTemp._commonEventId > 0) return true;
    return Yanfly.PCE.Game_Map_isEventRunning.call(this);
};

Game_Map.prototype.moveAfterCommonEvent = function() {
    var interpreter = $gameMap._interpreter;
    if (!interpreter._list) return false;
    if (interpreter.eventId() > 0) return false;
    var list = interpreter._list;
    if ($gameTemp.destinationX() === $gamePlayer.x &&
      $gameTemp.destinationY() === $gamePlayer.y) {
        $gameTemp.clearDestination();
    }
    for (var i = 0; i < list.length; ++i) {
      var code = list[i].code;
      var exceptionCodes = [];
      exceptionCodes.push(101, 102, 103, 104, 105);
      exceptionCodes.push(201, 205, 230, 232, 261);
      exceptionCodes.push(301);
      if (exceptionCodes.contains(code)) return false;
    }
    return true;
};

//=============================================================================
// Game_Picture
//=============================================================================

Game_Picture.prototype.isTriggered = function() {
    if (!SceneManager._scene instanceof Scene_Map) return false;
    if (this.opacity() <= 0) return false;
    var sp = SceneManager._scene.getPictureSprite(this);
    if (!sp) return false;
    var mx = this.getLocalTouchInputX();
    var my = this.getLocalTouchInputY();
    //console.log('click: ' + mx + ', ' + my);
    var rect = this.getSpriteRect(sp);
    return mx >= rect.x &&
           my >= rect.y &&
           mx < (rect.x + rect.width) &&
           my < (rect.y + rect.height);
};

Game_Picture.prototype.pictureId = function() {
    return $gameScreen._pictures.indexOf(this);
};

Game_Picture.prototype.getLocalTouchInputX = function() {
    value = TouchInput.x;
    return value;
};

Game_Picture.prototype.getLocalTouchInputY = function() {
    value = TouchInput.y;
    return value;
};

Game_Picture.prototype.getSpriteRect = function(sp) {
    var width = sp.width * Math.abs(sp.scale.x);
    var height = sp.height * Math.abs(sp.scale.y);
    var x = sp.x - (sp.anchor.x * width);
    var y = sp.y - (sp.anchor.y * height);
    if (sp.anchor.x === 0 && sp.scale.x < 0) x += sp.width * sp.scale.x;
    if (sp.anchor.y === 0 && sp.scale.y < 0) y += sp.height * sp.scale.y;
    //console.log('rect: ' + x + ', ' + y + ', ' + width + ', ' + height);
    return new Rectangle(x, y, width, height);
};

Game_Picture.prototype.isRelatedPictureCommonEvent = function() {
    $gameTemp._pictureCommonEvents = $gameTemp._pictureCommonEvents || [];
    if ($gameTemp._pictureCommonEvents[this.pictureId()]) {
      return $gameTemp._pictureCommonEvents[this.pictureId()];
    }
    if (Yanfly.PCE.Trigger[this.pictureId()]) {
      $gameTemp._pictureCommonEvents[this.pictureId()] = true;
    } else if (Yanfly.PCE.Repeated[this.pictureId()]) {
      $gameTemp._pictureCommonEvents[this.pictureId()] = true;
    } else if (Yanfly.PCE.Pressed[this.pictureId()]) {
      $gameTemp._pictureCommonEvents[this.pictureId()] = true;
    } else if (Yanfly.PCE.Released[this.pictureId()]) {
      $gameTemp._pictureCommonEvents[this.pictureId()] = true;
    } else {
      $gameTemp._pictureCommonEvents[this.pictureId()] = false;
    }
    return $gameTemp._pictureCommonEvents[this.pictureId()];
};

Yanfly.PCE.Game_Picture_opacity = Game_Picture.prototype.opacity;
Game_Picture.prototype.opacity = function() {
  if (this.isRelatedPictureCommonEvent()) {
    if ($gameSystem.isPictureHidden()) return 0;
    if ($gameMessage.isBusy() && $gameSystem.isPictureHiddenDuringMessage()) {
      return 0;
    }
  }
  return Yanfly.PCE.Game_Picture_opacity.call(this);
};

//=============================================================================
// Spriteset_Base
//=============================================================================

Yanfly.PCE.Spriteset_Base_createPictures =
    Spriteset_Base.prototype.createPictures;
Spriteset_Base.prototype.createPictures = function() {
    var scene = SceneManager._scene;
    if (scene instanceof Scene_Map) {
      this.createSceneMapPictures();
    } else {
      Yanfly.PCE.Spriteset_Base_createPictures.call(this);
    }
};

Spriteset_Base.prototype.createSceneMapPictures = function() {
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    var x = (Graphics.width - width) / 2;
    var y = (Graphics.height - height) / 2;
    this._pictureContainer = new Sprite();
    this._pictureContainer.setFrame(x, y, width, height);
    for (var i = 1; i <= $gameScreen.maxPictures(); i++) {
      var picture = new Sprite_Picture(i);
      if (picture.isRelatedPictureCommonEvent()) {
        SceneManager._scene.addPictureCommonEvent(picture);
      } else {
        this._pictureContainer.addChild(picture);
      }
    }
    this.addChild(this._pictureContainer);
};

//=============================================================================
// Sprite_Picture
//=============================================================================

Yanfly.PCE.Sprite_Picture_loadBitmap = Sprite_Picture.prototype.loadBitmap;
Sprite_Picture.prototype.loadBitmap = function() {
    Yanfly.PCE.Sprite_Picture_loadBitmap.call(this);
    SceneManager._scene.bindPictureSprite(this._pictureId, this);
};

Sprite_Picture.prototype.isRelatedPictureCommonEvent = function() {
    if (Yanfly.PCE.Trigger[this._pictureId]) return true;
    if (Yanfly.PCE.Repeated[this._pictureId]) return true;
    if (Yanfly.PCE.Pressed[this._pictureId]) return true;
    if (Yanfly.PCE.Released[this._pictureId]) return true;
    return false;
};

//=============================================================================
// Scene_Base
//=============================================================================

Scene_Base.prototype.bindPictureSprite = function(picture, sprite) {
};

//=============================================================================
// Scene_Map
//=============================================================================

Yanfly.PCE.Scene_Map_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
    this._pictureCommonEvents = [];
    Yanfly.PCE.Scene_Map_createSpriteset.call(this);
    this.addPictureCommonEventChildren();
};

Scene_Map.prototype.addPictureCommonEvent = function(picture) {
    this._pictureCommonEvents.push(picture);
};

Scene_Map.prototype.addPictureCommonEventChildren = function() {
    var length = this._pictureCommonEvents.length;
    for (var i = 0; i < length; ++i) {
      var picture = this._pictureCommonEvents[i];
      this.addChild(picture);
    }
};

Scene_Map.prototype.bindPictureSprite = function(picture, sprite) {
    this._pictureCommonEventsBind = this._pictureCommonEventsBind || {};
    this._pictureCommonEventsBind[picture] = sprite;
};

Scene_Map.prototype.getPictureSprite = function(picture) {
    this._pictureCommonEventsBind = this._pictureCommonEventsBind || {};
    return this._pictureCommonEventsBind[picture.pictureId()];
};

Yanfly.PCE.Scene_Map_processMapTouch = Scene_Map.prototype.processMapTouch;
Scene_Map.prototype.processMapTouch = function() {
    this.updatePictureEvents();
    if (this.allowProcessMapTouch()) {
      Yanfly.PCE.Scene_Map_processMapTouch.call(this);
    }
};

Scene_Map.prototype.allowProcessMapTouch = function() {
    if (SceneManager.isSceneChanging()) return false;
    if ($gameMap.isEventRunning()) return false;
    if ($gameTemp.isCommonEventReserved()) return false;
    return $gameSystem.isTouchMoveEnabled();
};

Scene_Map.prototype.updatePictureEvents = function() {
    if (TouchInput.isTriggered()) {
      this.updatePictureEventCheck(Yanfly.PCE.Trigger);
    }
    if (TouchInput.isRepeated()) {
      this.updatePictureEventCheck(Yanfly.PCE.Repeated);
    }
    if (TouchInput.isPressed()) {
      this.updatePictureEventCheck(Yanfly.PCE.Pressed);
    }
    if (TouchInput.isReleased()) {
      this.updatePictureEventCheck(Yanfly.PCE.Released);
    }
};

Scene_Map.prototype.updatePictureEventCheck = function(check) {
    if (SceneManager.isSceneChanging()) return;
    if ($gameMap.isEventRunning()) return;
    var picture = this.getTriggeredPictureCommonEvent(check);
    if (!picture) return;
    $gameTemp.reserveCommonEvent(check[picture.pictureId()]);
    $gameTemp.clearDestination();
};

Scene_Map.prototype.getTriggeredPictureCommonEvent = function(check) {
    var length = check.length;
    var lastpicture = null;
    for (var i = 1; i < length; ++i) {
      var picture = $gameScreen.picture(i);
      if (!check[i]) continue;
      if (!picture) continue;
      var rect = picture.getSpriteRect(this.getPictureSprite(picture));
      lastpicture = picture;
      if (picture.isTriggered()) return picture;
    }
    return null;
};

Yanfly.PCE.Scene_Map_isMenuCalled = Scene_Map.prototype.isMenuCalled;
Scene_Map.prototype.isMenuCalled = function() {
    if ($gameSystem.isTouchMoveEnabled()) {
      return Yanfly.PCE.Scene_Map_isMenuCalled.call(this);
    } else {
      return Input.isTriggered('menu');
    }
};

//=============================================================================
// End of File
//=============================================================================
