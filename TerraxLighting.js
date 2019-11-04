//=============================================================================
// Terrax Plugins - Lighting system
// TerraxLighting.js
// Version: 1.2.9
//=============================================================================
//
// This script overwrites the following core scripts.
// Scene_Load.prototype.onSavefileOk
// Game_CharacterBase.prototype.updateMove
// Spriteset_Map.prototype.createLowerLayer

//=============================================================================
 /*:
 * @plugindesc v1.2.9 Creates an extra layer that darkens a map and adds lightsources!
 * @author Terrax
 *
 * @param Player radius
 * @desc Adjust the light radius around the player
 * Default: 300
 * @default 300
 *
 * @param Reset Lights
 * @desc Resets the light switches each map
 * Default: No
 * @default No
 *
 * @param Save DaynightHours
 * @desc Game variable the time of day (0-23) can be stored in
 * Default: 0
 * @default 0
 *
 * @param Save DaynightMinutes
 * @desc Game variable the time of day (0-59) can be stored in
 * Default: 0
 * @default 0
 *
 * @param Save DaynightSeconds
 * @desc Game variable the time of day (0-59) can be stored in
 * Default: 0
 * @default 0 
 *
 * @param Flashlight offset
 * @desc Increase this setting to move up the flashlight for double height characters.
 * Default: 0
 * @default 0 
 *
 * @param Screensize X
 * @desc Increase if your using a higher screen resolution then the default
 * Default : 866
 * @default 866
 *
 * @param Screensize Y
 * @desc Increase if your using a higher screen resolution then the default
 * Default : 630
 * @default 630
 *
 * @param Kill Switch
 * @desc Possible values A,B,C,D. If Selfswitch X is switched ON, the events lightsource will be disabled.
 * Default : No
 * @default No
 *
 * @help
 * To activate the script in an area, do the following:
 * 1. Put an event switch into the map.
 * 2. In the 'Note' field (Next to the name) put the following text :
 * Light 250 #FFFFFF
 * - Light activates the script
 * - 250 is the lightradius of the object
 * - #FFFFFF is the lightcolor (white in this case)
 * 3. You're done, its that simple.
 *
 * You can add two optional commands for brightness and direction
 * Light 200 #FFFFFF B50 increases the brightness with 50%. Value between 0 and 99.
 * Light 200 #FFFFFF D1 will give half a lightglobe for lightsources placed on walls.
 * 1. For lights on north walls, light will face down.
 * 2. For lights on east walls, light will face west.
 * 3. For lights on south walls, light will face north.
 * 4. For lights on west walls, light will face east.
 *
 * To alter the player radius in game use the following plugin command : 
 * Light radius 200 #FFFFFF  (to change the radius and the color)
 * If you want to change the player radius slowly over time (like a dying torch)
 * use the command 'Light radiusgrow 200 #FFFFFF'
 * You can alter the brightness of the players lightsource by adding: 
 * 'Light radius 200 #FFFFFF B70' (Brightness values between 0 and 99, 0 is default)
 *
 * To turn on and off lightsources in the game, do the following:
 * Give the lightsource the normal def :  Light 250 #FFFFFF and an extra number 
 * so it becomes 'Light 250 #FFFFFF 1'
 * (If your using the optional brightness and direction place it after those (Light 250 #FFFFFF B50 D2 1)
 * To turn on this light use plugin command : 'Light on 1'.
 * The plugin command will also trigger SelfSwitch 'D' on the targeted light(s).
 * To turn off the light use plugin command : 'Light off 1'.
 * You can reset the switches each map with the option or manualy by
 * the plugin command 'Light switch reset' 
 * You can also turn off lights with the kill-selfswitch defined in the parameters.
 *
 * Replacing the 'Light' keyworld with 'Fire' will give the lights a subtle flicker
 * You can configure the fire effect with the plugin command 'SetFire 7 10'
 * Where 7 is the radius change and 10 is the shift in color from red to yellow. 
 * 
 * To completly turn off the script use : 'Light deactivate'
 * To turn it on again use the command: 'Light activate'
 *
 * To activate a day-night cycle on a map, put in a trigger with 'DayNight' in an event note
 * or in the map note.
 * Plugin command 'Daynight speed 10' changes the speed.
 * Speed 10 means it takes 10 seconds to to pass one hour in game (probably to fast)
 * Plugin command 'Daynight hour 16 30' sets the hour to 16:30 hours
 * Each hour has its own color value.
 * Plugin command 'Daynight color 0 #222222' changes 0:00 hours to color value '#222222'
 * You can add time with the plugin command 'Daynight add 8 30' (this adds 8 hours and 30 minutes) 
 *
 * If you want to use the time of day to trigger effects (like turning on lights when it gets dark)
 * you can use the parameters 'Save DaynightHours','Save DaynightMinutes','Save DaynightSeconds'
 * The default is 0, which means its off.
 * If you set it to a value,5 for example, it will store the daynight value inside game variable 5.
 * You can then use that variable to trigger lights.
 * To help syncing/debugging the time system you can use scriptcommand 'daynight debug' to display the current time.
 * If you want to go 'alien world' and stuff, you can change the number of hours in a day with
 * script command 'daynight hoursinday 48' (for 48 hours in day, don't forget to fill in the hour values)
 *
 * As an alternative to the daynight cycle you can use the tint system. If you want to use another plugin for the 
 * day/night cycle, the tint option is probably best to use.
 * The plugin command 'Tint set #333333' will make the room less dark.
 * The plugin command 'Tint fade #777777 5' will fade the color from the current color to the new, the last
 * number (5) is the speed of the fade, were 1 is a fast fade and 20 is a very slow one.
 * If an area has a daynight cycle system, the tint system is disabled.
 *
 * To use a flashlight effect use 'Flashlight on 8 12 #FFFFFF 3' and 'Flashlight off'
 * The arguments are optional (8=beamlength, 12=beamwidth, #FFFFFF=color, 3=beam density)
 * Events can also use the flashlight effect. Use 'Flashlight 8 12 #888888 1 2' in the note-tag.
 * where 8 is the length of the flashlights beam and 12 is the width of the beam. The last numbers are
 * optional and can be used to turn the NPC's flashlight on or off and set the direction of the beam
 * if the event is not moving (1=up, 2=right, 3=down, 4=left) the default is down.
 *
 * TileLight and RegionLight settings
 * To create lightsources without using events you can use the following plugin command.
 * TileLight 1 ON #FFFFFF 150  Will create a lightsource (color #FFFFFF radius 150) on all tiles with tile-tag 1.
 * TileRegion 1 ON #FFFFFF 150 Will create a lightsource on all tiles with region-number 1.
 * You can increase the brightness of a lightsource with the optional TileRegion 1 ON #FFFFFF 150 B50  (for 50% increased brightness)
 * TileLight 1 OFF will turn off the lights on tile-tag 1 again 
 * TileRegion 1 OFF will turn off the lights on region-number 1 again  
 * TileFire and RegionFire works the same as TileLight, but with fire effect.
 * Make sure your map still has at least one event with lights in it, otherwise the script will not run.
 *
 * TileBlock and RegionBlock settings
 * To block lights on certain tiles (roofs for instance) you can use the following plugin command.
 * TileBlock 1 ON #000000  Will block light on tiles with tile-tag 1. 
 * RegionBlock 1 ON #000000 Will block lights on tiles with region-number 1.
 * TileBlock 1 OFF and TileRegion 1 OFF turns off the blocking again.
 * To darken but not completly block light use a slightly higher color setting (#333333) for instance.
 * This function does not raytrace. If the players lightradius is bigger then the blocking tiles the 
 * light will show on the other side. For the best effect keep the lightradius a bit smaller then the block section.
 * for advance users, if you want to block more or less of the tile you can do the following
 * RegionBlock 1 ON #000000 shape xoffset yoffset width height
 * RegionBlock 1 ON #000000 1 20 20 10 10   -> this will block a box starting at 20,20 with width and height 10,10
 * RegionBlock 1 ON #000000 2 20 20 10 10   -> this will block a oval starting at 20,20 with xradius 10 and yradius 10
 *
 * Released under the MIT license,
 * if used for commercial projects feel free to make a donation or 
 * better yet, give me a free version of what you have created.
 * e-mail : fox(AT)caiw.nl / terraxz2 on steam.
 * 
 * Special thanks to everyone in the rpgmakerweb community for idea's, support and interest.
*/
//=============================================================================
//  ps.. if my code looks funky, i'm an old guy..
// object orientated programming bugs the hell out of me.
var Imported = Imported || {};
Imported.TerraxLighting = true;

	// These are global variables so they can be used by other daynight plugins
 
	var Terrax_tint_speed = 60;
	var Terrax_tint_target = '#000000';
	
	// Global so it can be called from other plugins (compatability)
	

(function() {
	var lightarray_id = [];
	var tilearray = [];
	var lightarray_state = [];
	var lightgrow_value;
	var lightgrow_target;
	var lightgrow_speed;
	var oldmap = 0;
	var oldseconds = 0;
    var playercolor = '#FFFFFF';  
    var playerflicker = false; 
    var playerbrightness = 0.0;
    var flickerradiusshift = 7;
    var flickercolorshift = 10;
    var playerflashlight = false;
    var flashlightlength = 8;
    var flashlightwidth = 12; 
    var flashlightdensity = 3;
    var scriptactive = true;
    var daynightspeed = 10;
    var daynightcycle = 17;
    var daynighttimer = 0;
    var daynightstop = false;
    var daynightcolors = [  '#000000', '#000000', '#000000', '#000000',
      						'#000000', '#000000', '#666666', '#AAAAAA',
      						'#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
      						'#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
      						'#FFFFFF', '#FFFFFF', '#AAAAAA', '#666666',
      						'#000000', '#000000', '#000000', '#000000' ];       						
	var daynightHoursInDay = 24;
	var parameters = PluginManager.parameters('TerraxLighting');
    var player_radius = Number(parameters['Player radius'] || 300);	
	var reset_each_map = parameters['Reset Lights'] || No;  
	var daynightsave = Number(parameters['Save DaynightHours'] || 10);	
	var daynightsavemin = Number(parameters['Save DaynightMinutes'] || 11);
	var daynightsavesec = Number(parameters['Save DaynightSeconds'] || 12);
	var flashlightoffset = Number(parameters['Flashlight offset'] || 0);
	var killswitch = parameters['Kill Switch'] || No;
	
	var maxX = Number(parameters['Screensize X'] || 866);
	var maxY = Number(parameters['Screensize Y'] || 630);
	
	var daynightdebug = false;
	
	var tint_value = '#000000';
	var tint_timer = 0;
	//var tint_speed = 60;
	//var tint_target = '#000000';
	var tint_oldseconds = 0;
	
	var move_event_x = [];
	var move_event_y = [];
	var move_event_id = [];
	var move_event_dir = [];
	
	var tiletest = false;
	
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        command = command.toLowerCase();
              

        // ************* TILE TAGS ***************

        if (command === 'tileblock' || command === 'regionblock' || command === 'tilelight' || command === 'regionlight' || command === 'tilefire' || command === 'regionfire') {
	        var tiletype = 0;
	        if (command === 'tileblock') { tiletype = 1; }
	        if (command === 'regionblock') { tiletype = 2; }
	  	    if (command === 'tilelight') { tiletype = 3; }
	  	    if (command === 'regionlight') { tiletype = 4; }	
	  	    if (command === 'tilefire') { tiletype = 5; }
	  	    if (command === 'regionfire') { tiletype = 6; }	  	            
	 		var tilenumber = Number(args[0]);
 			var tile_on = 0;
 			if (args[1] === 'on' || args[1] === 'ON') {
 				var tile_on = 1;
		 	} 
	 		var tilecolor = args[2];
	 		var isValidColor  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(tilecolor); 	
	 		if (!isValidColor) {
		 		if ( tiletype === 1 || tiletype === 2) {
	 				tilecolor = '#000000';
 				} else {
	 				tilecolor = '#FFFFFF';
 				}
			}
			
			var tileradius = 100;
			var tilebrightness = 0.0;
			var shape = 0;
			var x1 = 0;
			var y1 = 0;
			var x2 = 0;
			var y2 = 0;
			if ( tiletype === 1 || tiletype === 2) {
					if (args.length > 3) { shape = args[3]; }
					if (args.length > 4) { x1 = args[4]; }
					if (args.length > 5) { y1 = args[5]; }
					if (args.length > 6) { x2 = args[6]; }
					if (args.length > 7) { y2 = args[7]; }
			} else {
					if (args.length > 3) { tileradius = args[3]; }
					if (args.length > 4) { tilebrightness = args[4]; }
			} 
			
			var tilefound = false;
			
			for (var i = 0; i < tilearray.length; i++) {
				tilestr = tilearray[i];
				var tileargs = tilestr.split(";");
				if (tileargs[0] == tiletype && tileargs[1] == tilenumber ) {
					tilefound = true;
					if ( tiletype === 1 || tiletype === 2) {
						tilearray[i] = tiletype + ";" + tilenumber + ";" + tile_on + ";" + tilecolor + ";" + shape + ";" + x1 + ";" + y1 + ";" + x2 + ";" + y2;
					} else {
						tilearray[i] = tiletype + ";" + tilenumber + ";" + tile_on + ";" + tilecolor + ";" + tileradius + ";" + tilebrightness;
					}	
						//Graphics.Debug('Set',tilearray[i]);
				}
			}
			
			if (tilefound === false) {
				if ( tiletype === 1 || tiletype === 2) {
					tiletag = tiletype + ";" + tilenumber + ";" + tile_on + ";" + tilecolor + ";" + shape + ";" + x1 + ";" + y1 + ";" + x2 + ";" + y2;
				} else {
					tiletag = tiletype + ";" + tilenumber + ";" + tile_on + ";" + tilecolor + ";" + tileradius + ";" + tilebrightness;
				}
				tilearray.push(tiletag);	
				//Graphics.Debug('Push',tiletag);			
			}	 
			$gameVariables.setTileArray(tilearray);   
	          
    	}
    	
   
	    // ************* TINT  *******************        
        if (command === 'tint') {
	     
        	if (args[0] === 'set') { 
	        	tint_value = args[1];
	        	Terrax_tint_target = tint_value;
	        	$gameVariables.setTintValue(tint_value);
        	}  
        	if (args[0] === 'fade') { 
	        	Terrax_tint_target = args[1];
	        	Terrax_tint_speed = args[2];
	        	$gameVariables.setTintValue(Terrax_tint_target);
        	}	      
        	
            //Graphics.Debug('TINT',tint_value+' '+tint_target+' '+tint_speed);	
    	}
        // ************* DAYNIGHT *******************
        if (command === 'daynight') {
			
	   		if (args[0] === 'speed') {   
		   		daynightspeed = Number(args[1]);  
	        	if (daynightspeed == 0) {
		       		daynightspeed = 1000;
		       		daynightstop = true;
	        	} else {
	        		daynightstop = false;
		        }	
		        $gameVariables.setSpeedDayNightSave(daynightspeed);
	   		}
	   		
	   		if (args[0] === 'add') {   
		   		var houradd = Number(args[1]); 
		   		var minuteadd = 0;
		   		if (args.length > 2) {
		   			minuteadd = Number(args[2]); 
	   			}
	   			
	   			var daynightminutes = Math.floor(daynighttimer/daynightspeed);
	   			daynightminutes = daynightminutes + minuteadd;
	   			if (daynightminutes > 60) {
		   			daynightminutes = daynightminutes - 60;
		   			daynightcycle = daynightcycle + 1; 
	   			}					   			
	   			daynightcycle = daynightcycle + houradd;
		   		daynighttimer = daynightminutes * daynightspeed;
		   		$gameVariables.setDayNightSaveMin(daynightminutes);
		   		if (daynightsavemin > 0) {
					$gameVariables.setValue(daynightsavemin, daynightminutes);			
				}
	        	if (daynightcycle < 0) {
		       		daynightcycle = 0;
				}
	        	if (daynightcycle >= daynightHoursInDay) {
		       		daynightcycle = daynightcycle - daynightHoursInDay;
				}
				if (daynightsave > 0) {
					$gameVariables.setValue(daynightsave, daynightcycle);			
				}
				$gameVariables.setDayNightSave(daynightcycle);
	   		}
	   		
	   		
	   		if (args[0] === 'hour') {   
		   		daynightcycle = Number(args[1]);  
		   		if (args.length > 2) {
		   			daynightminutes = Number(args[2]); 
	   			} else {
		   			daynightminutes = 0;
	   			}
		   		daynighttimer = daynightminutes * daynightspeed;
		   		$gameVariables.setDayNightSaveMin(daynightminutes);
		   		if (daynightsavemin > 0) {
					$gameVariables.setValue(daynightsavemin, daynightminutes);			
				}
	        	if (daynightcycle < 0) {
		       		daynightcycle = 0;
				}
	        	if (daynightcycle >= daynightHoursInDay) {
		       		daynightcycle = (daynightHoursInDay-1);
				}
				if (daynightsave > 0) {
					$gameVariables.setValue(daynightsave, daynightcycle);			
				}
				$gameVariables.setDayNightSave(daynightcycle);

			}
			
			if (args[0] === 'hoursinday') { 
				var old_value = daynightHoursInDay ; 
		   		daynightHoursInDay = Number(args[1]);  
	        	if (daynightHoursInDay < 0) {
		       		daynightHoursInDay = 0;
				}
	        	if (daynightHoursInDay > old_value) {
		       		for (var i = old_value; i < daynightHoursInDay; i++) {
			       		daynightcolors.push('#FFFFFF');	
		       		}	
				}
				$gameVariables.setDayNightColorArray(daynightcolors);
				$gameVariables.setDayNightHoursInDay(daynightHoursInDay);
			}
			
			if (args[0] === 'debug') {   
					daynightdebug = true;
			}
			
	   			   		
	   		if (args[0] === 'color') {   
		   		var hour = Number(args[1]);  
	        	if (hour < 0) {
		       		hour = 0;
				}
	        	if (hour >= daynightHoursInDay) {
		       		hour = (daynightHoursInDay-1);
				}
				hourcolor = args[2];
				var isValidColor  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(hourcolor); 	    
				if (isValidColor) {
					daynightcolors[hour] = hourcolor;
   				}
   				$gameVariables.setDayNightColorArray(daynightcolors);
			}
	   		
	        
		}
       
        // ************* FLASHLIGHT *******************
        if (command === 'flashlight') {
	        if (args[0] == 'on') {
    			playerflashlight = true;
    			if (args.length >= 1) { flashlightlength = args[1]; }
    			if (args.length >= 2) { flashlightwidth = args[2]; }
    			if (args.length >= 3) {
	    			 playercolor = args[3];
	    			 var isValidPlayerColor  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(playercolor); 	    
					if (!isValidPlayerColor) {
						playercolor = '#FFFFFF' 
					}
	    		}
    			if (args.length >= 4) {
	    			 flashlightdensity = args[4]; // density
	    		}

    			if (flashlightlength == 0 || isNaN(flashlightlength)) { flashlightlength = 8 }
    			if (flashlightwidth == 0 || isNaN(flashlightwidth)) { flashlightwidth = 12 }
    			if (flashlightdensity == 0 || isNaN(flashlightdensity)) { flashlightdensity = 3 }

    			$gameVariables.setPlayerColor(playercolor);  
    			$gameVariables.setFlashlightWidth(flashlightwidth); 
    			$gameVariables.setFlashlightLength(flashlightlength); 
    			$gameVariables.setFlashlightDensity(flashlightdensity); 
			}
	        if (args[0] === 'off') {
    			playerflashlight = false;
			}
			$gameVariables.setFlashLight(playerflashlight);
		} 
		
        // ******************* SET FIRE *******************
        if (command === 'setfire') {
	       
			flickerradiusshift = args[0];
			flickercolorshift = args[1];
			$gameVariables.setFireRadius(flickerradiusshift);
			$gameVariables.setFireColorshift(flickercolorshift);
		}			
		

		// ******************* FIRE *******************
        if (command === 'fire') {
    		playerflicker = true;
    		$gameVariables.setFire(playerflicker);
    		$gameVariables.setFireRadius(flickerradiusshift);
			$gameVariables.setFireColorshift(flickercolorshift);
	    } else {
			playerflicker = false;   
			$gameVariables.setFire(playerflicker);
			$gameVariables.setFireRadius(flickerradiusshift);
			$gameVariables.setFireColorshift(flickercolorshift);
		}			
		
        //var evid = this._eventId;
        if (command === 'light' || command === 'fire') {
	        
	        //******************* Light radius 100 #FFFFFF ************************  	    
	        if (args[0] == 'radius') {
    			var newradius = Number(args[1]);
    			if (newradius >= 0) {
    				player_radius = newradius;
    				lightgrow_value = newradius;
    				lightgrow_target = newradius;		
					$gameVariables.setRadiusSave(player_radius);
				}
				if (args.length > 2) {
					playercolor = args[2];
					var isValidPlayerColor  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(playercolor); 	    
					if (!isValidPlayerColor) {
						playercolor = '#FFFFFF'    
					}
					$gameVariables.setPlayerColor(playercolor);  
				}
			    // player brightness
				if (args.length > 3) {
					var brightness = 0.0;
					var b_arg = args[3];
					if (typeof b_arg != 'undefined') {
					    var key = b_arg.substring(0,1);
						if (key == 'b' || key == 'B') {
							playerbrightness = Number(b_arg.substring(1))/100;
							$gameVariables.setPlayerBrightness(playerbrightness);	
						}	
		    		}
    			}
			} 
			
			//******************* Light radiusgrow 100 #FFFFFF ************************  	    
	        if (args[0] === 'radiusgrow') {
		        var evid = this._eventId;
		        //Graphics.printError('test',evid);
    			var newradius = Number(args[1]);
    			if (newradius >= 0) {
    				//player_radius = newradius;
	 				lightgrow_value = player_radius;
					lightgrow_target = newradius;
					if (args.length >= 4) {
						if(player_radius > newradius) {
							//shrinking
							lightgrow_speed = (player_radius * 0.012) / Number(args[4]);
						} else {
							//growing
							lightgrow_speed = (newradius * 0.012) / Number(args[4]);
						}
					}else {
						lightgrow_speed = (Math.abs(newradius-player_radius))/500;	
					}
					//lightgrow_speed = (Math.abs(newradius-player_radius))/500;

				}
				// player color
				if (args.length > 2) {
					playercolor = args[2];
					var isValidPlayerColor  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(playercolor); 	    
					if (!isValidPlayerColor) {
						playercolor = '#FFFFFF'    
					}
					$gameVariables.setPlayerColor(playercolor);  
				}
				// player brightness
				if (args.length > 3) {
					var brightness = 0.0;
					var b_arg = args[3];
					if (typeof b_arg != 'undefined') {
					    var key = b_arg.substring(0,1);
						if (key == 'b' || key == 'B') {
							playerbrightness = Number(b_arg.substring(1))/100;
							$gameVariables.setPlayerBrightness(playerbrightness);	
						}	
		    		}
    			}
				
			} 
			
			// *********************** TURN SPECIFIC LIGHT ON *********************
 			if (args[0] === 'on') {
    	 		var lightid = Number(args[1]);
    			var idfound = false;
				for (var i = 0; i < lightarray_id.length; i++) {
					if (lightarray_id[i] == lightid) {
						idfound = true;
						lightarray_state[i] = true;
					}
				}
				if (idfound == false) {
					lightarray_id.push(lightid);
					lightarray_state.push(true);					
				}
				//Graphics.printError('test',lightarray_id.length+' '+lightarray_state.length);
				$gameVariables.setLightArrayId(lightarray_id);
				$gameVariables.setLightArrayState(lightarray_state);				
			}	
			
			// *********************** TURN SPECIFIC LIGHT OFF *********************
 			if (args[0] === 'off') {
    			var lightid = Number(args[1]);
    			var idfound = false;
				for (var i = 0; i < lightarray_id.length; i++) {
					if (lightarray_id[i] == lightid) {
						idfound = true;
						lightarray_state[i] = false;
					}
				}
				if (idfound == false) {
					lightarray_id.push(lightid);
					lightarray_state.push(false);
				}
				$gameVariables.setLightArrayId(lightarray_id);
				$gameVariables.setLightArrayState(lightarray_state); 
				//Graphics.Debug('RESET3','RESET3');	
				 
			}
			
			// **************************** RESET ALL SWITCHES ***********************
			if (args[0] === 'switch' && args[1] === 'reset') {
				// reset switches to false					
				for (var i = 0; i < $dataMap.events.length; i++) {
	        		if ($dataMap.events[i]) {
						for (var j = 0; j < lightarray_id.length; j++) {
							if (lightarray_id[j] == lightid) {
								var mapid = $gameMap.mapId();
								var eventid = $dataMap.events[i].id;
								var key = [mapid,eventid,'D'];
								$gameSelfSwitches.setValue(key, false);
							}
						}
					}
				}
    			lightarray_id = [];
				lightarray_state = [];
				$gameVariables.setLightArrayId(lightarray_id);
				$gameVariables.setLightArrayState(lightarray_state); 
			}
		}
		// *********************** TURN SCRIPT ON/OFF *********************
			if (command === 'light' && args[0] == 'deactivate') {
			scriptactive = false;	
			$gameVariables.setScriptActive(false);
		}
			if (command === 'light' && args[0] == 'activate') {
			scriptactive = true;
			$gameVariables.setScriptActive(true);
		}	
						

	}

	Spriteset_Map.prototype.createLightmask = function() {
	    this._lightmask = new Lightmask();
	    this.addChild(this._lightmask);
	};
	
	function Lightmask() {
	    this.initialize.apply(this, arguments);
	}
	
	Lightmask.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);
	Lightmask.prototype.constructor = Lightmask;
	
	Lightmask.prototype.initialize = function() {
	    PIXI.DisplayObjectContainer.call(this);
	    this._width = Graphics.width;
	    this._height = Graphics.height;
	    this._sprites = [];
	    this._createBitmap();
	};
	
	//Updates the Lightmask for each frame.
	
	Lightmask.prototype.update = function() {
		  	this._updateMask();
	};
	
	//@method _createBitmaps
	
	Lightmask.prototype._createBitmap = function() {
	    this._maskBitmap = new Bitmap(maxX,maxY);   // one big bitmap to fill the intire screen with black
	    var canvas = this._maskBitmap.canvas;
	};
	
	/**
	 * @method _updateAllSprites
	 * @private
	 */
	Lightmask.prototype._updateMask = function() {
	
	
		// ****** DETECT MAP CHANGES ********
		var map_id = $gameMap.mapId();
		if (map_id != oldmap) {
			oldmap = map_id;
				
			// moving lightsources
			for (var i = 0; i < $dataMap.events.length; i++) {
	        	if ($dataMap.events[i]) {
					for (var j = 0; j < move_event_id.length; j++) {
						if (move_event_id[j] == i) {
							move_event_x[j] = $dataMap.events[i].x;
							move_event_y[j] = $dataMap.events[i].y;
							move_event_dir[j] = 2;
						}
					}
				}
			}
			
			
			if (reset_each_map == 'Yes' || reset_each_map == 'yes') {
				// reset switches to false
				for (var i = 0; i < $dataMap.events.length; i++) {
	        		if ($dataMap.events[i]) {
						for (var j = 0; j < lightarray_id.length; j++) {
							if (lightarray_id[j] == lightid) {
								var mapid = $gameMap.mapId();
								var eventid = $dataMap.events[i].id;
								var key = [mapid,eventid,'D'];
								$gameSelfSwitches.setValue(key, false);
							}
						}
					}
				}
    			Lightarray_id = [];
				lightarray_state = [];
				$gameVariables.setLightArrayId(lightarray_id);
				$gameVariables.setLightArrayState(lightarray_state); 
			} 
		}
	
				
		// remove old sprites
		for (var i = 0; i < this._sprites.length; i++) {	  // remove all old sprites
			this._removeSprite();
		}
		
		
		if (scriptactive == true) {	
			// are there lightsources on this map?
			if($dataMap.note == undefined) return; //modify by xy 2017.1.7
			var searchdaynight = $dataMap.note.toLowerCase();
			if (searchdaynight.search('daynight') > 0) {	
				this._addSprite(0,0,this._maskBitmap); // daynight tag? yes.. then turn off the lights	
			} else {
				for (var i = 0; i < $dataMap.events.length; i++) {
			        if ($dataMap.events[i]) {
			            var note = $dataMap.events[i].note
			            var note_args = note.split(" ");
			    		var note_command = note_args.shift().toLowerCase();    		
			            if (note_command == "light" || note_command == "fire" || note_command == "daynight" || note_command == "flashlight" ) {			
							this._addSprite(0,0,this._maskBitmap); // light event? yes.. then turn off the lights		
							break;
						}
					}
				}
			}
		
			// ******** GROW OR SHRINK GLOBE *********
			
			if (lightgrow_value < lightgrow_target) {			
				lightgrow_value = lightgrow_value + lightgrow_speed;
				if(lightgrow_value > lightgrow_target) {
					//other wise it can keep fliping back and forth between > and <
					lightgrow_value = lightgrow_target;
				}
				player_radius = Math.floor(lightgrow_value)
				$gameVariables.setRadiusSave(player_radius);
			}
			if (lightgrow_value > lightgrow_target) {				
				lightgrow_value = lightgrow_value - lightgrow_speed;
				if(lightgrow_value < lightgrow_target) {
					//other wise it can keep fliping back and forth between > and <
					lightgrow_value = lightgrow_target;
				}
				player_radius = Math.floor(lightgrow_value)
				$gameVariables.setRadiusSave(player_radius);
			}
			
			
		    // ****** PLAYER LIGHTGLOBE ********
		
		    var canvas = this._maskBitmap.canvas;
		   	var ctx = canvas.getContext("2d");
		    this._maskBitmap.fillRect(0, 0, maxX, maxY, 'black');
		  
			//ctx.globalCompositeOperation = 'lighten';
			ctx.globalCompositeOperation = 'lighter';
			
			var pw = $gameMap.tileWidth()
		    var ph = $gameMap.tileHeight();
			var dx = $gameMap.displayX();
			var dy = $gameMap.displayY();
			var px = $gamePlayer._realX;
			var py = $gamePlayer._realY;
			var pd = $gamePlayer._direction;	
			
			var x1 = (pw/2)+( (px-dx)*pw);
			var y1 = (ph/2)+( (py-dy)*ph);
		    var paralax = false;
			// paralax does something weird with coordinates.. recalc needed
			if (dx>$gamePlayer.x) {
				var xjump = $gameMap.width() - Math.floor(dx-px);  
				x1 = (pw/2)+(xjump*pw);
			} 
			if (dy>$gamePlayer.y) {
				var yjump = $gameMap.height() - Math.floor(dy-py);
				y1 = (ph/2)+(yjump*ph);
			}
					
			if (player_radius > 0) {
				if (playerflashlight == true) {
					this._maskBitmap.radialgradientFillRect2(x1,y1, 20, player_radius, playercolor, 'black', pd, flashlightlength, flashlightwidth);
				}
				if (player_radius < 100){
					// dim the light a bit at lower lightradius for a less focused effect.
					var r = hexToRgb(playercolor).r;
		    		var g = hexToRgb(playercolor).g;
		    		var b = hexToRgb(playercolor).b;
		    		g = g - 60;
		    		r = r - 60;
		    		b = b - 60;
					if (g<0) { g = 0; }
					if (r<0) { r = 0; }
					if (b<0) { b = 0; }						
		  			var newcolor = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
		  				
					this._maskBitmap.radialgradientFillRect(x1,y1, 0, player_radius, newcolor, 'black', playerflicker,playerbrightness); 
				} else { 	
					this._maskBitmap.radialgradientFillRect(x1,y1, 20, player_radius, playercolor, 'black', playerflicker,playerbrightness); 
				}
				
			}
			

			// *********************************** DAY NIGHT CYCLE TIMER **************************
		            
		    if (daynightspeed > 0) {
				if (daynightstop == false) {
					var seconds;
					var datenow = new Date();
					var seconds = Math.floor(datenow.getTime()/10); 
					if (seconds > oldseconds) {
						oldseconds = seconds;
						daynighttimer = daynighttimer + 1;
						var daynightminutes = Math.floor(daynighttimer/daynightspeed)
					    var daynighttimeover = daynighttimer-(daynightspeed*daynightminutes)
					    var daynightseconds = Math.floor(daynighttimeover/daynightspeed*60)
					    if (daynightdebug == true) {
						    var daynightseconds2 = daynightseconds;
						    if (daynightseconds < 10) {
							    daynightseconds2 = '0' + daynightseconds;
							}
							Graphics.Debug('Debug Daynight system',daynightcycle+' '+daynightminutes+' '+daynightseconds2);	
						}
		 				if (daynightsavemin > 0) {
							$gameVariables.setValue(daynightsavemin, daynightminutes);			
						}
						if (daynightsavesec > 0) {
							$gameVariables.setValue(daynightsavesec, daynightseconds);			
						}
						$gameVariables.setDayNightSaveMin(daynightminutes);
						if (daynighttimer >= (daynightspeed * 60)) {

							daynightcycle = daynightcycle + 1;
							if (daynightcycle >= daynightHoursInDay ) {
								daynightcycle = 0;
							}	
							if (daynightsave > 0) {
								$gameVariables.setValue(daynightsave, daynightcycle);
		 					}
		 					$gameVariables.setDayNightSave(daynightcycle);
							daynighttimer = 0;
						}
					}
			    }
	        }
			
			// ********** OTHER LIGHTSOURCES **************
			var daynightset = false;
			for (var i = 0; i < $dataMap.events.length; i++) {
		        if ($dataMap.events[i]) {
		            var note = $dataMap.events[i].note;
		            var evid = $dataMap.events[i].id;
		            var note_args = note.split(" ");
		    		var note_command = note_args.shift().toLowerCase();
		            if (note_command == "light" || note_command == "fire" || note_command == "flashlight") {
			            
			            var objectflicker = false;
			            if (note_command == "fire") {
			        		objectflicker = true;
				        }
				        
			            var light_radius = 1;
				        var flashlength = 8;
				        var flashwidth = 12;
				        if (note_command == "flashlight") {
					        flashlength = Number(note_args.shift());
					        flashwidth = Number(note_args.shift());
					        if (flashlength == 0) { flashlightlenth = 8 }
	    					if (flashwidth == 0) { flashlightlenth = 12 }
				    	} else {				    	
			        		light_radius = note_args.shift();
		        		}        	
			        	// light radius
			        	if (light_radius >= 0) {
				        	
				        	// light color
				        	var colorvalue = note_args.shift();
				        	var isValidColor  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(colorvalue) 	    
				            if (!isValidColor) {
					        	colorvalue = '#FFFFFF'    
				            }   	
				            
				            // brightness and direction 
				            
				            var brightness = 0.0;
					    	var direction = 0;
					    	var next_arg = note_args.shift();
					       
						    if (typeof next_arg != 'undefined') {
						    	var key = next_arg.substring(0,1);
						    	if (key == 'b' || key == 'B') {
							    	brightness = Number(next_arg.substring(1))/100;
							    	next_arg = note_args.shift();
							    	if (typeof next_arg != 'undefined') {
						    			key = next_arg.substring(0,1);
					    			}
						    	}
						    	if (key == 'd' || key == 'D') {
							    	direction = next_arg.substring(1);
							    	next_arg = note_args.shift();
							    }			            
		            		}	
		            			  		
				            // conditional lighting
				            if (typeof next_arg != 'undefined') {
			           			var lightid = next_arg;
					        }else {
					        	var lightid = 0;
			           		}
						    //var lightid = note_args.shift();
						    
						    var state = true;
				        	if (lightid > 0) {
					        	var state = false;
						    	for (var j = 0; j < lightarray_id.length; j++) {
									if (lightarray_id[j] == lightid) {
										idfound = true;
										state = lightarray_state[j]; 
										var mapid = $gameMap.mapId();
										var eventid = $dataMap.events[i].id;
										
										//Graphics.printError('test',mapid+' '+eventid);
										key = [mapid,eventid,'D'];
										if (state == true) {
											$gameSelfSwitches.setValue(key, true);
										} else {
											$gameSelfSwitches.setValue(key, false);
										}
									}
								}
							}  
							
							// kill switch 
		            		if (killswitch == 'A' || killswitch == 'B' || killswitch == 'C' || killswitch == 'D') {
								key = [$gameMap.mapId(),$dataMap.events[i].id,killswitch];
								if ($gameSelfSwitches.value(key) == true) {	
									state = false;
									//Graphics.Debug('Deathswitch',killswitch);	
								}
	            			}
							      	
				        	// show light
				            if (state == true) {
				        				        	
					            var lpx = $dataMap.events[i].x;
					            var lpy = $dataMap.events[i].y;
					            ldir = 4
					            // moving lightsources
					            var flashlight = false;
								for (var j = 0; j < move_event_id.length; j++) {
									if (move_event_id[j] == evid) {
										lpx = move_event_x[j];
										lpy = move_event_y[j];
										ldir = move_event_dir[j];
										if (note_command === "flashlight") {
						            		flashlight = true;
					            		}
									}
								}
					            if (note_command == "flashlight" && flashlight === false ) {
						            flashlight = true;
						        	// flashlight direction
				            		var tldir = Number(note_args.shift());
				            		if (!isNaN(tldir)) {
					            		if (tldir < 0 || ldir >= 5) {ldir = 4}    
					            		if (tldir == 1) {ldir = 8}
					            		if (tldir == 2) {ldir = 6}
					            		if (tldir == 3) {ldir = 2}
					            		if (tldir == 4) {ldir = 4}	
				            		}     

								}
								//Graphics.Debug('ldir',ldir);	
								
					            var lx1 = (pw/2)+( (lpx-dx)*pw);
								var ly1 = (ph/2)+( (lpy-dy)*ph);
								// paralaxloop does something weird with coordinates.. recalc needed
								
								if ($dataMap.scrollType === 2 || $dataMap.scrollType === 3) {	
									if (dx-10>lpx) {
										var lxjump = $gameMap.width() - (dx-lpx);
										lx1 = (pw/2)+(lxjump*pw);
									} 
								}
								if ($dataMap.scrollType === 1 || $dataMap.scrollType === 3) {
									if (dy-10>lpy) {
										var lyjump = $gameMap.height() -(dy-lpy);
										ly1 = (ph/2)+(lyjump*ph);
									}
								}
								if (flashlight == true) {
									this._maskBitmap.radialgradientFillRect2(lx1,ly1, 0, light_radius , colorvalue, 'black', ldir, flashlength, flashwidth);
								} else {
					            	this._maskBitmap.radialgradientFillRect(lx1,ly1, 0, light_radius , colorvalue, 'black', objectflicker, brightness, direction); 
								}
					        }
		            	}
		            }
	       	
		            
					// *********************************** DAY NIGHT CYCLE FILTER **************************
					if (daynightset == false) {
						var mapnote = $dataMap.note.toLowerCase()
						var searchnote = mapnote.search("daynight")
					    if (searchnote >= 0 || note_command == "daynight" ) {
						    daynightset = true;
						    $gameVariables.setDayNightColorArray(daynightcolors);
			            }
		        	}
	            }
		    }
		    		   
			 // *************************** TILE TAG ********************* 
			 
    			 
			 
			for (var i = 0; i < tilearray.length; i++) {
				tilestr = tilearray[i];
				var tileargs = tilestr.split(";");
			    var tile_type = tileargs[0];
			    var tile_number = tileargs[1];
			    var tile_on = tileargs[2];
			    var tile_color = tileargs[3];
			    var tile_radius = 0;
			    var brightness = 0.0;
			    var shape = 0;
			    var xo1 = 0.0;
			    var yo1 = 0.0;
			    var xo2 = 0.0;
			    var yo2 = 0.0;
			   
			    if ( tile_type == 1 || tile_type == 2) {
				    
				    var b_arg = tileargs[4];
					if (typeof b_arg != 'undefined') { shape = b_arg; }
				    b_arg = tileargs[5];
					if (typeof b_arg != 'undefined') { xo1 = b_arg; }
					b_arg = tileargs[6];
					if (typeof b_arg != 'undefined') { yo1 = b_arg; }
					b_arg = tileargs[7];
					if (typeof b_arg != 'undefined') { xo2 = b_arg; }
					b_arg = tileargs[8];
					if (typeof b_arg != 'undefined') { yo2 = b_arg; }					
					
						
			    } else {
			    	tile_radius = tileargs[4];
					var b_arg = tileargs[5];
					if (typeof b_arg != 'undefined') {
					    var key = b_arg.substring(0,1);
						if (key == 'b' || key == 'B') {
							brightness = Number(b_arg.substring(1))/100;	
						}	
		    		}
	    		}
			    
			    if (tile_on == 1 ) {
			 
					if (tile_type >= 3 ) { 
					    // *************************** TILE TAG LIGHTSOURCES *********
					    for (var y = 0; y < $dataMap.height; y++) {	
							for (var x = 0; x < $dataMap.width; x++) {
								var tag = 0;
								if (tile_type == 3 || tile_type == 5) { tag = $gameMap.terrainTag(x,y); }          // tile light
						    	if (tile_type == 4 || tile_type == 6) { tag = $dataMap.data[(5 * $dataMap.height + y) * $dataMap.width + x]; }  // region light
								if (tag == tile_number) {			    	    
									var x1 =(pw/2)+(x-dx)*pw;
									var y1 =(ph/2)+(y-dy)*ph;
									
									if ($dataMap.scrollType === 2 || $dataMap.scrollType === 3) {	
										if (dx-5>x) {
											var lxjump = $gameMap.width() - (dx-x);
											x1 = (pw/2)+(lxjump*pw);
										} 
									}
									if ($dataMap.scrollType === 1 || $dataMap.scrollType === 3) {
										if (dy-5>y) {
											var lyjump = $gameMap.height() -(dy-y);
											y1 = (ph/2)+(lyjump*ph);
										}
									}									
									
									if (tile_type == 3 || tile_type == 4) {
										this._maskBitmap.radialgradientFillRect(x1,y1, 0, tile_radius , tile_color, 'black', false, brightness); // Light
									} else {
										
										this._maskBitmap.radialgradientFillRect(x1,y1, 0, tile_radius , tile_color, 'black', true, brightness);  // Fire
									}
					    		}
				        	}
			        	}
		        	}
				
		        	
		    		// *************************** REDRAW MAPTILES FOR ROOFS ETC *********
					if (tile_type == 1 || tile_type == 2) { 
					    for (var y = 0; y < $dataMap.height; y++) {	
							for (var x = 0; x < $dataMap.width; x++) {
						    	//var tag = $gameMap.terrainTag(x,y);
						    	var tag = 0;
						    	if (tile_type == 1) { tag = $gameMap.terrainTag(x,y); }                  // tile block
						    	if (tile_type == 2) { tag = $dataMap.data[(5 * $dataMap.height + y) * $dataMap.width + x]; }  // region block
								if (tag == tile_number ) {
									ctx.globalCompositeOperation =  'darker';
									var x1 =  (x-dx)*pw;
									var y1 =  (y-dy)*ph;
									
									if ($dataMap.scrollType === 2 || $dataMap.scrollType === 3) {	
										if (dx-5>x) {
											var lxjump = $gameMap.width() - (dx-x);
											x1 = (lxjump*pw);
										} 
									}
									if ($dataMap.scrollType === 1 || $dataMap.scrollType === 3) {
										if (dy-5>y) {
											var lyjump = $gameMap.height() -(dy-y);
											y1 = (lyjump*ph);
										}
									}										
									if (shape == 0) {
										this._maskBitmap.FillRect(x1,y1,pw,ph,tile_color);
									} 
									if (shape == 1) { 
										x1 = x1 + Number(xo1);
										y1 = y1 + Number(yo1);
										this._maskBitmap.FillRect(x1,y1,Number(xo2),Number(yo2),tile_color);
									}	
									if (shape == 2) {
										x1 = x1 + Number(xo1);
										y1 = y1 + Number(yo1);
										//this._maskBitmap.FillRect(x1,y1,pw,ph,tile_color);
										this._maskBitmap.FillCircle(x1,y1,Number(xo2),Number(yo2),tile_color);
									}	
									ctx.globalCompositeOperation = 'lighter';
					    		}
				        	}
			        	}
					}
				}
			}

        	// *********************************** DAY NIGHT CYCLE FILTER **************************

			if (daynightset == true) {

		        var color1 = daynightcolors[daynightcycle];
					
				if (daynightspeed > 0) {
    				var nextcolor = daynightcycle+1;
    				if (nextcolor >= daynightHoursInDay ) {
	    				nextcolor = 0;	
    				}
    				var color2 = daynightcolors[nextcolor];

    				var r = hexToRgb(color1).r;
		    		var g = hexToRgb(color1).g;
		    		var b = hexToRgb(color1).b;
		    			
		    		var r2 = hexToRgb(color2).r;
		    		var g2 = hexToRgb(color2).g;
		    		var b2 = hexToRgb(color2).b;		    			
		    			
		    		var stepR = (r2-r)/(60*daynightspeed);
		    		var stepG = (g2-g)/(60*daynightspeed);
		    		var stepB = (b2-b)/(60*daynightspeed);
		    						    					    			
		    		r = Math.floor(r + (stepR * daynighttimer));
		    		g = Math.floor(g + (stepG * daynighttimer));
		    		b = Math.floor(b + (stepB * daynighttimer));
		    						    			
    			}		    					    			
	  			color1 = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
					
				this._maskBitmap.FillRect(0,0,maxX,maxY,color1);
            }

		    // *********************************** TINT **************************

		    if (daynightset == false) {
		    			
				color1 = tint_value;
			    if (tint_value != Terrax_tint_target) {
	
					var tintdatenow = new Date();
					var tintseconds = Math.floor(tintdatenow.getTime()/10); 
					if (tintseconds > tint_oldseconds) {
						tint_oldseconds = tintseconds; 
						tint_timer ++;
					}
				    							
				    var r = hexToRgb(tint_value).r;
					var g = hexToRgb(tint_value).g;
					var b = hexToRgb(tint_value).b;
						    			
					var r2 = hexToRgb(Terrax_tint_target).r;
					var g2 = hexToRgb(Terrax_tint_target).g;
					var b2 = hexToRgb(Terrax_tint_target).b;		    			
						    			
					var stepR = (r2-r)/(60*Terrax_tint_speed);
					var stepG = (g2-g)/(60*Terrax_tint_speed);
					var stepB = (b2-b)/(60*Terrax_tint_speed);
						    						    					    			
					r3 = Math.floor(r + (stepR * tint_timer));
					g3 = Math.floor(g + (stepG * tint_timer));
					b3 = Math.floor(b + (stepB * tint_timer));
					if (r3<0) { r3 = 0 }
					if (g3<0) { g3 = 0 }
					if (b3<0) { b3 = 0 }
					if (r3>255) { r3 = 255 }
					if (g3>255) { g3 = 255 }
					if (b3>255) { b3 = 255 }								
					var reddone = false;
					var greendone = false;
					var bluedone = false;
					if (stepR >=0 && r3>=r2) {
						reddone = true;	
					}
					if (stepR <=0 && r3<=r2) {
						reddone = true;	
					}
					if (stepG >=0 && g3>=g2) {
						greendone = true;	
					}
					if (stepG <=0 && g3<=g2) {
						greendone = true;	
					}	
					if (stepB >=0 && b3>=b2) {
						bluedone = true;	
					}
					if (stepB <=0 && b3<=b2) {
						bluedone = true;	
					}					
					if (reddone == true && bluedone == true && greendone == true) {
						tint_value = Terrax_tint_target;
					}
					color1 = "#" + ((1 << 24) + (r3 << 16) + (g3 << 8) + b3).toString(16).slice(1);	    						    			
				} else {
					tint_timer = 0;
				}		    					    			
				
			    				
				this._maskBitmap.FillRect(0,0,maxX,maxY,color1);
	    	}
	    	
			// reset drawmode to normal
		    ctx.globalCompositeOperation =  'source-over';	    
		}
	};
	

	
	
	
	/**
	 * @method _addSprite
	 * @private
	 */
	Lightmask.prototype._addSprite = function(x1,y1,selectedbitmap) {
		
	    var sprite = new Sprite(this.viewport);
	    sprite.bitmap = selectedbitmap;
	    sprite.opacity = 255;
	    sprite.blendMode = 2;
	    sprite.x = x1;
	 	sprite.y = y1;
	    this._sprites.push(sprite);
	    this.addChild(sprite);
	    sprite.rotation = 0;
	    sprite.ax = 0
	    sprite.ay = 0
	 	sprite.opacity = 255;
	};
	
	/**
	 * @method _removeSprite
	 * @private
	 */
	Lightmask.prototype._removeSprite = function() {
	    this.removeChild(this._sprites.pop());
	};
	
	
		
	// *******************  NORMAL BOX SHAPE ***********************************
	
	Bitmap.prototype.FillRect = function(x1, y1, x2, y2, color1) {
	    var context = this._context;
	    context.save();
	    context.fillStyle = color1;
	    context.fillRect(x1, y1, x2, y2);
	    context.restore();
	    this._setDirty();
	};
	
	// *******************  CIRCLE/OVAL SHAPE ***********************************
	// from http://scienceprimer.com/draw-oval-html5-canvas
	Bitmap.prototype.FillCircle = function(centerX, centerY, xradius, yradius, color1) {
	    var context = this._context;
	    context.save();
	    context.fillStyle = color1;
	   	context.beginPath();
	   	var rotation = 0;
	   	var start_angle = 0;
	   	var end_angle = 2 * Math.PI;
		for (var i = start_angle * Math.PI; i < end_angle * Math.PI; i += 0.01 ) {
    		xPos = centerX - (yradius * Math.sin(i)) * Math.sin(rotation * Math.PI) + (xradius * Math.cos(i)) * Math.cos(rotation * Math.PI);
    		yPos = centerY + (xradius * Math.cos(i)) * Math.sin(rotation * Math.PI) + (yradius * Math.sin(i)) * Math.cos(rotation * Math.PI);

    		if (i == 0) {
        		context.moveTo(xPos, yPos);
    		} else {
        		context.lineTo(xPos, yPos);
    		}
		}
		context.fill();
		context.closePath();
	    context.restore();
	    this._setDirty();
	};
	
	
	// *******************  NORMAL LIGHT SHAPE ***********************************
	// Fill gradient circle
	
	Bitmap.prototype.radialgradientFillRect = function(x1, y1, r1, r2, color1, color2, flicker, brightness, direction) {
		if (!brightness) { brightness = 0.0; }
		if (!direction) {direction = 0; }
	    var context = this._context;
	    var grad;	  
	    var wait = Math.floor((Math.random()*8)+1); 
	   	if (flicker == true && wait == 1) {
		   	//var flickerradiusshift = 7;
    		//var flickercolorshift = 10;
		    var gradrnd = Math.floor((Math.random()*flickerradiusshift)+1); 
		  	var colorrnd = Math.floor((Math.random()*flickercolorshift)-(flickercolorshift/2)); 
		  	
		    var r = hexToRgb(color1).r;
		    var g = hexToRgb(color1).g;
		    var b = hexToRgb(color1).b;
		    g = g + colorrnd;
		    if (g<0) { g = 0; }
			if (g>255) { g = 255; }
		  	color1 = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
		    r2 = r2 - gradrnd;  
		    if (r2 < 0) r2=0;
  		}
  		
	  	grad = context.createRadialGradient(x1, y1, r1, x1, y1, r2);
	    grad.addColorStop(0, '#FFFFFF');
	    grad.addColorStop(brightness, color1);
	   	grad.addColorStop(1, color2);

	    context.save();
	    context.fillStyle = grad;
	    direction = Number(direction);
	    var pw = $gameMap.tileWidth()/2;
	    var ph = $gameMap.tileHeight()/2;
	    switch(direction) {
	    	case 0:
	    		context.fillRect(x1-r2, y1-r2, r2*2, r2*2);
	       	    break;
	   		case 1:
	   			context.fillRect(x1-r2, y1-ph, r2*2, r2*2);
	       	    break;
	   		case 2:
	   			context.fillRect(x1-r2, y1-r2, r2*1+pw, r2*2);
	       	    break;
	        case 3:
	            context.fillRect(x1-r2, y1-r2, r2*2, r2*1+ph);
	       	    break;
	        case 4:
	            context.fillRect(x1-pw, y1-r2, r2*2, r2*2);
	       	    break;	       	    
		} 
	    
	    
	    // context.fillRect(x1-r2, y1-r2, r2*2, r2*2);
	    context.restore();
	    this._setDirty();
	};
	
	// ********************************** FLASHLIGHT *************************************
	// Fill gradient Cone
	
	Bitmap.prototype.radialgradientFillRect2 = function(x1, y1, r1, r2, color1, color2, direction, flashlength, flashwidth) {
	    var context = this._context;
	    var grad;	
	    
	    // smal dim glove around player
	   	context.save();
	    y1 = y1 - flashlightoffset;
	     
	    r1 = 1;
	  	r2 = 40;
		grad = context.createRadialGradient(x1, y1, r1, x1, y1, r2);
		grad.addColorStop(0, '#999999');
		grad.addColorStop(1, color2);
	
		context.fillStyle = grad;
		context.fillRect(x1-r2, y1-r2, r2*2, r2*2);
	    
	    // flashlight
	    
		for (var cone = 0; cone < flashlength; cone++) {
		   	r1 = cone * flashlightdensity;
	  		r2 = cone * flashwidth;
	  		
	  		switch(direction) {
	    		case 6:
	    			x1 = x1 + cone*6;
	       	    	break;
	   			case 4:
	   				x1 = x1 - cone*6;
	       	    	break;
	   			case 2:
	   				y1 = y1 + cone*6;
	       	    	break;
	            case 8:
	            	y1 = y1 - cone*6;
	       	    	break;
			} 
	  		  		

		  	grad = context.createRadialGradient(x1, y1, r1, x1, y1, r2);
		    grad.addColorStop(0, color1);
		    grad.addColorStop(1, color2);
	
		    context.fillStyle = grad;
		    context.fillRect(x1-r2, y1-r2, r2*2, r2*2);
    	}
	    context.fillStyle = grad;
		context.fillRect(x1-r2, y1-r2, r2*2, r2*2);
		
	    context.restore();	    
	    this._setDirty();
	};
	
	
	function hexToRgb(hex) {
    	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    	return result ? {
        	r: parseInt(result[1], 16),
        	g: parseInt(result[2], 16),
        	b: parseInt(result[3], 16)
    	} : null;
	}
	
	// Saving Variables in Game_Variables 
	// Big thanks to Schlangan for the code.
	
	Game_Variables.prototype.valueRadiusSave = function() {
		return this._Terrax_Lighting_Radius || 0;
	};
	Game_Variables.prototype.valueDayNightSave = function() {
		return this._Terrax_Lighting_DayNight || 0;
	};
	Game_Variables.prototype.valueDayNightSaveMin = function() {
		return this._Terrax_Lighting_DayNightMin || 0;
	};
	Game_Variables.prototype.valueSpeedDayNightSave = function() {
		return this._Terrax_Lighting_SpeedDayNight || 0;
	};
	Game_Variables.prototype.valueFlashLightSave = function() {
		return this._Terrax_Lighting_FlashLight || false;
	};
	Game_Variables.prototype.valueFireSave = function() {
		return this._Terrax_Lighting_Fire || false;
	};
	Game_Variables.prototype.setDayNightSave = function(value) {
		this._Terrax_Lighting_DayNight = value;
	};
	Game_Variables.prototype.setDayNightSaveMin = function(value) {
		this._Terrax_Lighting_DayNightMin = value;
	};
	Game_Variables.prototype.setRadiusSave = function(value) {
		this._Terrax_Lighting_Radius = value;
	};
	Game_Variables.prototype.setSpeedDayNightSave = function(value) {
		this._Terrax_Lighting_SpeedDayNight = value;
	};
	Game_Variables.prototype.setFlashLight = function(value) {
		this._Terrax_Lighting_FlashLight = value;
	};
	Game_Variables.prototype.setFire = function(value) {
		this._Terrax_Lighting_Fire = value;
	};
	Game_Variables.prototype.setFireRadius = function(value) {
		this._Terrax_Lighting_FireRadius = value;
	};
	Game_Variables.prototype.valueFireRadiusSave = function() {
		return this._Terrax_Lighting_FireRadius || false;
	};	
	Game_Variables.prototype.setFireColorshift = function(value) {
		this._Terrax_Lighting_FireColorshift = value;
	};
	Game_Variables.prototype.valueFireColorshiftSave = function() {
		return this._Terrax_Lighting_FireColorshift || false;
	};		
	Game_Variables.prototype.setPlayerColor = function(value) {
		this._Terrax_Lighting_PlayerColor = value;
	};
	Game_Variables.prototype.valuePlayerColorSave = function() {
		return this._Terrax_Lighting_PlayerColor || '#FFFFFF';
	};
	Game_Variables.prototype.setPlayerBrightness = function(value) {
		this._Terrax_Lighting_PlayerBrightness = value;
	};
	Game_Variables.prototype.valuePlayerBrightnessSave = function() {
		return this._Terrax_Lighting_PlayerBrightness || 0.0;
	};
	Game_Variables.prototype.setTintValue = function(value) {
		this._Terrax_Tint_Value = value;
	};
	Game_Variables.prototype.valueTintValueSave = function() {
		return this._Terrax_Tint_Value || '#000000';
	};
	
	Game_Variables.prototype.setFlashlightDensity = function(value) {
		this._Terrax_Lighting_FlashlightDensity = value;
	};
	Game_Variables.prototype.valueFlashlightDensity = function() {
		return this._Terrax_Lighting_FlashlightDensity || 3;
	};	
	Game_Variables.prototype.setFlashlightLength = function(value) {
		this._Terrax_Lighting_FlashlightLength = value;
	};
	Game_Variables.prototype.valueFlashlightLength = function() {
		return this._Terrax_Lighting_FlashlightLength || 8;
	};
	Game_Variables.prototype.setFlashlightWidth = function(value) {
		this._Terrax_Lighting_FlashlightWidth = value;
	};
	Game_Variables.prototype.valueFlashlightWidth = function() {
		return this._Terrax_Lighting_FlashlightWidth || 12;
	};

	Game_Variables.prototype.valueDayNightColor = function() {
	    var default_color = [ '#FF0000', '#FF0000', '#FF0000', '#FF0000',
	                          '#FF0000', '#FF0000', '#FF0000', '#FF0000',
	                          '#FF0000', '#FF0000', '#FF0000', '#FF0000',
	                          '#FF0000', '#FF0000', '#FF0000', '#FF0000',
	                          '#FF0000', '#FF0000', '#FF0000', '#FF0000',
	                          '#FF0000', '#FF0000', '#FF0000', '#FF0000' ];
    	return this._Terrax_Lighting_DayNightColor || default_color;
	};

	Game_Variables.prototype.setDayNightColorArray = function(value) {
    	this._Terrax_Lighting_DayNightColor = value;
	};

	Game_Variables.prototype.valueLightArrayId = function() {
	    var default_LAI = [];
    	return this._Terrax_Lighting_LightArrayId || default_LAI;
	};

	Game_Variables.prototype.setLightArrayId = function(value) {
    	this._Terrax_Lighting_LightArrayId = value;
	};	
	
	Game_Variables.prototype.valueLightArrayState = function() {
	   	var default_LAS = [];
    	return this._Terrax_Lighting_LightArrayState || default_LAS;
	};

	Game_Variables.prototype.setLightArrayState = function(value) {
    	this._Terrax_Lighting_LightArrayState = value;
	};	
	
	Game_Variables.prototype.valueTileArray = function() {
	   	var default_TA = [];
    	return this._Terrax_Lighting_TileArray || default_TA;
	};

	Game_Variables.prototype.setTileArray = function(value) {
    	this._Terrax_Lighting_TileArray = value;
	};	
	
	Game_Variables.prototype.valueScriptActive = function() {
		if (typeof this._Terrax_Lighting_ScriptActive == 'undefined') {
			this._Terrax_Lighting_ScriptActive = true;
		}
		return this._Terrax_Lighting_ScriptActive || false;
	};
	
	Game_Variables.prototype.setScriptActive = function(value) {
		this._Terrax_Lighting_ScriptActive = value;
	};
	
	
	function SaveLightingVariables() {

			var storeddata = $gameVariables.valueRadiusSave();
			if (storeddata > 0) {
				player_radius = storeddata;
			}

			var storeddata = $gameVariables.valueDayNightSave();
			if (storeddata > 0) {
				daynightcycle = storeddata;
				if (daynightsave > 0) {
					$gameVariables.setValue(daynightsave, daynightcycle);
				}
			}
			daynightminutes = $gameVariables.valueDayNightSaveMin();
			daynighttimer = daynightminutes * daynightspeed; 		

			var storeddata = $gameVariables.valueSpeedDayNightSave();
			if (storeddata > 0) {
				daynightspeed = storeddata;
			
				if (daynightspeed == 0) {
				   daynightspeed = 1000;
				   daynightstop = true;
			    } else {
			       daynightstop = false;
				}
			}
			scriptactive = $gameVariables.valueScriptActive();
			playercolor = $gameVariables.valuePlayerColorSave();
			playerflicker = $gameVariables.valueFireSave();
			playerflashlight = $gameVariables.valueFlashLightSave();
    		flashlightwidth = $gameVariables.valueFlashlightWidth(); 
    		flashlightlength = $gameVariables.valueFlashlightLength(); 
    		flashlightdensity = $gameVariables.valueFlashlightDensity(); 
 
			daynightcolors =  $gameVariables.valueDayNightColor();
			lightarray_id = $gameVariables.valueLightArrayId();
			lightarray_state = $gameVariables.valueLightArrayState();
			flickerradiusshift = $gameVariables.valueFireRadiusSave();
			flickercolorshift = $gameVariables.valueFireColorshiftSave();
			tint_value = $gameVariables.valueTintValueSave();
			Terrax_tint_target = $gameVariables.valueTintValueSave();
			tilearray = $gameVariables.valueTileArray();	
			playerbrightness = $gameVariables.valuePlayerBrightnessSave();			
	};
	

	
	//****
	// Debug
	//****

	Graphics.Debug = function(name, message) {
    	if (this._errorPrinter) {
        	this._errorPrinter.innerHTML = this._makeErrorHtml(name, message);
    	}
	}
	
	//****
	// This function is overwritten from rpg_sprites.js
	//****

	Spriteset_Map.prototype.createLowerLayer = function() {
	    Spriteset_Base.prototype.createLowerLayer.call(this);
	    this.createParallax();
	    this.createTilemap();
	    this.createCharacters();
	    this.createShadow();
	    this.createDestination();
	    this.createLightmask();
	    this.createWeather();
	
	}

		
	//****
	// These functions are overwritten from objects/sprites/scenes.
	//****
	
	
	Game_CharacterBase.prototype.setDirection = function(d) {
				
	    if (!this.isDirectionFixed() && d) {
	        this._direction = d;
		}
		
		if (!this.isDirectionFixed() ) {
			
			var evid = this._eventId;    // Capture the realX and realY of moving events.
			if (evid) {
				if (typeof $dataMap.events[evid] != 'undefined') {
					var note = $dataMap.events[evid].note;  
					var note_args = note.split(" ");
					var note_command = note_args.shift().toLowerCase();
					if (note_command == "light" || note_command == "fire" || note_command == "flashlight") {
						//Graphics.printError('test',evid + ' ' + this._realX + ' '+ this._pattern);
						var idfound = false;
						for (var i = 0; i < move_event_id.length; i++) {
							if (move_event_id[i] == evid) {
								idfound = true;
								move_event_x[i] = this._realX;
								move_event_y[i] = this._realY;
								move_event_dir[i] = this._direction;
							}
						}
	
					}
				}
			}
		}
	    this.resetStopCount();
	}
	

	Game_CharacterBase.prototype.updateMove = function() {
		
		var evid = this._eventId;    // Capture the realX and realY of moving events.
		if (evid) {
			if (typeof $dataMap.events[evid] != 'undefined') {
				var note = $dataMap.events[evid].note;  
				var note_args = note.split(" ");
				var note_command = note_args.shift().toLowerCase();
				if (note_command == "light" || note_command == "fire" || note_command == "flashlight") {
					//Graphics.printError('test',evid + ' ' + this._realX + ' '+ this._realY);
					var idfound = false;
					for (var i = 0; i < move_event_id.length; i++) {
						if (move_event_id[i] == evid) {
							idfound = true;
							move_event_x[i] = this._realX;
							move_event_y[i] = this._realY;
							move_event_dir[i] = this._direction;
						}
					}
					if (idfound == false) {
						move_event_id.push(evid);
						move_event_x.push(this._realX);
						move_event_y.push(this._realY);	
						move_event_dir.push(this._direction);
					}
				}
			}
		}
		//Graphics.printError('test',evid + ' ' + this._realX + ' '+ this._realY);
		
	    if (this._x < this._realX) {
	        this._realX = Math.max(this._realX - this.distancePerFrame(), this._x);
	    }
	    if (this._x > this._realX) {
	        this._realX = Math.min(this._realX + this.distancePerFrame(), this._x);
	    }
	    if (this._y < this._realY) {
	        this._realY = Math.max(this._realY - this.distancePerFrame(), this._y);
	    }
	    if (this._y > this._realY) {
	        this._realY = Math.min(this._realY + this.distancePerFrame(), this._y);
	    }
	    if (!this.isMoving()) {
	        this.refreshBushDepth();
	    }
	}
	
	
	Scene_Load.prototype.onSavefileOk = function() {
	    Scene_File.prototype.onSavefileOk.call(this);
	    if (DataManager.loadGame(this.savefileId())) {
	        this.onLoadSuccess();
	        
	        if (Imported.TerraxLighting) {	        
	        	SaveLightingVariables();
        	}
	        if (Imported.TerraxPuzzle) {
				SavePuzzleVariables();
		    }
	        	        
	    } else {
	        this.onLoadFailure();
	    }
	}


})();

