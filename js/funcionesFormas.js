var IdPass = 0;
var IdDoc = 0;
var IdCuenta = 0;
// LogIn

function limpiarPLogIn() {
	$$('FormaLogIn').clear();
}
const ingresar = () => {
	var forma = $$('FormaLogIn').getValues();
    traerDatosPost(ingresarCB, 'auth/signin', forma);
	limpiarPLogIn();
}

const ingresarCB = data => {
    guardarJWT(data.token);
	$$('PanelPrincipal').show();
	$$('principalLogIn').hide();
	mostrarDocumentos();
	mostrarCuentas();
	mostrarPasswords();
	irPorNoticias();
}


//   Indice

const traerNoticias = () => {
	webix.ajax().headers({
		'x-access-token': webix.storage.local.get("JWT"),
		"Content-Type": "application/json"
	}).get(`http://alumnos01.enlacenet.net:8022/news/getNoticias`)
		.then(function(data){
	    
	    objeto = data.json();
		
		console.log(objeto);
		console.log(objeto.data.articles);
		let articulos = objeto.data.articles;
		articulos = articulos.slice(0,5);
	    
	    console.log(articulos);
	});
}


// Contrasenas


function limpiarPass() {
	$$('formPass1').clear();
	$$('formPasss2').clear();	
	$$('passNew').show();
	$$('passModify').hide();
}

function mostrarPasswords() {
	traerDatosPost(mostrarPasswordsCB, 'password/getPasswords', {});
}

const mostrarPasswordsCB = data => {
    $$('datatablePass').clearAll();
	$$('datatablePass').parse(data);
}

function guardarPass() {
	//var forma = $$('FormaPasswords').getValues();
	const forma = {...$$("formPass1").getValues(), ...$$("formPasss2").getValues()}
	traerDatosPost(guardarPassCB, 'password/addPassword', forma);
	limpiarPass();
}

const guardarPassCB = data => {
    $$('datatablePass').clearAll();
	$$('datatablePass').parse(data);
}

function modificarPass() {
	$$('formPass1').setValues({'_id':IdPass},true);
	var forma = {...$$("formPass1").getValues(), ...$$("formPasss2").getValues() };
	traerDatosPost(modificarPassCB, 'password/modifyPassword', forma);
	limpiarPass();
}

const modificarPassCB = data => {
    $$('datatablePass').clearAll();
	$$('datatablePass').parse(data);
}

function borrarPass() {
	webix.confirm({title:'Eliminar',ok:'Si',cancel:'No',type:'confirm-error',text:'¿Estas seguro de borrar?',
			callback:function(resultado){
				if(resultado) {
					$$('formPass1').setValues({'_id':IdPass},true);
					var forma = $$('formPass1').getValues();
					traerDatosPost(borrarPassCB, 'password/deletePassword', forma);
					limpiarPass();
				} else {
					limpiarPass();
				}
			}
	});
}

const borrarPassCB = data => {
    $$('datatablePass').clearAll();
	$$('datatablePass').parse(data);
	$$('passNew').show();
	$$('passModify').hide();
}


// documentos

function limpiarDoc() {
	$$('formAcc1').clear();
	$$('formAcc2').clear();
	$$('docNew').show();
    $$('docModify').hide();
}

function mostrarDocumentos() {
	traerDatosPost(mostrarDocumentosCB, 'document/getDocuments', {});
}

const mostrarDocumentosCB = data => {
    $$('datatableDoc').clearAll();
	$$('datatableDoc').parse(data);
}

function guardarDoc() {
	//var forma = $$('FormaPasswords').getValues();
	const forma = {...$$("formDoc1").getValues(), ...$$("formDoc2").getValues() };
	traerDatosPost(guardarDocCB, 'document/addDocument', forma);
	limpiarDoc();
}

const guardarDocCB = data => {
    $$('datatableDoc').clearAll();
	$$('datatableDoc').parse(data);
}

function modificarDoc() {
	$$('formDoc1').setValues({'_id':IdDoc},true);
	var forma = {...$$("formDoc1").getValues(), ...$$("formDoc2").getValues() };
	traerDatosPost(modificarDocCB, 'document/modifyDocument', forma);
	limpiarDoc();
}

const modificarDocCB = data => {
    $$('datatableDoc').clearAll();
	$$('datatableDoc').parse(data);
}

function borrarDoc() {
	webix.confirm({title:'Eliminar',ok:'Si',cancel:'No',type:'confirm-error',text:'¿Estas seguro de borrar?',
			callback:function(resultado){
				if(resultado) {
					$$('formDoc1').setValues({'_id':IdDoc},true);
					var forma = $$('formDoc1').getValues();
					traerDatosPost(borrarDocCB, 'document/deleteDocument', forma);
					limpiarDoc();
				} else {
					limpiarDoc();
				}
			}
	});
}

const borrarDocCB = data => {
    $$('datatableDoc').clearAll();
	$$('datatableDoc').parse(data);
}

/*$$('datatablePass').attachEvent('onAfterSelect',function(id){
	IdDoc = $$('datatableDoc').getItem(id)._id;
});*/


//Cuentas Bancarias

function limpiarCuenta() {
	$$('formAcc1').clear();
	$$('formAcc2').clear();
	$$('accNew').show();
    $$('accModify').hide();
}

function mostrarCuentas() {
	traerDatosPost(mostrarCuentasCB, 'cuentas/getAccounts', {});
}

const mostrarCuentasCB = data => {
    $$('datatableCuenta').clearAll();
	$$('datatableCuenta').parse(data);
}

function guardarCuenta() {
	//var forma = $$('FormaPasswords').getValues();
	const forma = {...$$("formAcc1").getValues(), ...$$("formAcc2").getValues() }
	traerDatosPost(guardarCuentaCB, 'cuentas/addAccount', forma);
	limpiarCuenta();
}

const guardarCuentaCB = data => {
    $$('datatableCuenta').clearAll();
	$$('datatableCuenta').parse(data);
}

function modificarCuenta() {
	$$('formAcc1').setValues({'_id':IdCuenta},true);
	var forma = {...$$("formAcc1").getValues(), ...$$("formAcc2").getValues() };
	traerDatosPost(modificarCuentaCB, 'cuentas/modifyAccount', forma);
	limpiarCuenta();
}

const modificarCuentaCB = data => {
    $$('datatableCuenta').clearAll();
	$$('datatableCuenta').parse(data);
}

function borrarCuenta() {
	webix.confirm({title:'Eliminar',ok:'Si',cancel:'No',type:'confirm-error',text:'¿Estas seguro de borrar?',
			callback:function(resultado){
				if(resultado) {
					$$('formAcc1').setValues({'_id':IdCuenta},true);
					var forma = $$('formAcc1').getValues();
					traerDatosPost(borrarCuentaCB, 'cuentas/deleteAccount', forma);
					limpiarCuenta();
				} else {
					limpiarCuenta();
				}
			}
	});
}

const borrarCuentaCB = data => {
    $$('datatableCuenta').clearAll();
	$$('datatableCuenta').parse(data);
}

/*$$('datatableCuenta').attachEvent('onAfterSelect',function(id){
	IdCuenta = $$('datatableCuenta').getItem(id)._id;
	$$('accNew').hide();
    $$('accModify').show();
});*/


// Cerrar Sesion
function salir() {
	webix.storage.local.remove("JWT");
	$$('PanelPrincipal').hide();
	$$('principalLogIn').show();
}

//Noticias

function irPorNoticias() {
	//var forma = $$('FormaPasswords').getValues();
	traerDatosGet(irPorNoticiasCB, 'news/getNoticias', {});
	limpiarCuenta();
}

const irPorNoticiasCB = data => {
    console.log(data.data.articles);
	imprimirNoticias(data.data.articles);
}

const imprimirNoticias = news => {
	news = news.slice(0,5);
	news.forEach((article) => {
		const { title, content, url, urlToImage } = article;
		const templateImage = `
		<div class='divHijo'>
			<img src="${urlToImage}" width="100">
			<br>
			<a href="${url}">Leer mas</a> 
		</div>`;
		const templateContent = `
		<div class='divHijo'>
			<b>${title}</b><br>
			${content}
		</div>`;
		$$("htmlNews").getBody().addView({
			type:'space', 
			css:"minH",
			rows:[
				{
					css:"min2",
					cols:[ 
						{ template: templateImage, css:"min2" },
						{ template: templateContent, css:"min2" }
					]
				}
			]
		});
		$$('htmlNews').resize();
	});
}
