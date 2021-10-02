var bienvenidoBanner = { 
    view:"toolbar", paddingY:100,
    css:"toolbar_color",
    elements:[
            {view:"label", label:"B I E N V E N I D O"},
        ]      
};

var NoticiasBanner = { 
    view:"toolbar", paddingY:30,
    css:"toolbar_color",
    elements:[
            {view:"label", label:"N O T I C I A S"},
        ]      
};

var formaLogIn = {view:"form",
    elementsConfig:{
        container: "input",
        labelWidth:150
    },
    id:'FormaLogIn',
    css:"center",
    elements:[
        { view:"text", label:"Username", name:"username", id:"username", value:"Elizabeth Astrid" },        
        { view:"text", label:"Password", type:"password", name:"password", id:"password" },
        { view:"switch", labelRight:"Remember password", labelWidth:0, value:1},                       
        { view:"checkbox", labelRight:"I agree with the terms of <b>Privacy Policy</b>", labelWidth:0, value:0 },
        
        { cols:[
            {},
            { view:"button", css:"webix_danger", value:"End sesion", width:150}, 
            { view:"button", css:"webix_primary", value:"Submit", width:150, click:ingresar}
        ]}
    ]
};


// Contrasenas

var formPass1 = {
    view:"form", id:"formPass1", scroll:false,
    elements:[
        { view: "label", label:"Nombre"},
        { view:"text", name:"Nombre"},


        { view: "label", label:"Carpeta"},
        { view:"text", name:"Carpeta"},

        { view: "label", label:"URL"},
        { view:"text", name:"URL"},                         

    ]
};

var formPass2 = {
    view:"form", id:"formPasss2", scroll:false,
    elements:[
        { view: "label", label:"Nombre del usuario"},
        { view:"text", name:"Usernamepass"},

        { view: "label", label:"Contraseña"},
        { view:"text", name:"Contrasena"},

        { view: "label", label:"Notas"},
        { view:"textarea", name:"Notas"},
                      
    ]
};

var gridPass = {
    view:"datatable", id:"datatablePass",scroll:true, css:"datatable",
    columns:[
        
        //{ id:"id", header:"", width:30},
        { id:"Nombre", editor:"text", header:"Nombre", fillspace: true},
        { id:"Carpeta", editor:"text", header:"Carpeta"},
        { id:"URL", editor:"text", header:"URL"},
        { id:"Usernamepass", editor:"text", header:"Nombre del usuario"},
        { id:"Contrasena", editor:"text", header:"Contraseña"},

        { id:"Notas", editor:"popup", header:"Notas", width: 150},
    ],
    select:true,
    autoheight:true,
    //autowidth:true,
    data:[]
};

var formaPass = {  
    type:'space',
    rows:[
    {view:"toolbar", paddingY:25,
            css:"toolbar_color",
            elements:[
                {view:"label", label:"C O N T R A S E Ñ A S"}
            ]
    },
    {type:"wide", cols:[ formPass1,formPass2 ]},
    {type:"wide", cols:[ 
        { view:'button',id:'passDelete',value:'Borrar',click:borrarPass,css:'webix_primary'},
        { view:"button", value:"Limpiar", id:"passClean", click:limpiarPass },
        { view:"button", value:"Nuevo", id:"passNew", click:guardarPass, css:'webix_primary' },
        { view:'button',id:'passModify',value:'Modificar',click:modificarPass,css:'webix_primary',hidden:true},
     ]},
    {type:"wide", cols:[ gridPass ]}
    ]
};

// Cuentas

var formAcc1 = {
    view:"form", id:"formAcc1", scroll:false, paddingY:2,
    elements:[
        { view: "label", label:"Nombre"},
        { view:"text", name:"NombreAcc"},
    
        { view: "label", label:"Tarjeta a nombre de"},
        { view:"text", name:"TarjetaAcc"},   
        
        { view: "label", label:"Tipo "},
        { view:"text", name:"TipoAcc"},
      
    ]
};

var formAcc2 = {
    view:"form", id:"formAcc2", scroll:false, paddingY:2,
    elements:[

    { view: "label", label:"Número"},
        { view:"text", name:"NumeroAcc"},
    
        { view: "label", label:"Código de Seguridad"},
        { view:"text", name:"CodigoAcc"},   
        
        { view: "label", label:"Fecha de Caducidad"},
        { view:"text", name:"DateAcc"},
          
                                    
    ]
};

var gridAcc = {
    view:"datatable", scroll:true, id:"datatableCuenta",
    columns:[
        
        //{ id:"id", header:"", width:30},
        { id:"NombreAcc", editor:"text", header:"Nombre", width: 250},
        { id:"TarjetaAcc", editor:"text", header:"Tarjeta a nombre de", width: 250},
        { id:"TipoAcc", editor:"text", header:"Tipo", width: 250},

        { id:"NumeroAcc", editor:"text", header:"Número",width: 250},
        { id:"CodigoAcc", editor:"text", header:"Código de Seguridad", width: 250},
        { id:"DateAcc", editor:"text", header:"Fecha de Caducidad", width: 250},

    ],
    select:true,
    autoheight:true,
    //autowidth:true,
    data:[]
};

var formaAcc = {  
                          
    rows:[
    {view:"toolbar", paddingY:25,
            css:"toolbar_color",
            elements:[
                {view:"label", label:"T A R J E T A S ▪ B A N C A R I A S"}
            ]
    },
    {type:"wide", cols:[ formAcc1,formAcc2 ]},
    {type:"wide", cols:[
        { view:'button',id:'accDelete',value:'Borrar',click:borrarCuenta,css:'webix_primary'},
        { view:"button", value:"Limpiar", id:"accClean", click:limpiarPass },
        { view:"button", value:"Nuevo", id:"accNew", click:guardarCuenta, css:'webix_primary' },
        { view:'button',id:'accModify',value:'Modificar',click:modificarCuenta,css:'webix_primary',hidden:true},
    ]},
    {type:"wide", cols:[ gridAcc ]}
    ]
}

// Documentos


var formDoc1 = {
    view:"form", id:"formDoc1", scroll:false, paddingY:2,
    elements:[
        { view: "label", label:"Nombre"},
        { view:"text", name:"NombreDoc"},
    
        { view: "label", label:"Tipo"},
        { view:"select", name:"TipoDoc", options:[ { value:"Pasaporte", id:"Pasaporte" }, { value:"INE", id:"INE" }, { value:"Credencial", id:"Credencial" }, { value:"Otra", id:"Otra" } ]},   
        
        { view: "label", label:"ID (Numero)"},
        { view:"text", name:"NumeroDoc"},
      
    ]
};

var formDoc2 = {
    view:"form", id:"formDoc2", scroll:false, paddingY:2,
    elements:[

        { view: "label", label:"Persona"},
        { view:"select", name:"PersonaDoc", options:[ { value:"Yo", id:"Yo" }, { value:"Espos@", id:"Espos@" }, { value:"Hij@", id:"Hij@" }, { value:"Otro", id:"Otro" } ]},   
    
        { view: "label", label:"Notas"},
        { view:"textarea", name:"NotasAcc"},
          
                                    
    ]
};

var gridDoc = {
    view:"datatable", scroll:true, id:"datatableDoc",
    columns:[
        
        //{ id:"id", header:"", width:30},
        { id:"NombreDoc", editor:"text", header:"Nombre", width: 250},
        { id:"TipoDoc", editor:"text", header:"Tipo de documento", width: 250},
        { id:"NumeroDoc", editor:"text", header:"ID", width: 250},

        { id:"PersonaDoc", editor:"text", header:"Persona",width: 250},
        { id:"NotasAcc", editor:"text", header:"Notas", width: 250},


    ],
    select:true,
    autoheight:true,
    //autowidth:true,
    data:[]
};

var formaDoc = {  
                          
    rows:[
    {view:"toolbar", paddingY:25,
            css:"toolbar_color",
            elements:[
                {view:"label", label:"D O C U M E N T O S"}
            ]
    },
    {type:"wide", cols:[ formDoc1,formDoc2 ]},
    {type:"wide", cols:[
        { view:'button',id:'docDelete',value:'Borrar',click:borrarDoc,css:'webix_primary'},
        { view:"button", value:"Limpiar", id:"docClean", click:limpiarPass },
        { view:"button", value:"Nuevo", id:"docNew", click:guardarDoc, css:'webix_primary' },
        { view:'button',id:'docModify',value:'Modificar',click:modificarDoc,css:'webix_primary',hidden:true},
    ]},
    {type:"wide", cols:[ gridDoc ]}
    ]
}


// Salir cerrar sesion

var formaSalir = {rows:[
	{view:'label',label:'Cerrar Sesion'},
	{view:'button',id:'BotonGuardar',value:'Salir',click:salir,css:'webix_primary'},
]};

var templateNewsPhone = `
    <div class="flex-container">
        <div>
            <img src="#urlToImage#" width="100">
            <br>
            <a href="#url#">Leer mas</a> 
        </div>
        
        <div style="max-width: 300px">
            <b>#title#</b><br>
            #content#
        </div>
    </div>
`;