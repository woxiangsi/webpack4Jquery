var resultHost = {
    BASEHOST_MGR:'', // 云后端
   
}
var serverUrl=window.location.hostname;
    
if(process.env.NODE_ENV == 'production'){
    //正式环境
    resultHost.BASEHOST_MGR = "生产环境";

}else if(process.env.NODE_ENV == 'development'){
	resultHost.BASEHOST_MGR = "开发环境";
   
}else if(process.env.NODE_ENV == 'server'){
   
}

module.exports = resultHost;
