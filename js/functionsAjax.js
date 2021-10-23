const urlServer = 'http://localhost:8022';

const traerDatosGet = (funcionAComplilar, api, informacion) => {
	armarJWT();
    webix.ajax().headers({
		'x-access-token': webix.storage.local.get("JWT"),
		"Content-Type": "application/json"
	}).get(`${urlServer}/${api}`, informacion)
		.then(function(data){
	    
	    objeto = data.json();
	    
	    funcionAComplilar(objeto);
	});	
}

const traerDatosPost = (funcionAComplilar, api, informacion) => {
	armarJWT();
    webix.ajax().headers({
		'x-access-token': webix.storage.local.get("JWT"),
		"Content-Type": "application/json"
	}).post(`${urlServer}/${api}`, informacion)
		.then(function(data){
	    console.log(data);
	    objeto = data.json();
	    
	    funcionAComplilar(objeto);
	});	
}


const traerDatosDelete = (funcionAComplilar, api, informacion) => {
	armarJWT();
    webix.headers({
		'x-access-token': webix.storage.local.get("JWT"),
		"Content-Type": "application/json"
	}).ajax().delete(`${urlServer}/${api}`, informacion)
		.then(function(data){
	    
	    objeto = data.json();
	    
	    funcionAComplilar(objeto);
	});	
}

const traerDatosPut = (funcionAComplilar, api, informacion) => {
	armarJWT();
    webix.ajax().put(`${urlServer}/${api}`, informacion)
		.then(function(data){
	    
	    objeto = data.json();
	    
	    funcionAComplilar(objeto);
	});	
}

const armarJWT = () => {
	webix.ajax().headers({
		'JWT': webix.storage.local.get("JWT"),
		"Content-Type": "application/json"
	});
}

const guardarJWT = token => {
	webix.storage.local.put("JWT", token);
}

const cargarContrasenas = () => {
	return webix.ajax().headers({
		'x-access-token': webix.storage.local.get("JWT"),
		"Content-Type": "application/json"
	}).post('http://alumnos01.enlacenet.net:8022/password/getPasswords');
}

const cargarDocumentos = () => {
	return webix.ajax().headers({
		'x-access-token': webix.storage.local.get("JWT"),
		"Content-Type": "application/json"
	}).post('http://alumnos01.enlacenet.net:8022/document/getDocuments');
}

const cargarCuentas = () => {
	return webix.ajax().headers({
		'x-access-token': webix.storage.local.get("JWT"),
		"Content-Type": "application/json"
	}).post('http://alumnos01.enlacenet.net:8022/cuentas/getAccounts');
}
