//=============================================================================
// A XueYu Plugins - Three
// AXY_Three.js
// Version: 1.06
// License: MIT
//=============================================================================
/*:
 * @plugindesc v1.06 This plugin show 3d object with Three.js.
 * @author A XueYu Plugins
 *
 * @param path
 * @desc The three file you save. default: three/
 * @default three/
 *
 * @param position
 * @desc The position of 3d object. position x, position y, position z. default: 0,0,0
 * @default 0,0,0
 *
 * @param scale
 * @desc The scale of 3d object. scale x, scale y, scale z. default: 1,1,1
 * @default 1,1,1
 *
 * @param opacity
 * @desc The opacity of 3d object. 0-1. default: 1
 * @default 1
 *
 * @param rotation
 * @desc The rotation of 3d object. rotation x, rotation y, rotation z. rotation=-360-+360. default: 0,0,0
 * @default 0,0,0
 *
 * @param backgroundColor
 * @desc The background color of webgl. 000000-ffffff. default: 000000
 * @default 000000
 *
 * @param backgroundOpacity
 * @desc The background opacity of webgl. 0-1. default: 0.5
 * @default 0.5
 *
 * @param zIndex
 * @desc The zIndex of webgl. More bigger more close with you.  default: 10000
 * @default 10000
 *
 * @help
 * Introduction
 * This plugin support rmmv show many formats of 3d object over 38 such as assimp/3mf/amf/md2/mmd/sea3d/vtk/etc. with three.js.
 * But this plugin support assimp/obj only for now. Easy to use and powerful. Dependent on AXY_Toast.js
 * 
 * Example:
 * show:
 * AXY_Three.show([{filename:'models/assimp/jeep/jeep.assimp.json'}]);
 * AXY_Three.show([{filename:'models/assimp/jeep/jeep.assimp.json', rotation:[0,0,0], scale:[1,1,1]},{filename:'models/assimp/interior/interior.assimp.json'}]);
 * AXY_Three.show([{type:'obj', filename:'obj/tank/tank1/tank1.obj', filename2:'obj/tank/tank1/tank1.mtl', rotation:[0,0,0], scale:[0.035,0.035,0.035]},{filename:'models/assimp/interior/interior.assimp.json'}]);
 * all args with default:
 * AXY_Three.show([{type:'assimp', filename:'models/assimp/jeep/jeep.assimp.json', rotation:[0,0,0], scale:[1,1,1], position:[0,0,0], opacity:0.5},{filename:'models/assimp/interior/interior.assimp.json'}]);
 * show:
 * AXY_Three.showcube({scale:0.5, opacity:1});
 * remove:
 * click mouse or tap;
 *
 * changelog
 * 1.06 2019.11.17
 * modify: change bsd to mit;
 * 1.05 2017.2.26
 * add touchstart control;
 * 1.04 2017.2.22
 * add mousewheel/mousemove control;
 * add mesh;
 * add bgcolor/bgopacity;
 * add stats meter to show fps/ms/MB, press F2 toggle;
 * modify filename2=filename and replace .obj to .mtl when filename2(materials file) was not specify;
 * 1.03 2017.2.20
 * fix crash on android that can not support webgl;
 * 1.02 2017.2.19
 * add *.obj format support;
 * add position x,y,z control;
 * modify scale to x,y,z like rotation;
 * 1.01 2017.2.18
 * add showcube;
 * fix some bug;
 * 1.00 2017.2.17
 * first release;
 */

// Imported
var Imported = Imported || {};
Imported.AXY_Three = true;

// Parameter Variables
var AXY = AXY || {};
AXY.Three = AXY.Three || {};

AXY.Three.Parameters = PluginManager.parameters('AXY_Three');
AXY.Three.Param = AXY.Three.Param || {};

// 
AXY.Three.Param.path = String(AXY.Three.Parameters['path']);
AXY.Three.Param.position = String(AXY.Three.Parameters['position']).split(',');
AXY.Three.Param.scale = String(AXY.Three.Parameters['scale']).split(',');
AXY.Three.Param.opacity = parseFloat(AXY.Three.Parameters['opacity']);
AXY.Three.Param.rotation = String(AXY.Three.Parameters['rotation']).split(',');
AXY.Three.Param.backgroundColor = String(AXY.Three.Parameters['backgroundColor']);
AXY.Three.Param.backgroundOpacity = parseFloat(AXY.Three.Parameters['backgroundOpacity']);
//AXY.Three.Param.loop = AXY.Three.Parameters['loop'].toLowerCase() === 'true';
AXY.Three.Param.zIndex = parseInt(AXY.Three.Parameters['zIndex']);
//AXY.Three.Param.Three = [];
//AXY.Three.Param.Threecontainer = [];

AXY.Three.Param.SVActor = [];

//main


/*Spriteset_Battle.prototype.createActors = function () {
	this._actorSprites = [];
	for (var i = 0; i < $gameParty.maxBattleMembers(); i++) {
		var actorId = $gameParty._actors[i];

		this._actorSprites[i] = new Sprite_Actor();

		console.log($gameParty);
		console.log(this);

		if (actorId) {
			//console.log($gameActors.actor(actorId));
			//var name = $gameActors._data[actorId]._battlerName;
			//console.log($gameActors._data[actorId]._battlerName);
			//console.log($dataActors[actorId]);
			var _metaClass = $gameActors.actor(actorId).currentClass().meta;
			var _metaActor = $dataActors[actorId].meta;
			var AXYThreeFileName = _metaActor.axythree;
			//console.log(isAXYThree);
			console.log(AXYThreeFileName);
			var AXYThreeScaleX = _metaClass.axythree_scalex ? _metaClass.axythree_scalex : _metaActor.axythree_scalex;
			var AXYThreeScaleY = _metaClass.axythree_scaley ? _metaClass.axythree_scaley : _metaActor.axythree_scaley;
			var AXYThreeRotation = _metaClass.axythree_rotation ? _metaClass.axythree_rotation : _metaActor.axythree_rotation;
			var AXYThreeHUE = _metaClass.axythree_hue ? _metaClass.axythree_hue : _metaActor.axythree_hue ? _metaActor.axythree_hue : 0;


			if (AXYThreeFileName) {
				//Delete last battle
				//console.log(AXY.Three.Param.SVActor[i]);
				if (AXY.Three.Param.SVActor[actorId]) {
					delete AXY.Three.Param.SVActor[actorId];
				}

				//create new
				//AXY.Three.Param.SVActor[actorId] = new Sprite();
				//console.log(AXY.Three.Param.SVActor[i]);
				//AXY.Three.Param.SVActor[actorId].bitmap = ImageManager.loadSvActor(AXYThreeFileName, AXYThreeHUE);

				//AXY.Three.Param.SVActor[actorId].anchor.x = 0.5;
				//AXY.Three.Param.SVActor[actorId].anchor.y = 1;

				var loader = new THREE.FBXLoader();
				console.log(loader);
				loader.load(AXYThreeFileName, function (object) {
					console.log(object);
					object.traverse(function (child) {
						//var material = new THREE.MeshPhongMaterial({
						//	map: texturePlante
						//});

						if (child.isMesh) {
							//child.material = lambertMaterial;
							child.castShadow = true;
							child.receiveShadow = true;
							//child.position.y = -50;
							//console.log(child);
						}


					});
					//object.children[0].material = phongMaterial;
					//object.children[0].material = lambertMaterial;
					object.scale.set(0.2, 0.2, 0.2);
					object.position.set = (0, 0, 0);

					AXY.Three.Param.SVActor[actorId] = object;
					console.log(AXY.Three.Param.SVActor[actorId]);

					//AnimationMixer是场景中特定对象的动画播放器。当场景中的多个对象独立动画时，可以为每个对象使用一个AnimationMixer
					mixer = object.mixer = new THREE.AnimationMixer(object);
					var action = mixer.clipAction(object.animations[0]);
					action.play();
				});

				renderer = new THREE.WebGLRenderer({
					antialias: true
				});
				renderer.setPixelRatio(window.devicePixelRatio);
				renderer.setSize(window.innerWidth, window.innerHeight);
				renderer.shadowMap.enabled = true;
				//container.appendChild(renderer.domElement);

				//window.addEventListener('resize', onWindowResize, false);

				// stats
				//stats = new Stats();
				//container.appendChild(stats.dom);

				//initialize
				if (AXY.Three.Param.SVActor[actorId]) {
					//tell whether a battler is a Three
					$gameActors.actor(actorId).isAXYThree = true;

					//set scale
					if (AXYThreeScaleX) {
						AXY.Three.Param.SVActor[actorId].scale.x = AXYThreeScaleX;
					}
					if (AXYThreeScaleY) {
						AXY.Three.Param.SVActor[actorId].scale.y = AXYThreeScaleY;
					}
					if (AXYThreeRotation) {
						AXY.Three.Param.SVActor[actorId].rotation = AXYThreeRotation;
					}
					this._actorSprites[i].addChild(AXY.Three.Param.SVActor[actorId]);
				}
			}
		}
		this._battleField.addChild(this._actorSprites[i]);
		//this._battleField.addChild(AXY.Three.Param.SVActor[actorId]);
	}
};*/
//})
//Three
var AXY_Three = {
	showBattle: function () {
		//console.log(arguments[3]);
		var AXYThreeArgs = arguments[0] ? arguments[0] : {};
		if (!AXYThreeArgs) {
			$.toaster({
				message: 'Please specify the args!'
			});
			return;
		}
		if (typeof (AXYThreeArgs) != 'object') {
			$.toaster({
				message: 'Please specify the args with object!'
			});
			//console.log(typeof(AXYThreeArgs));
			return;
		}

		if (!Detector.webgl) {
			$.toaster({
				message: 'Your Device can not support webgl!'
			});
			//Detector.addGetWebGLMessage();
			return;
		}

		var container, stats;
		var camera, scene, renderer, objects;
		var clock = new THREE.Clock();
		var loader = [];
		var mtlLoader = [];
		var fbxLoader = [];

		var mouseX = 0,
			mouseY = 0;
		var windowHalfX = window.innerWidth / 2;
		var windowHalfY = window.innerHeight / 2;

		//相机配置
		var cameraFov = 45, //拍摄距离  视野角值越大，场景中的物体越小
			cameraAspect = window.innerWidth / window.innerHeight, //拍摄距离  视野角值越大，场景中的物体越小
			cameraNear = 1, //最小范围
			cameraFar = 1000; //最大范围

		// init scene
		init();
		/*console.log(container);
		console.log($('body'));*/

		var onProgress = function (xhr) {
			if (xhr.lengthComputable) {
				var percentComplete = xhr.loaded / xhr.total * 100;
				console.log(Math.round(percentComplete, 2) + '% downloaded');
			}
		};

		var onError = function (xhr) {};

		AXYThreeArgs.forEach(function (value, index, array) {
			var type = value['type'] ? value['type'] : "assimp";
			var filename = value['filename'] ? value['filename'] : "";
			var filename2 = value['filename2'] ? value['filename2'] : "";
			//var delay	 	=	 AXYThreeArgs['delay'] ? AXYThreeArgs['delay'] : AXY.Three.Param.delay;
			//var id			=	 AXYThreeArgs['id'] ? AXYThreeArgs['id'] : 1;
			//var x			=	 AXYThreeArgs['x'] != undefined ? eval(AXYThreeArgs['x']) : eval(AXY.Three.Param.X);
			//var y			=	 AXYThreeArgs['y'] != undefined ? eval(AXYThreeArgs['y']) : eval(AXY.Three.Param.Y);
			var position = value['position'] != undefined ? value['position'] : AXY.Three.Param.position;
			var scale = value['scale'] != undefined ? value['scale'] : AXY.Three.Param.scale;
			var opacity = value['opacity'] != undefined ? value['opacity'] : AXY.Three.Param.opacity;
			var rotation = value['rotation'] != undefined ? value['rotation'] : AXY.Three.Param.rotation;
			var bgcolor = value['bgcolor'] != undefined ? value['bgcolor'] : AXY.Three.Param.backgroundColor;
			var bgopacity = value['bgopacity'] != undefined ? value['bgopacity'] : AXY.Three.Param.backgroundOpacity;
			//var zindex		=	 AXYThreeArgs['zindex'] != undefined ? AXYThreeArgs['zindex'] : AXY.Three.Param.zIndex;

			if (!filename) {
				$.toaster({
					message: 'Please specify the filename!'
				});
				return;
			}
			if (filename.indexOf('url=') != -1) {
				filename = filename.replace('url=', '');
			} else {
				filename = AXY.Three.Param.path + filename;
			}

			if (type != 'assimp') {
				/*if(!filename2){
					$.toaster({ message : 'Please specify the filename2!'});
					return;
				}*/
				if (!filename2) {
					filename2 = filename.replace('.obj', '.mtl');
				} else if (filename2.indexOf('url=') != -1) {
					filename2 = filename2.replace('url=', '');
				} else {
					filename2 = AXY.Three.Param.path + filename2;
				}
			}

			switch (type) {
				case 'fbx':
					//var filename2 = 'models/assimp/centurion/tank2.mtl'
					/*var mtlpathArray = filename2.split('/');
					var mtlfilename = mtlpathArray[mtlpathArray.length-1];
					var mtlpath = filename2.replace(mtlfilename, '');
					console.log(mtlpathArray);
					console.log(mtlfilename);
					console.log(mtlpath);*/

					fbxLoader[index] = new THREE.FBXLoader();
					fbxLoader[index].load(filename2, function (object) {

						//mixer = new THREE.AnimationMixer( object );

						//var action = mixer.clipAction( object.animations[ 0 ] );
						//action.play();

						object.traverse(function (child) {

							if (child.isMesh) {

								child.castShadow = true;
								child.receiveShadow = true;

							}

						});

						//object.scale.multiplyScalar(1);
						object.position.x = position[0];
						object.position.y = position[1];
						object.position.z = position[2];
						//object.position.set = (position[0], position[1], position[2]);
						//object.scale.multiplyScalar( 0.035 );
						//object.scale.set(0.03,0.03,0.01);
						object.scale.x = scale[0];
						object.scale.y = scale[1];
						object.scale.z = scale[2];
						//object.scale.set = (scale[0], scale[1], scale[2]);
						object.rotation.x = rotation[0];
						object.rotation.y = rotation[1];
						object.rotation.z = rotation[2];
						//object.rotation.set = (rotation[0], rotation[1], rotation[2]);

						scene.add(object);

					});



					/*renderer = new THREE.WebGLRenderer( { antialias: true } );
					renderer.setPixelRatio( window.devicePixelRatio );
					renderer.setSize( window.innerWidth, window.innerHeight );
					renderer.shadowMap.enabled = true;
					container.appendChild( renderer.domElement );

					window.addEventListener( 'resize', onWindowResize, false );

					// stats
					stats = new Stats();
					container.appendChild( stats.dom );*/
					break;
				case 'obj':
					//var filename2 = 'models/assimp/centurion/tank2.mtl'
					var mtlpathArray = filename2.split('/');
					var mtlfilename = mtlpathArray[mtlpathArray.length - 1];
					var mtlpath = filename2.replace(mtlfilename, '');
					console.log(mtlpathArray);
					console.log(mtlfilename);
					console.log(mtlpath);

					mtlLoader[index] = new THREE.MTLLoader();
					mtlLoader[index].setPath(mtlpath);
					mtlLoader[index].load(mtlfilename, function (materials) {
						materials.preload();
						var objLoader = new THREE.OBJLoader();
						objLoader.setMaterials(materials);
						//objLoader.setPath( 'models/assimp/centurion/' );
						objLoader.load(filename, function (object) {
							//object.position.y = - 95;
							object.position.x = position[0];
							object.position.y = position[1];
							object.position.z = position[2];
							//object.position.set = (position[0], position[1], position[2]);
							//object.scale.multiplyScalar( 0.035 );
							//object.scale.set(0.03,0.03,0.01);
							object.scale.x = scale[0];
							object.scale.y = scale[1];
							object.scale.z = scale[2];
							//object.scale.set = (scale[0], scale[1], scale[2]);
							object.rotation.x = rotation[0];
							object.rotation.y = rotation[1];
							object.rotation.z = rotation[2];
							//object.rotation.set = (rotation[0], rotation[1], rotation[2]);
							scene.add(object);
						}, onProgress, onError);
					});
					break;
				case 'mesh':
					var meshLoader = new THREE.TextureLoader();
					var meshTexture = meshLoader.load(filename);
					meshTexture.wrapS = meshTexture.wrapT = THREE.RepeatWrapping;
					meshTexture.repeat.set(25, 25);
					meshTexture.anisotropy = 16;

					var meshMaterial = new THREE.MeshPhongMaterial({
						color: 0xffffff,
						specular: 0x111111,
						map: meshTexture
					});

					var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(500, 500), meshMaterial);
					//mesh.position.y = - 250;
					mesh.rotation.x = -Math.PI / 2;
					mesh.receiveShadow = true;
					scene.add(mesh);
					break;
				case 'ground':
					var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), new THREE.MeshPhongMaterial({
						color: 0x999999,
						depthWrite: false
					}));
					mesh.rotation.x = -Math.PI / 2;
					mesh.receiveShadow = true;
					scene.add(mesh);
					break;
				case 'grid':
					var grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
					grid.material.opacity = 0.2;
					grid.material.transparent = true;
					scene.add(grid);
					break;
				case 'assimp':
				default:
					// Load jeep model using the AssimpJSONLoader
					loader[index] = new THREE.AssimpJSONLoader();
					loader[index].load(filename, function (object) {
						object.position.x = position[0];
						object.position.y = position[1];
						object.position.z = position[2];
						//object.scale.multiplyScalar( 0.035 );
						//object.scale.set(0.03,0.03,0.01);
						object.scale.x = scale[0];
						object.scale.y = scale[1];
						object.scale.z = scale[2];
						//object.scale.multiplyScalar( scale );
						object.rotation.x = rotation[0];
						object.rotation.y = rotation[1];
						object.rotation.z = rotation[2];
						scene.add(object);
						//console.log(object);
					}, onProgress, onError);
					//console.log(loader[index]);
					//console.log(index);
					break;
			}


			// load interior model
			/*var loader2 = new THREE.AssimpJSONLoader();
			loader2.load( 'three/models/assimp/interior/interior.assimp.json', function ( object ) {

				scene.add( object );

			}, onProgress, onError );*/

			renderer.setClearColor(eval('0x' + bgcolor), bgopacity);
		});
		/*var filename 	=	 AXYThreeArgs['filename'] ? AXYThreeArgs['filename'] : "";
		//var delay	 	=	 AXYThreeArgs['delay'] ? AXYThreeArgs['delay'] : AXY.Three.Param.delay;
		//var id			=	 AXYThreeArgs['id'] ? AXYThreeArgs['id'] : 1;
		//var x			=	 AXYThreeArgs['x'] != undefined ? eval(AXYThreeArgs['x']) : eval(AXY.Three.Param.X);
		//var y			=	 AXYThreeArgs['y'] != undefined ? eval(AXYThreeArgs['y']) : eval(AXY.Three.Param.Y);
		//var scalex		=	 AXYThreeArgs['scalex'] != undefined ? AXYThreeArgs['scalex'] : AXY.Three.Param.scalex;
		//var scaley		=	 AXYThreeArgs['scaley'] != undefined ? AXYThreeArgs['scaley'] : AXY.Three.Param.scaley;
		var scale		=	 AXYThreeArgs['scale'] != undefined ? AXYThreeArgs['scale'] : AXY.Three.Param.scale;
		var opacity		=	 AXYThreeArgs['opacity'] != undefined ? AXYThreeArgs['opacity'] : AXY.Three.Param.opacity;
		var rotation	=	 AXYThreeArgs['rotation'] != undefined ? AXYThreeArgs['rotation'] : AXY.Three.Param.rotation;*/
		//var action		=	 AXYThreeArgs['action'] ? AXYThreeArgs['action'] : "";
		//var loop		=	 AXYThreeArgs['loop'] != undefined ? AXYThreeArgs['loop'] : AXY.Three.Param.loop;

		/*if(!action){
			$.toaster({ message : 'Please specify the action!'});
			return;
		}
		if(!filename){
			$.toaster({ message : 'Please specify the filename!'});
			return;
		}
		if(filename.indexOf('url=') != -1){
			filename = filename.replace('url=', '');
		}
		else{
			filename = AXY.Three.Param.path + filename + '.json';
		}*/


		/*var assetsToLoader = [filename];
		loader = new PIXI.AssetLoader(assetsToLoader);
		loader.onComplete = function(){
			if(!AXY.Three.Param.Threecontainer[id]){
				AXY.Three.Param.Threecontainer[id] = new PIXI.DisplayObjectContainer();
				SceneManager._scene.addChild(AXY.Three.Param.Threecontainer[id]);
			}
			if(AXY.Three.Param.Three[id] && AXY.Three.Param.Three[id].filename == filename){
				
			}
			else{
				AXY.Three.Param.Threecontainer[id].removeChild(AXY.Three.Param.Three[id]);
				AXY.Three.Param.Three[id] = new PIXI.Three(filename);
				AXY.Three.Param.Three[id].id = id;
				AXY.Three.Param.Three[id].name = ('AXYThree');
				AXY.Three.Param.Three[id].filename = filename;
				AXY.Three.Param.Threecontainer[id].addChild(AXY.Three.Param.Three[id]);
			}

			AXY.Three.Param.Threecontainer[id].position.x = x;
			AXY.Three.Param.Threecontainer[id].position.y = y;
			AXY.Three.Param.Three[id].scale.x = scalex;
			AXY.Three.Param.Three[id].scale.y = scaley;
			AXY.Three.Param.Three[id].rotation = rotation;
			AXY.Three.Param.Three[id].alpha = opacity;
			AXY.Three.Param.Three[id].state.setAnimationByName(0, action, loop);
			AXY.Three.Param.Three[id].action = action;
			
			//console.log(AXY.Three.Param.Three);
			//console.log(AXY.Three.Param.Threecontainer);
			//console.log(AXY.Three.Param.Three[id].state.getCurrent());
			
			// set up the mixes!
			//Three.stateData.setMixByName("walk", "jump", 0.2);
			//Three.stateData.setMixByName("jump", "walk", 0.4);

			/*scene.stage.click = function()
			{
				Three.state.setAnimationByName(0, "jump", false);
				Three.state.addAnimationByName(0, "walk", true, 0);

			}*/
		/*};
		loader.load();*/

		//Three.state.setAnimationByName(0, 'jump', false);

		/*if(delay>=1){
			setTimeout(function()
			{
				$('#AXYThree'+id).remove();
			}, delay);
		}*/

		//console.log(css);
		//console.log($gameParty);
		//console.log($gameSystem);
		//console.log(TextManager.currencyUnit);

		//$('#AXYThree'+id+' img').stop().show().animate({"width": "100%","height": "100%"}, "normal");

		/*console.log(document.body);
		console.log($('body'));
		console.log($('#UpperCanvas'));
		console.log($('#UpperCanvas')[0].scrollHeight);*/





		animate();


		//

		function init() {

			container = document.createElement('div');
			container.id = "AXY_Three";
			container.style.position = 'absolute';
			container.style.zIndex = AXY.Three.Param.zIndex;
			container.style.overflow = "hidden";
			container.style.margin = 'auto';
			container.style.top = 0;
			container.style.left = 0;
			container.style.right = 0;
			container.style.bottom = 0;
			//container.style.background = 'rgba(0,0,0,0)';
			document.body.appendChild(container);


			camera = new THREE.PerspectiveCamera(cameraFov, cameraAspect, cameraNear, cameraFar);
			camera.position.set(2, 4, 5);

			scene = new THREE.Scene();
			scene.fog = new THREE.FogExp2(0x000000, 0.035);

			// Lights
			scene.add(new THREE.AmbientLight(0xcccccc));

			var directionalLight = new THREE.DirectionalLight(0xeeeeee);
			directionalLight.position.x = Math.random() - 0.5;
			directionalLight.position.y = Math.random();
			directionalLight.position.z = Math.random() - 0.5;
			directionalLight.position.normalize();
			scene.add(directionalLight);

			// Renderer
			renderer = new THREE.WebGLRenderer({
				antialias: true, //是否开启反锯齿
				precision: "highp", //着色精度选择
				alpha: true, //是否可以设置背景色透明
				premultipliedAlpha: false,
				stencil: false,
				preserveDrawingBuffer: true, //是否保存绘图缓冲
				maxLights: 1 //maxLights:最大灯光数
			});
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(window.innerWidth, window.innerHeight);
			//renderer.domElement.style.background = 'rgba(0,0,0,0)';
			//renderer.setClearColor(eval('0x'+bgcolor), bgopacity);
			container.appendChild(renderer.domElement);

			stats = new Stats();
			stats.mode = -1;

			// Events
			window.addEventListener('resize', onWindowResize, false);
			container.addEventListener('mousedown', onDocumentMouseDown, false);
			container.addEventListener('touchstart', onDocumentMouseDown, false);
			document.addEventListener('mousemove', onDocumentMouseMove, false);
			document.addEventListener("DOMMouseScroll", onDocumentMouseWheel, false); //Old Firefox
			document.addEventListener("mousewheel", onDocumentMouseWheel, false); //IE9, Chrome, Safari, Opera
			document.addEventListener('wheel', onDocumentMouseWheel, false); //Firefox
			document.addEventListener('keydown', onDocumentKeyDown, false);
		}

		// Events Hanlder
		function onWindowResize(event) {
			windowHalfX = window.innerWidth / 2;
			windowHalfY = window.innerHeight / 2;
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

		}

		function onDocumentMouseMove(event) {
			mouseX = (event.clientX - windowHalfX) / 2;
			mouseY = (event.clientY - windowHalfY) / 2;
			//console.log(mouseY);
			//console.log(event.clientY);
			if (mouseY > 55) mouseY = 55;
			if (mouseY < -135) mouseY = -135;
		}

		function onDocumentMouseDown(event) {
			//container.removeChild(renderer.domElement);
			//delete renderer;
			//document.body.removeChild(container);
			//delete container;
			container.remove(); // 删除几何体
			//container.dispose(); // 删除几何体
			scene.dispose();
			renderer.dispose();
		}
		//鼠标滑轮-鼠标上下滑轮实现放大缩小效果
		function onDocumentMouseWheel(event) {
			//event.preventDefault();
			//e.stopPropagation();
			if (event.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
				if (event.wheelDelta > 0) { //当滑轮向上滚动时
					console.info('event.wheelDelta > 0:' + event.wheelDelta);
					cameraFov -= (cameraNear < cameraFov ? 3 : 0);
				}
				if (event.wheelDelta < 0) { //当滑轮向下滚动时
					console.info('event.wheelDelta < 0:' + event.wheelDelta);
					cameraFov += (cameraFov < cameraFar ? 3 : 0);
				}
			} else if (event.detail) { //Firefox滑轮事件
				if (event.detail > 0) { //当滑轮向上滚动时
					console.info('event.wheelDelta > 0:' + event.detail);
					cameraFov -= 3;
				}
				if (event.detail < 0) { //当滑轮向下滚动时
					console.info('event.wheelDelta < 0:' + event.detail);
					cameraFov += 3;
				}
			}
			if (cameraFov > 60) cameraFov = 60;
			if (cameraFov < 9) cameraFov = 9;
			console.info('cameraFov:' + cameraFov);
			console.info('camera.fov:' + camera.fov);
			console.info('camera.x:' + camera.position.x);
			console.info('camera.y:' + camera.position.y);
			console.info('camera.z:' + camera.position.z);
			//改变fov值，并更新场景的渲染
			camera.fov = cameraFov;
			camera.updateProjectionMatrix();
			renderer.render(scene, camera);
			//updateinfo();
		}

		function onDocumentKeyDown(event) {
			var event = event || window.event || arguments.callee.caller.arguments[0];
			if (!event.ctrlKey && !event.altKey) {
				switch (event.keyCode) {
					case 113: // F2
						event.preventDefault();
						//console.log(stats);
						if (stats.mode == -1) {
							container.appendChild(stats.dom);
						}
						++stats.mode;
						if (stats.mode == stats.dom.children.length) {
							container.removeChild(stats.dom);
							stats.mode = -1;
						} else {
							stats.showPanel(stats.mode % stats.dom.children.length);
						}
						break;
				}
			}
		}

		//
		var t = 0;

		function animate() {
			requestAnimationFrame(animate);
			render();
			stats.update();
		}

		//
		function render() {
			var timer = Date.now() * 0.0005;

			/*camera.position.x = Math.cos(timer) * 10;
			camera.position.y = 4;
			camera.position.z = Math.sin(timer) * 10;
			camera.position.y += (-mouseY - camera.position.y) * .05;

			camera.lookAt(scene.position);*/

			renderer.render(scene, camera);
		}

	},
	show: function () {
		//console.log(arguments[3]);
		var AXYThreeArgs = arguments[0] ? arguments[0] : {};
		if (!AXYThreeArgs) {
			$.toaster({
				message: 'Please specify the args!'
			});
			return;
		}
		if (typeof (AXYThreeArgs) != 'object') {
			$.toaster({
				message: 'Please specify the args with object!'
			});
			//console.log(typeof(AXYThreeArgs));
			return;
		}

		if (!Detector.webgl) {
			$.toaster({
				message: 'Your Device can not support webgl!'
			});
			//Detector.addGetWebGLMessage();
			return;
		}

		var container, stats;
		var camera, scene, renderer, objects;
		var clock = new THREE.Clock();
		var loader = [];
		var mtlLoader = [];
		var fbxLoader = [];

		var mouseX = 0,
			mouseY = 0;
		var windowHalfX = window.innerWidth / 2;
		var windowHalfY = window.innerHeight / 2;

		//相机配置
		var cameraFov = 45, //拍摄距离  视野角值越大，场景中的物体越小
			cameraAspect = window.innerWidth / window.innerHeight, //拍摄距离  视野角值越大，场景中的物体越小
			cameraNear = 1, //最小范围
			cameraFar = 1000; //最大范围

		// init scene
		init();
		/*console.log(container);
		console.log($('body'));*/

		var onProgress = function (xhr) {
			if (xhr.lengthComputable) {
				var percentComplete = xhr.loaded / xhr.total * 100;
				console.log(Math.round(percentComplete, 2) + '% downloaded');
			}
		};

		var onError = function (xhr) {};

		AXYThreeArgs.forEach(function (value, index, array) {
			var type = value['type'] ? value['type'] : "assimp";
			var filename = value['filename'] ? value['filename'] : "";
			var filename2 = value['filename2'] ? value['filename2'] : "";
			//var delay	 	=	 AXYThreeArgs['delay'] ? AXYThreeArgs['delay'] : AXY.Three.Param.delay;
			//var id			=	 AXYThreeArgs['id'] ? AXYThreeArgs['id'] : 1;
			//var x			=	 AXYThreeArgs['x'] != undefined ? eval(AXYThreeArgs['x']) : eval(AXY.Three.Param.X);
			//var y			=	 AXYThreeArgs['y'] != undefined ? eval(AXYThreeArgs['y']) : eval(AXY.Three.Param.Y);
			var position = value['position'] != undefined ? value['position'] : AXY.Three.Param.position;
			var scale = value['scale'] != undefined ? value['scale'] : AXY.Three.Param.scale;
			var opacity = value['opacity'] != undefined ? value['opacity'] : AXY.Three.Param.opacity;
			var rotation = value['rotation'] != undefined ? value['rotation'] : AXY.Three.Param.rotation;
			var bgcolor = value['bgcolor'] != undefined ? value['bgcolor'] : AXY.Three.Param.backgroundColor;
			var bgopacity = value['bgopacity'] != undefined ? value['bgopacity'] : AXY.Three.Param.backgroundOpacity;
			//var zindex		=	 AXYThreeArgs['zindex'] != undefined ? AXYThreeArgs['zindex'] : AXY.Three.Param.zIndex;

			if (!filename) {
				$.toaster({
					message: 'Please specify the filename!'
				});
				return;
			}
			if (filename.indexOf('url=') != -1) {
				filename = filename.replace('url=', '');
			} else {
				filename = AXY.Three.Param.path + filename;
			}

			if (type != 'assimp') {
				/*if(!filename2){
					$.toaster({ message : 'Please specify the filename2!'});
					return;
				}*/
				if (!filename2) {
					filename2 = filename.replace('.obj', '.mtl');
				} else if (filename2.indexOf('url=') != -1) {
					filename2 = filename2.replace('url=', '');
				} else {
					filename2 = AXY.Three.Param.path + filename2;
				}
			}

			switch (type) {
				case 'fbx':
					//var filename2 = 'models/assimp/centurion/tank2.mtl'
					/*var mtlpathArray = filename2.split('/');
					var mtlfilename = mtlpathArray[mtlpathArray.length-1];
					var mtlpath = filename2.replace(mtlfilename, '');
					console.log(mtlpathArray);
					console.log(mtlfilename);
					console.log(mtlpath);*/

					fbxLoader[index] = new THREE.FBXLoader();
					fbxLoader[index].load(filename2, function (object) {

						//mixer = new THREE.AnimationMixer( object );

						//var action = mixer.clipAction( object.animations[ 0 ] );
						//action.play();

						object.traverse(function (child) {

							if (child.isMesh) {

								child.castShadow = true;
								child.receiveShadow = true;

							}

						});

						//object.scale.multiplyScalar(1);
						object.position.x = position[0];
						object.position.y = position[1];
						object.position.z = position[2];
						//object.position.set = (position[0], position[1], position[2]);
						//object.scale.multiplyScalar( 0.035 );
						//object.scale.set(0.03,0.03,0.01);
						object.scale.x = scale[0];
						object.scale.y = scale[1];
						object.scale.z = scale[2];
						//object.scale.set = (scale[0], scale[1], scale[2]);
						object.rotation.x = rotation[0];
						object.rotation.y = rotation[1];
						object.rotation.z = rotation[2];
						//object.rotation.set = (rotation[0], rotation[1], rotation[2]);

						scene.add(object);

					});



					/*renderer = new THREE.WebGLRenderer( { antialias: true } );
					renderer.setPixelRatio( window.devicePixelRatio );
					renderer.setSize( window.innerWidth, window.innerHeight );
					renderer.shadowMap.enabled = true;
					container.appendChild( renderer.domElement );

					window.addEventListener( 'resize', onWindowResize, false );

					// stats
					stats = new Stats();
					container.appendChild( stats.dom );*/
					break;
				case 'obj':
					//var filename2 = 'models/assimp/centurion/tank2.mtl'
					var mtlpathArray = filename2.split('/');
					var mtlfilename = mtlpathArray[mtlpathArray.length - 1];
					var mtlpath = filename2.replace(mtlfilename, '');
					console.log(mtlpathArray);
					console.log(mtlfilename);
					console.log(mtlpath);

					mtlLoader[index] = new THREE.MTLLoader();
					mtlLoader[index].setPath(mtlpath);
					mtlLoader[index].load(mtlfilename, function (materials) {
						materials.preload();
						var objLoader = new THREE.OBJLoader();
						objLoader.setMaterials(materials);
						//objLoader.setPath( 'models/assimp/centurion/' );
						objLoader.load(filename, function (object) {
							//object.position.y = - 95;
							object.position.x = position[0];
							object.position.y = position[1];
							object.position.z = position[2];
							//object.position.set = (position[0], position[1], position[2]);
							//object.scale.multiplyScalar( 0.035 );
							//object.scale.set(0.03,0.03,0.01);
							object.scale.x = scale[0];
							object.scale.y = scale[1];
							object.scale.z = scale[2];
							//object.scale.set = (scale[0], scale[1], scale[2]);
							object.rotation.x = rotation[0];
							object.rotation.y = rotation[1];
							object.rotation.z = rotation[2];
							//object.rotation.set = (rotation[0], rotation[1], rotation[2]);
							scene.add(object);
						}, onProgress, onError);
					});
					break;
				case 'mesh':
					var meshLoader = new THREE.TextureLoader();
					var meshTexture = meshLoader.load(filename);
					meshTexture.wrapS = meshTexture.wrapT = THREE.RepeatWrapping;
					meshTexture.repeat.set(25, 25);
					meshTexture.anisotropy = 16;

					var meshMaterial = new THREE.MeshPhongMaterial({
						color: 0xffffff,
						specular: 0x111111,
						map: meshTexture
					});

					var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(500, 500), meshMaterial);
					//mesh.position.y = - 250;
					mesh.rotation.x = -Math.PI / 2;
					mesh.receiveShadow = true;
					scene.add(mesh);
					break;
				case 'ground':
					var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), new THREE.MeshPhongMaterial({
						color: 0x999999,
						depthWrite: false
					}));
					mesh.rotation.x = -Math.PI / 2;
					mesh.receiveShadow = true;
					scene.add(mesh);
					break;
				case 'grid':
					var grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
					grid.material.opacity = 0.2;
					grid.material.transparent = true;
					scene.add(grid);
					break;
				case 'assimp':
				default:
					// Load jeep model using the AssimpJSONLoader
					loader[index] = new THREE.AssimpJSONLoader();
					loader[index].load(filename, function (object) {
						object.position.x = position[0];
						object.position.y = position[1];
						object.position.z = position[2];
						//object.scale.multiplyScalar( 0.035 );
						//object.scale.set(0.03,0.03,0.01);
						object.scale.x = scale[0];
						object.scale.y = scale[1];
						object.scale.z = scale[2];
						//object.scale.multiplyScalar( scale );
						object.rotation.x = rotation[0];
						object.rotation.y = rotation[1];
						object.rotation.z = rotation[2];
						scene.add(object);
						//console.log(object);
					}, onProgress, onError);
					//console.log(loader[index]);
					//console.log(index);
					break;
			}


			// load interior model
			/*var loader2 = new THREE.AssimpJSONLoader();
			loader2.load( 'three/models/assimp/interior/interior.assimp.json', function ( object ) {

				scene.add( object );

			}, onProgress, onError );*/

			renderer.setClearColor(eval('0x' + bgcolor), bgopacity);
		});
		/*var filename 	=	 AXYThreeArgs['filename'] ? AXYThreeArgs['filename'] : "";
		//var delay	 	=	 AXYThreeArgs['delay'] ? AXYThreeArgs['delay'] : AXY.Three.Param.delay;
		//var id			=	 AXYThreeArgs['id'] ? AXYThreeArgs['id'] : 1;
		//var x			=	 AXYThreeArgs['x'] != undefined ? eval(AXYThreeArgs['x']) : eval(AXY.Three.Param.X);
		//var y			=	 AXYThreeArgs['y'] != undefined ? eval(AXYThreeArgs['y']) : eval(AXY.Three.Param.Y);
		//var scalex		=	 AXYThreeArgs['scalex'] != undefined ? AXYThreeArgs['scalex'] : AXY.Three.Param.scalex;
		//var scaley		=	 AXYThreeArgs['scaley'] != undefined ? AXYThreeArgs['scaley'] : AXY.Three.Param.scaley;
		var scale		=	 AXYThreeArgs['scale'] != undefined ? AXYThreeArgs['scale'] : AXY.Three.Param.scale;
		var opacity		=	 AXYThreeArgs['opacity'] != undefined ? AXYThreeArgs['opacity'] : AXY.Three.Param.opacity;
		var rotation	=	 AXYThreeArgs['rotation'] != undefined ? AXYThreeArgs['rotation'] : AXY.Three.Param.rotation;*/
		//var action		=	 AXYThreeArgs['action'] ? AXYThreeArgs['action'] : "";
		//var loop		=	 AXYThreeArgs['loop'] != undefined ? AXYThreeArgs['loop'] : AXY.Three.Param.loop;

		/*if(!action){
			$.toaster({ message : 'Please specify the action!'});
			return;
		}
		if(!filename){
			$.toaster({ message : 'Please specify the filename!'});
			return;
		}
		if(filename.indexOf('url=') != -1){
			filename = filename.replace('url=', '');
		}
		else{
			filename = AXY.Three.Param.path + filename + '.json';
		}*/


		/*var assetsToLoader = [filename];
		loader = new PIXI.AssetLoader(assetsToLoader);
		loader.onComplete = function(){
			if(!AXY.Three.Param.Threecontainer[id]){
				AXY.Three.Param.Threecontainer[id] = new PIXI.DisplayObjectContainer();
				SceneManager._scene.addChild(AXY.Three.Param.Threecontainer[id]);
			}
			if(AXY.Three.Param.Three[id] && AXY.Three.Param.Three[id].filename == filename){
				
			}
			else{
				AXY.Three.Param.Threecontainer[id].removeChild(AXY.Three.Param.Three[id]);
				AXY.Three.Param.Three[id] = new PIXI.Three(filename);
				AXY.Three.Param.Three[id].id = id;
				AXY.Three.Param.Three[id].name = ('AXYThree');
				AXY.Three.Param.Three[id].filename = filename;
				AXY.Three.Param.Threecontainer[id].addChild(AXY.Three.Param.Three[id]);
			}

			AXY.Three.Param.Threecontainer[id].position.x = x;
			AXY.Three.Param.Threecontainer[id].position.y = y;
			AXY.Three.Param.Three[id].scale.x = scalex;
			AXY.Three.Param.Three[id].scale.y = scaley;
			AXY.Three.Param.Three[id].rotation = rotation;
			AXY.Three.Param.Three[id].alpha = opacity;
			AXY.Three.Param.Three[id].state.setAnimationByName(0, action, loop);
			AXY.Three.Param.Three[id].action = action;
			
			//console.log(AXY.Three.Param.Three);
			//console.log(AXY.Three.Param.Threecontainer);
			//console.log(AXY.Three.Param.Three[id].state.getCurrent());
			
			// set up the mixes!
			//Three.stateData.setMixByName("walk", "jump", 0.2);
			//Three.stateData.setMixByName("jump", "walk", 0.4);

			/*scene.stage.click = function()
			{
				Three.state.setAnimationByName(0, "jump", false);
				Three.state.addAnimationByName(0, "walk", true, 0);

			}*/
		/*};
		loader.load();*/

		//Three.state.setAnimationByName(0, 'jump', false);

		/*if(delay>=1){
			setTimeout(function()
			{
				$('#AXYThree'+id).remove();
			}, delay);
		}*/

		//console.log(css);
		//console.log($gameParty);
		//console.log($gameSystem);
		//console.log(TextManager.currencyUnit);

		//$('#AXYThree'+id+' img').stop().show().animate({"width": "100%","height": "100%"}, "normal");

		/*console.log(document.body);
		console.log($('body'));
		console.log($('#UpperCanvas'));
		console.log($('#UpperCanvas')[0].scrollHeight);*/





		animate();


		//

		function init() {

			container = document.createElement('div');
			container.id = "AXY_Three";
			container.style.position = 'absolute';
			container.style.zIndex = AXY.Three.Param.zIndex;
			container.style.overflow = "hidden";
			container.style.margin = 'auto';
			container.style.top = 0;
			container.style.left = 0;
			container.style.right = 0;
			container.style.bottom = 0;
			//container.style.background = 'rgba(0,0,0,0)';
			document.body.appendChild(container);


			camera = new THREE.PerspectiveCamera(cameraFov, cameraAspect, cameraNear, cameraFar);
			camera.position.set(2, 4, 5);

			scene = new THREE.Scene();
			scene.fog = new THREE.FogExp2(0x000000, 0.035);

			// Lights
			scene.add(new THREE.AmbientLight(0xcccccc));

			var directionalLight = new THREE.DirectionalLight(0xeeeeee);
			directionalLight.position.x = Math.random() - 0.5;
			directionalLight.position.y = Math.random();
			directionalLight.position.z = Math.random() - 0.5;
			directionalLight.position.normalize();
			scene.add(directionalLight);

			// Renderer
			renderer = new THREE.WebGLRenderer({
				antialias: true, //是否开启反锯齿
				precision: "highp", //着色精度选择
				alpha: true, //是否可以设置背景色透明
				premultipliedAlpha: false,
				stencil: false,
				preserveDrawingBuffer: true, //是否保存绘图缓冲
				maxLights: 1 //maxLights:最大灯光数
			});
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(window.innerWidth, window.innerHeight);
			//renderer.domElement.style.background = 'rgba(0,0,0,0)';
			//renderer.setClearColor(eval('0x'+bgcolor), bgopacity);
			container.appendChild(renderer.domElement);

			stats = new Stats();
			stats.mode = -1;

			// Events
			window.addEventListener('resize', onWindowResize, false);
			container.addEventListener('mousedown', onDocumentMouseDown, false);
			container.addEventListener('touchstart', onDocumentMouseDown, false);
			document.addEventListener('mousemove', onDocumentMouseMove, false);
			document.addEventListener("DOMMouseScroll", onDocumentMouseWheel, false); //Old Firefox
			document.addEventListener("mousewheel", onDocumentMouseWheel, false); //IE9, Chrome, Safari, Opera
			document.addEventListener('wheel', onDocumentMouseWheel, false); //Firefox
			document.addEventListener('keydown', onDocumentKeyDown, false);
		}

		// Events Hanlder
		function onWindowResize(event) {
			windowHalfX = window.innerWidth / 2;
			windowHalfY = window.innerHeight / 2;
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

		}

		function onDocumentMouseMove(event) {
			mouseX = (event.clientX - windowHalfX) / 2;
			mouseY = (event.clientY - windowHalfY) / 2;
			//console.log(mouseY);
			//console.log(event.clientY);
			if (mouseY > 55) mouseY = 55;
			if (mouseY < -135) mouseY = -135;
		}

		function onDocumentMouseDown(event) {
			container.removeChild(renderer.domElement);
			delete renderer;
			document.body.removeChild(container);
			delete container;
		}
		//鼠标滑轮-鼠标上下滑轮实现放大缩小效果
		function onDocumentMouseWheel(event) {
			//event.preventDefault();
			//e.stopPropagation();
			if (event.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
				if (event.wheelDelta > 0) { //当滑轮向上滚动时
					console.info('event.wheelDelta > 0:' + event.wheelDelta);
					cameraFov -= (cameraNear < cameraFov ? 3 : 0);
				}
				if (event.wheelDelta < 0) { //当滑轮向下滚动时
					console.info('event.wheelDelta < 0:' + event.wheelDelta);
					cameraFov += (cameraFov < cameraFar ? 3 : 0);
				}
			} else if (event.detail) { //Firefox滑轮事件
				if (event.detail > 0) { //当滑轮向上滚动时
					console.info('event.wheelDelta > 0:' + event.detail);
					cameraFov -= 3;
				}
				if (event.detail < 0) { //当滑轮向下滚动时
					console.info('event.wheelDelta < 0:' + event.detail);
					cameraFov += 3;
				}
			}
			if (cameraFov > 60) cameraFov = 60;
			if (cameraFov < 9) cameraFov = 9;
			console.info('cameraFov:' + cameraFov);
			console.info('camera.fov:' + camera.fov);
			console.info('camera.x:' + camera.position.x);
			console.info('camera.y:' + camera.position.y);
			console.info('camera.z:' + camera.position.z);
			//改变fov值，并更新场景的渲染
			camera.fov = cameraFov;
			camera.updateProjectionMatrix();
			renderer.render(scene, camera);
			//updateinfo();
		}

		function onDocumentKeyDown(event) {
			var event = event || window.event || arguments.callee.caller.arguments[0];
			if (!event.ctrlKey && !event.altKey) {
				switch (event.keyCode) {
					case 113: // F2
						event.preventDefault();
						//console.log(stats);
						if (stats.mode == -1) {
							container.appendChild(stats.dom);
						}
						++stats.mode;
						if (stats.mode == stats.dom.children.length) {
							container.removeChild(stats.dom);
							stats.mode = -1;
						} else {
							stats.showPanel(stats.mode % stats.dom.children.length);
						}
						break;
				}
			}
		}

		//
		var t = 0;

		function animate() {
			requestAnimationFrame(animate);
			render();
			stats.update();
		}

		//
		function render() {
			var timer = Date.now() * 0.0005;

			camera.position.x = Math.cos(timer) * 10;
			camera.position.y = 4;
			camera.position.z = Math.sin(timer) * 10;
			camera.position.y += (-mouseY - camera.position.y) * .05;

			camera.lookAt(scene.position);

			renderer.render(scene, camera);
		}

	},
	show2: function () {
		//console.log(arguments[3]);
		var AXYThreeArgs = arguments[0] ? arguments[0] : {};
		if (!AXYThreeArgs) {
			$.toaster({
				message: 'Please specify the args!'
			});
			return;
		}
		if (typeof (AXYThreeArgs) != 'object') {
			$.toaster({
				message: 'Please specify the args with object!'
			});
			//console.log(typeof(AXYThreeArgs));
			return;
		}

		if (!Detector.webgl) {
			$.toaster({
				message: 'Your Device can not support webgl!'
			});
			//Detector.addGetWebGLMessage();
			return;
		}

		var container, stats;
		var camera, scene, renderer, objects;
		var clock = new THREE.Clock();
		var loader = [];
		var mtlLoader = [];
		var fbxLoader = [];

		var mouseX = 0,
			mouseY = 0;
		var windowHalfX = window.innerWidth / 2;
		var windowHalfY = window.innerHeight / 2;

		//相机配置
		var cameraFov = 45, //拍摄距离  视野角值越大，场景中的物体越小
			cameraAspect = window.innerWidth / window.innerHeight, //拍摄距离  视野角值越大，场景中的物体越小
			cameraNear = 1, //最小范围
			cameraFar = 1000; //最大范围

		// init scene
		init();
		/*console.log(container);
		console.log($('body'));*/

		var onProgress = function (xhr) {
			if (xhr.lengthComputable) {
				var percentComplete = xhr.loaded / xhr.total * 100;
				console.log(Math.round(percentComplete, 2) + '% downloaded');
			}
		};

		var onError = function (xhr) {};

		AXYThreeArgs.forEach(function (value, index, array) {
			var type = value['type'] ? value['type'] : "assimp";
			var filename = value['filename'] ? value['filename'] : "";
			var filename2 = value['filename2'] ? value['filename2'] : "";
			//var delay	 	=	 AXYThreeArgs['delay'] ? AXYThreeArgs['delay'] : AXY.Three.Param.delay;
			//var id			=	 AXYThreeArgs['id'] ? AXYThreeArgs['id'] : 1;
			//var x			=	 AXYThreeArgs['x'] != undefined ? eval(AXYThreeArgs['x']) : eval(AXY.Three.Param.X);
			//var y			=	 AXYThreeArgs['y'] != undefined ? eval(AXYThreeArgs['y']) : eval(AXY.Three.Param.Y);
			var position = value['position'] != undefined ? value['position'] : AXY.Three.Param.position;
			var scale = value['scale'] != undefined ? value['scale'] : AXY.Three.Param.scale;
			var opacity = value['opacity'] != undefined ? value['opacity'] : AXY.Three.Param.opacity;
			var rotation = value['rotation'] != undefined ? value['rotation'] : AXY.Three.Param.rotation;
			var bgcolor = value['bgcolor'] != undefined ? value['bgcolor'] : AXY.Three.Param.backgroundColor;
			var bgopacity = value['bgopacity'] != undefined ? value['bgopacity'] : AXY.Three.Param.backgroundOpacity;
			//var zindex		=	 AXYThreeArgs['zindex'] != undefined ? AXYThreeArgs['zindex'] : AXY.Three.Param.zIndex;

			if (!filename) {
				$.toaster({
					message: 'Please specify the filename!'
				});
				return;
			}
			if (filename.indexOf('url=') != -1) {
				filename = filename.replace('url=', '');
			} else {
				filename = AXY.Three.Param.path + filename;
			}

			if (type != 'assimp') {
				/*if(!filename2){
					$.toaster({ message : 'Please specify the filename2!'});
					return;
				}*/
				if (!filename2) {
					filename2 = filename.replace('.obj', '.mtl');
				} else if (filename2.indexOf('url=') != -1) {
					filename2 = filename2.replace('url=', '');
				} else {
					filename2 = AXY.Three.Param.path + filename2;
				}
			}

			switch (type) {
				case 'fbx':
					//var filename2 = 'models/assimp/centurion/tank2.mtl'
					/*var mtlpathArray = filename2.split('/');
					var mtlfilename = mtlpathArray[mtlpathArray.length-1];
					var mtlpath = filename2.replace(mtlfilename, '');
					console.log(mtlpathArray);
					console.log(mtlfilename);
					console.log(mtlpath);*/

					fbxLoader[index] = new THREE.FBXLoader();
					fbxLoader[index].load(filename2, function (object) {

						//mixer = new THREE.AnimationMixer( object );

						//var action = mixer.clipAction( object.animations[ 0 ] );
						//action.play();

						object.traverse(function (child) {

							if (child.isMesh) {

								child.castShadow = true;
								child.receiveShadow = true;

							}

						});

						//object.scale.multiplyScalar(1);
						object.position.x = position[0];
						object.position.y = position[1];
						object.position.z = position[2];
						//object.position.set = (position[0], position[1], position[2]);
						//object.scale.multiplyScalar( 0.035 );
						//object.scale.set(0.03,0.03,0.01);
						object.scale.x = scale[0];
						object.scale.y = scale[1];
						object.scale.z = scale[2];
						//object.scale.set = (scale[0], scale[1], scale[2]);
						object.rotation.x = rotation[0];
						object.rotation.y = rotation[1];
						object.rotation.z = rotation[2];
						//object.rotation.set = (rotation[0], rotation[1], rotation[2]);

						scene.add(object);

					});



					/*renderer = new THREE.WebGLRenderer( { antialias: true } );
					renderer.setPixelRatio( window.devicePixelRatio );
					renderer.setSize( window.innerWidth, window.innerHeight );
					renderer.shadowMap.enabled = true;
					container.appendChild( renderer.domElement );

					window.addEventListener( 'resize', onWindowResize, false );

					// stats
					stats = new Stats();
					container.appendChild( stats.dom );*/
					break;
				case 'obj':
					//var filename2 = 'models/assimp/centurion/tank2.mtl'
					var mtlpathArray = filename2.split('/');
					var mtlfilename = mtlpathArray[mtlpathArray.length - 1];
					var mtlpath = filename2.replace(mtlfilename, '');
					console.log(mtlpathArray);
					console.log(mtlfilename);
					console.log(mtlpath);

					mtlLoader[index] = new THREE.MTLLoader();
					mtlLoader[index].setPath(mtlpath);
					mtlLoader[index].load(mtlfilename, function (materials) {
						materials.preload();
						var objLoader = new THREE.OBJLoader();
						objLoader.setMaterials(materials);
						//objLoader.setPath( 'models/assimp/centurion/' );
						objLoader.load(filename, function (object) {
							//object.position.y = - 95;
							object.position.x = position[0];
							object.position.y = position[1];
							object.position.z = position[2];
							//object.position.set = (position[0], position[1], position[2]);
							//object.scale.multiplyScalar( 0.035 );
							//object.scale.set(0.03,0.03,0.01);
							object.scale.x = scale[0];
							object.scale.y = scale[1];
							object.scale.z = scale[2];
							//object.scale.set = (scale[0], scale[1], scale[2]);
							object.rotation.x = rotation[0];
							object.rotation.y = rotation[1];
							object.rotation.z = rotation[2];
							//object.rotation.set = (rotation[0], rotation[1], rotation[2]);
							scene.add(object);
						}, onProgress, onError);
					});
					break;
				case 'mesh':
					var meshLoader = new THREE.TextureLoader();
					var meshTexture = meshLoader.load(filename);
					meshTexture.wrapS = meshTexture.wrapT = THREE.RepeatWrapping;
					meshTexture.repeat.set(25, 25);
					meshTexture.anisotropy = 16;

					var meshMaterial = new THREE.MeshPhongMaterial({
						color: 0xffffff,
						specular: 0x111111,
						map: meshTexture
					});

					var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(500, 500), meshMaterial);
					//mesh.position.y = - 250;
					mesh.rotation.x = -Math.PI / 2;
					mesh.receiveShadow = true;
					scene.add(mesh);
					break;
				case 'ground':
					var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), new THREE.MeshPhongMaterial({
						color: 0x999999,
						depthWrite: false
					}));
					mesh.rotation.x = -Math.PI / 2;
					mesh.receiveShadow = true;
					scene.add(mesh);
					break;
				case 'grid':
					var grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
					grid.material.opacity = 0.2;
					grid.material.transparent = true;
					scene.add(grid);
					break;
				case 'assimp':
				default:
					// Load jeep model using the AssimpJSONLoader
					loader[index] = new THREE.AssimpJSONLoader();
					loader[index].load(filename, function (object) {
						object.position.x = position[0];
						object.position.y = position[1];
						object.position.z = position[2];
						//object.scale.multiplyScalar( 0.035 );
						//object.scale.set(0.03,0.03,0.01);
						object.scale.x = scale[0];
						object.scale.y = scale[1];
						object.scale.z = scale[2];
						//object.scale.multiplyScalar( scale );
						object.rotation.x = rotation[0];
						object.rotation.y = rotation[1];
						object.rotation.z = rotation[2];
						scene.add(object);
						//console.log(object);
					}, onProgress, onError);
					//console.log(loader[index]);
					//console.log(index);
					break;
			}


			// load interior model
			/*var loader2 = new THREE.AssimpJSONLoader();
			loader2.load( 'three/models/assimp/interior/interior.assimp.json', function ( object ) {

				scene.add( object );

			}, onProgress, onError );*/

			renderer.setClearColor(eval('0x' + bgcolor), bgopacity);
		});






		animate();


		//

		function init() {

			container = document.createElement('div');
			container.id = "AXY_Three";
			container.style.position = 'absolute';
			container.style.zIndex = AXY.Three.Param.zIndex;
			container.style.overflow = "hidden";
			container.style.margin = 'auto';
			container.style.top = 0;
			container.style.left = 0;
			container.style.right = 0;
			container.style.bottom = 0;
			//container.style.background = 'rgba(0,0,0,0)';
			document.body.appendChild(container);


			camera = new THREE.PerspectiveCamera(cameraFov, cameraAspect, cameraNear, cameraFar);
			camera.position.set(100, 200, 300);

			controls = new THREE.OrbitControls(camera);
			controls.target.set(0, 100, 0);
			controls.update();

			scene = new THREE.Scene();
			scene.background = new THREE.Color(0xa0a0a0);
			scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

			light = new THREE.HemisphereLight(0xffffff, 0x444444);
			light.position.set(0, 200, 0);
			scene.add(light);

			light = new THREE.DirectionalLight(0xffffff);
			light.position.set(0, 200, 100);
			light.castShadow = true;
			light.shadow.camera.top = 180;
			light.shadow.camera.bottom = -100;
			light.shadow.camera.left = -120;
			light.shadow.camera.right = 120;
			scene.add(light);

			// scene.add( new THREE.CameraHelper( light.shadow.camera ) );

			// ground
			var mesh = new THREE.Mesh(new THREE.PlaneBufferGeometry(2000, 2000), new THREE.MeshPhongMaterial({
				color: 0x999999,
				depthWrite: false
			}));
			mesh.rotation.x = -Math.PI / 2;
			mesh.receiveShadow = true;
			scene.add(mesh);

			var grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
			grid.material.opacity = 0.2;
			grid.material.transparent = true;
			scene.add(grid);


			// Renderer
			renderer = new THREE.WebGLRenderer({
				antialias: true, //是否开启反锯齿
				precision: "highp", //着色精度选择
				alpha: true, //是否可以设置背景色透明
				premultipliedAlpha: false,
				stencil: false,
				preserveDrawingBuffer: true, //是否保存绘图缓冲
				maxLights: 3 //maxLights:最大灯光数
			});
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(window.innerWidth, window.innerHeight);
			//renderer.domElement.style.background = 'rgba(0,0,0,0)';
			//renderer.setClearColor(eval('0x'+bgcolor), bgopacity);
			container.appendChild(renderer.domElement);

			stats = new Stats();
			stats.mode = -1;

			// Events
			window.addEventListener('resize', onWindowResize, false);
			container.addEventListener('mousedown', onDocumentMouseDown, false);
			container.addEventListener('touchstart', onDocumentMouseDown, false);
			document.addEventListener('mousemove', onDocumentMouseMove, false);
			document.addEventListener("DOMMouseScroll", onDocumentMouseWheel, false); //Old Firefox
			document.addEventListener("mousewheel", onDocumentMouseWheel, false); //IE9, Chrome, Safari, Opera
			document.addEventListener('wheel', onDocumentMouseWheel, false); //Firefox
			document.addEventListener('keydown', onDocumentKeyDown, false);
		}

		// Events Hanlder
		function onWindowResize(event) {
			windowHalfX = window.innerWidth / 2;
			windowHalfY = window.innerHeight / 2;
			renderer.setSize(window.innerWidth, window.innerHeight);
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

		}

		function onDocumentMouseMove(event) {
			mouseX = (event.clientX - windowHalfX) / 2;
			mouseY = (event.clientY - windowHalfY) / 2;
			//console.log(mouseY);
			//console.log(event.clientY);
			if (mouseY > 55) mouseY = 55;
			if (mouseY < -135) mouseY = -135;
		}

		function onDocumentMouseDown(event) {
			container.removeChild(renderer.domElement);
			delete renderer;
			document.body.removeChild(container);
			delete container;
		}
		//鼠标滑轮-鼠标上下滑轮实现放大缩小效果
		function onDocumentMouseWheel(event) {
			//event.preventDefault();
			//e.stopPropagation();
			if (event.wheelDelta) { //判断浏览器IE，谷歌滑轮事件
				if (event.wheelDelta > 0) { //当滑轮向上滚动时
					console.info('event.wheelDelta > 0:' + event.wheelDelta);
					cameraFov -= (cameraNear < cameraFov ? 3 : 0);
				}
				if (event.wheelDelta < 0) { //当滑轮向下滚动时
					console.info('event.wheelDelta < 0:' + event.wheelDelta);
					cameraFov += (cameraFov < cameraFar ? 3 : 0);
				}
			} else if (event.detail) { //Firefox滑轮事件
				if (event.detail > 0) { //当滑轮向上滚动时
					console.info('event.wheelDelta > 0:' + event.detail);
					cameraFov -= 3;
				}
				if (event.detail < 0) { //当滑轮向下滚动时
					console.info('event.wheelDelta < 0:' + event.detail);
					cameraFov += 3;
				}
			}
			if (cameraFov > 60) cameraFov = 60;
			if (cameraFov < 9) cameraFov = 9;
			console.info('cameraFov:' + cameraFov);
			console.info('camera.fov:' + camera.fov);
			console.info('camera.x:' + camera.position.x);
			console.info('camera.y:' + camera.position.y);
			console.info('camera.z:' + camera.position.z);
			//改变fov值，并更新场景的渲染
			camera.fov = cameraFov;
			camera.updateProjectionMatrix();
			renderer.render(scene, camera);
			//updateinfo();
		}

		function onDocumentKeyDown(event) {
			var event = event || window.event || arguments.callee.caller.arguments[0];
			if (!event.ctrlKey && !event.altKey) {
				switch (event.keyCode) {
					case 113: // F2
						event.preventDefault();
						//console.log(stats);
						if (stats.mode == -1) {
							container.appendChild(stats.dom);
						}
						++stats.mode;
						if (stats.mode == stats.dom.children.length) {
							container.removeChild(stats.dom);
							stats.mode = -1;
						} else {
							stats.showPanel(stats.mode % stats.dom.children.length);
						}
						break;
				}
			}
		}

		//
		var t = 0;

		function animate() {
			requestAnimationFrame(animate);
			render();
			stats.update();
		}

		//
		function render() {
			var timer = Date.now() * 0.0005;

			camera.position.x = Math.cos(timer) * 10;
			camera.position.y = 4;
			camera.position.z = Math.sin(timer) * 10;
			camera.position.y += (-mouseY - camera.position.y) * .05;

			camera.lookAt(scene.position);

			renderer.render(scene, camera);
		}

	},
	showcube: function () {
		//console.log(arguments[3]);
		var AXYThreeArgs = arguments[0] ? arguments[0] : {};
		if (!AXYThreeArgs) {
			$.toaster({
				message: 'Please specify the args!'
			});
			return;
		}
		if (typeof (AXYThreeArgs) != 'object') {
			$.toaster({
				message: 'Please specify the args with object!'
			});
			//console.log(typeof(AXYThreeArgs));
			return;
		}

		if (!Detector.webgl) {
			Detector.addGetWebGLMessage();
		}

		var container, mouseX = 0,
			mouseY = 0,

			windowHalfX = window.innerWidth / 2,
			windowHalfY = window.innerHeight / 2,

			camera, scene, renderer;



		var scale = AXYThreeArgs['scale'] != undefined ? AXYThreeArgs['scale'] : AXY.Three.Param.scale;
		var opacity = AXYThreeArgs['opacity'] != undefined ? AXYThreeArgs['opacity'] : AXY.Three.Param.opacity;
		//var rotation	=	 AXYThreeArgs['rotation'] != undefined ? AXYThreeArgs['rotation'] : AXY.Three.Param.rotation;

		init();
		animate();

		function init() {
			var i;

			container = document.createElement('div');
			container.id = "AXY_Three";
			container.style.position = 'absolute';
			container.style.zIndex = AXY.Three.Param.zIndex;
			container.style.overflow = "hidden";
			container.style.margin = 'auto';
			container.style.top = 0;
			container.style.left = 0;
			container.style.right = 0;
			container.style.bottom = 0;
			//container.style.background = 'rgba(0,0,0,0)';
			document.body.appendChild(container);

			camera = new THREE.PerspectiveCamera(33, window.innerWidth / window.innerHeight, 1, 10000);
			camera.position.z = 700;

			scene = new THREE.Scene();

			renderer = new THREE.WebGLRenderer({
				antialias: true, //是否开启反锯齿
				precision: "highp", //着色精度选择
				alpha: true, //是否可以设置背景色透明
				premultipliedAlpha: false,
				stencil: false,
				preserveDrawingBuffer: true, //是否保存绘图缓冲
				maxLights: 1 //maxLights:最大灯光数
			});
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(window.innerWidth, window.innerHeight);
			//renderer.domElement.style.background = 'rgba(0,0,0,0)';
			renderer.setClearColor(eval('0x' + AXY.Three.Param.backgroundColor), AXY.Three.Param.backgroundOpacity);
			container.appendChild(renderer.domElement);

			var geometry = new THREE.Geometry(),
				points = hilbert3D(new THREE.Vector3(0, 0, 0), 200.0, 4, 0, 1, 2, 3, 4, 5, 6, 7);

			for (i = 0; i < points.length; i++) {
				geometry.vertices.push(points[i]);
			}

			// lines
			var line, p, d = 125,
				c1 = 0x553300,
				c2 = 0x555555,
				c3 = 0x992800,
				g1 = geometry,
				//m1 = new THREE.LineBasicMaterial( { color: c1, opacity: 1, blending: THREE.AdditiveBlending, transparent: true } ),
				//m2 = new THREE.LineBasicMaterial( { color: c2, opacity: 1, blending: THREE.AdditiveBlending, transparent: true } ),
				m3 = new THREE.LineBasicMaterial({
					color: c3,
					opacity: opacity,
					blending: THREE.AdditiveBlending,
					transparent: true
				}),
				parameters = [
					[m3, scale, [0, 0, 0], g1]
				];

			for (i = 0; i < parameters.length; i++) {
				p = parameters[i];

				line = new THREE.Line(p[3], p[0]);

				line.scale.x = line.scale.y = line.scale.z = p[1];

				line.position.x = p[2][0];
				line.position.y = p[2][1];
				line.position.z = p[2][2];

				scene.add(line);
			}

			document.addEventListener('mousemove', onDocumentMouseMove, false);
			document.addEventListener('touchstart', onDocumentTouchStart, false);
			document.addEventListener('touchmove', onDocumentTouchMove, false);

			//

			window.addEventListener('resize', onWindowResize, false);
			container.addEventListener('mousedown', onContainerMouseDown, false);
			container.addEventListener('touchend', onContainerMouseDown, false);

		}

		//

		function onContainerMouseDown(event) {
			container.removeChild(renderer.domElement);
			delete renderer;
			document.body.removeChild(container);
			delete container;
		}

		function onWindowResize() {

			windowHalfX = window.innerWidth / 2;
			windowHalfY = window.innerHeight / 2;

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();

			renderer.setSize(window.innerWidth, window.innerHeight);

		}

		//

		function onDocumentMouseMove(event) {

			mouseX = event.clientX - windowHalfX;
			mouseY = event.clientY - windowHalfY;
		}

		function onDocumentTouchStart(event) {

			if (event.touches.length > 1) {

				event.preventDefault();

				mouseX = event.touches[0].pageX - windowHalfX;
				mouseY = event.touches[0].pageY - windowHalfY;

			}

		}

		function onDocumentTouchMove(event) {

			if (event.touches.length == 1) {

				event.preventDefault();

				mouseX = event.touches[0].pageX - windowHalfX;
				mouseY = event.touches[0].pageY - windowHalfY;

			}

		}

		//

		function animate() {

			requestAnimationFrame(animate);

			render();

		}

		function render() {

			camera.position.x += (mouseX - camera.position.x) * .05;
			camera.position.y += (-mouseY + 200 - camera.position.y) * .05;

			camera.lookAt(scene.position);

			var time = Date.now() * 0.0015;

			for (var i = 0; i < scene.children.length; i++) {

				var object = scene.children[i];
				if (object instanceof THREE.Line) object.rotation.y = time * (i % 2 ? 1 : -1);

			}

			renderer.render(scene, camera);

		}
	},
	/*action: function () {
		var AXYThreeArgs 	=	 arguments[0] ? arguments[0] : {};
		var id			=	 AXYThreeArgs['id'] ? AXYThreeArgs['id'] : 1;
		var x			=	 AXYThreeArgs['x'] != undefined ? eval(AXYThreeArgs['x']) : null;
		var y			=	 AXYThreeArgs['y'] != undefined ? eval(AXYThreeArgs['y']) : null;
		var scalex		=	 AXYThreeArgs['scalex'] != undefined ? AXYThreeArgs['scalex'] : null;
		var scaley		=	 AXYThreeArgs['scaley'] != undefined ? AXYThreeArgs['scaley'] : null;
		var opacity		=	 AXYThreeArgs['opacity'] != undefined ? AXYThreeArgs['opacity'] : null;
		var rotation	=	 AXYThreeArgs['rotation'] != undefined ? AXYThreeArgs['rotation'] : null;
		var action		=	 AXYThreeArgs['action'] ? AXYThreeArgs['action'] : "";
		var type		=	 AXYThreeArgs['type'] ? AXYThreeArgs['type'] : "temp";
		//console.log(AXYThreeArgs['loop']);
		
		if(!action){
			$.toaster({ message : 'Please specify the action!'});
			return;
		}
		if(AXY.Three.Param.Threecontainer[id] && AXY.Three.Param.Three[id]){
			if(x) AXY.Three.Param.Threecontainer[id].position.x = x;
			if(y) AXY.Three.Param.Threecontainer[id].position.y = y;
			if(scalex) AXY.Three.Param.Three[id].scale.x = scalex;
			if(scaley) AXY.Three.Param.Three[id].scale.y = scaley;
			if(rotation) AXY.Three.Param.Three[id].rotation = rotation;
			if(opacity) AXY.Three.Param.Three[id].alpha = opacity;
			
			switch(type){
				case 'loop':
					AXY.Three.Param.Three[id].state.setAnimationByName(0, action, true);
					AXY.Three.Param.Three[id].action = action;
					break;
				case 'end':
					AXY.Three.Param.Three[id].state.setAnimationByName(0, action, false);
					break;
				case 'temp':
				default:
					AXY.Three.Param.Three[id].state.setAnimationByName(0, action, false);
					AXY.Three.Param.Three[id].state.addAnimationByName(0, AXY.Three.Param.Three[id].action, true, 0);
					break;
			}
			//AXY.Three.Param.Three[id].state.setAnimationByName(0, action, loop);
			//if(!loop)
			//AXY.Three.Param.Three[id].state.addAnimationByName(0, "walk", true, 0);
		}*/

	//console.log(SceneManager._scene);

	//if(SceneManager._scene.children.length > id){
	//console.log(AXY.Three.Param.Three);
	//console.log(AXY.Three.Param.Threecontainer);
	//console.log(loader);
	//console.log((SceneManager._scene.getChildAt(id).toString()));
	//console.log((SceneManager._scene.getChildAt(id) instanceof PIXI.DisplayObjectContainer));
	//console.log((SceneManager._scene.getChildAt(id) instanceof Spriteset_Map));
	//console.log(typeof(SceneManager._scene.getChildAt(id)));
	/*if(SceneManager._scene.getChildAt(id) instanceof PIXI.DisplayObjectContainer){
		console.log((SceneManager._scene.getChildAt(id)));
		//SceneManager._scene.removeChildAt(id);
	}*/
	//}
	//},
	/*remove: function () {
		var id			=	 arguments[0] ? arguments[0] : 1;
		if(AXY.Three.Param.Threecontainer[id] && AXY.Three.Param.Three[id]){
			SceneManager._scene.removeChild(AXY.Three.Param.Threecontainer[id]);
			AXY.Three.Param.Threecontainer[id] = null;
			AXY.Three.Param.Three[id] = null;
		}*/
	//console.log(SceneManager._scene);

	//if(SceneManager._scene.children.length > id){
	//console.log(AXY.Three.Param.Three);
	//console.log(AXY.Three.Param.Threecontainer);
	//console.log(loader);
	//console.log((SceneManager._scene.getChildAt(id).toString()));
	//console.log((SceneManager._scene.getChildAt(id) instanceof PIXI.DisplayObjectContainer));
	//console.log((SceneManager._scene.getChildAt(id) instanceof Spriteset_Map));
	//console.log(typeof(SceneManager._scene.getChildAt(id)));
	/*if(SceneManager._scene.getChildAt(id) instanceof PIXI.DisplayObjectContainer){
		console.log((SceneManager._scene.getChildAt(id)));
		//SceneManager._scene.removeChildAt(id);
	}*/
	//}
	//},
	/*removeall: function () {
		console.log(SceneManager._scene);*/
	/*var id = [];
	SceneManager._scene.children.forEach(function(val,index,arr){
		if(val.children[0].name == 'AXYThree'){
			id.push(index);
			//console.log(val.children[0].name);
			//console.log(val.children[0].id);
			//console.log(index);
		}
	});
	//console.log(id);
	for (var i = id.length-1; i >= 0; i--) {
		//console.log(i);
		//console.log(id[i]);
		SceneManager._scene.removeChildAt(id[i]);
	}*/
	/*AXY.Three.Param.Threecontainer.forEach(function(val,index,arr){
			SceneManager._scene.removeChild(AXY.Three.Param.Threecontainer[index]);
			AXY.Three.Param.Threecontainer[index] = null;
			AXY.Three.Param.Three[index] = null;
		});
	}*/
};