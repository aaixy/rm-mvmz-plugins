var fs = require("fs");

//path模块，可以生产相对和绝对路径
var path = require("path");

//配置远程路径
var remotePath = "/roms";

//获取当前目录绝对路径，这里resolve()不传入参数
var filePath = path.resolve('../../rom_cn');

//读取文件存储数组
var fileArr = [];

//读取文件目录
var files = fs.readdirSync(filePath);
    
var count = files.length;
console.log(files)
writeFile(files);
 

// 写入到filelisttxt文件
function writeFile(fileArr){
	//console.log(fileArr);
	var data = [];
	for(var i=0;i<fileArr.length;i++){
		var f = fileArr[i].split('.');
		//console.log(f);
		data.push('["'+f[0]+'","roms/rom_cn/'+(fileArr[i])+'"]');
	}
    var data = data.join(",\n");
    fs.writeFileSync("../../"+"filelist.txt",data+'\r\n',function(err){
        if(err) throw err;
        console.log("写入成功");
    });
}