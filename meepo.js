var meepoJS = {
	loadScript:(scriptSrc)=>{
		return new Promise((resolve,reject)=>{
			var script = document.createElement("script")
			script.setAttribute("src",scriptSrc)
			document.getElementsByTagName('head')[0].appendChild(script);

			script.onload = (res)=>{
				var responseObject = {}

				responseObject.status = true
				responseObject.scriptURL = scriptSrc
				responseObject.response = res;
				
				resolve(responseObject)
			}
			script.onerror = (err)=>{
				var responseObject = {}

				responseObject.status = false
				responseObject.scriptURL = scriptSrc
				responseObject.response = err;
				resolve(responseObject)
			}
		})
	},
	loadScripts:async function (scriptArray,config){
		var failed = []
		var success = []

		var configProvided = undefined;
		// defaults
		if(config===undefined){
			configProvided= false
		} 
		

		//
		for(var i=0;i<scriptArray.length;i++){
			var res = await this.loadScript(scriptArray[i])
			
			if(res.status===false){
				failed.push(res.scriptURL)
				if(configProvided){
					if(config.logging===true){
						console.log("%c Script Load Failed! \n"+ res.scriptURL,'background: red; color: white;padding:8px;')
					}
				}
				
				
			}else if(res.status === true){
				
				success.push(res.scriptURL)
				if(configProvided){
					if(config.logging===true){
						console.log("%c Script loaded Successfully! \n"+ res.scriptURL,'background: green; color: white;padding:8px;')
					}
				}
			}

		}
		return {
			status: failed.length>0?false:true,
			successful_URLs:success,
			failed_URLs:failed
		}
	}
}