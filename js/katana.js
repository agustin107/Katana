var Katana = {
	extend: function(e, o){
		if(typeof e == "string"){
			return document.getElementById(e);
		}

		for(var name in o){
			e[name] = o[name];
		}

		return e;
	},
	get: function(e){
		if(typeof e == "string"){
			return Katana.extend(document.getElementById(e), Katana);
		}
		else{
			return Katana.extend(e, Katana);
		}
		//return Katana.extend(document.getElementById(id), Katana);
	},
	esc: function(txt){
		return this.innerHTML = txt;
	},
	create: function(e, opc){
		if(opc != undefined){
			var ele = Katana.extend(document.createElement(e), Katana);
			for(var i in opc){
				ele.setAttribute(i, opc[i]);
			}
			return ele;
		}
		else{
			return Katana.extend(document.createElement(e), Katana);
		}
		/*if(id != undefined){
			var ele = Katana.extend(document.createElement(e), Katana);
			ele.id = id;
			return ele;	
		}else{
			return Katana.extend(document.createElement(e), Katana);
		}*/
	},
	insert: function(e){
		return this.appendChild(e);
	},
	error: function(){

	},
	obliga: function(opc){
		this.onblur = function(){
			for(var i in opc){
				switch(i){
					case "vacio":
						if(this.value == ""){
							alert("ta vacio");
						}
					break;
					case "num":
						var pattern = /([0-9])/;
						if(this.value.match(pattern)){
							alert("No seas perejil");
						}
					break;
					case "correo":
						//tarea: validar si existe @
					break;
					case "max":
						var cont = this.value.length;
						if(cont > opc[i]){
							alert("Te pasaste tiburón");
						}
					break;
					default:
					break;
				}
				this.focus();
			}
		}
	},
	css: function(opc){
		for(var prop in opc){
			eval("this.style."+p+" = opc[p]");
		}
	}
}

/*Crear un metodo de error, con un texto que nos pase. (Con confirm)*/

window.$ = Katana;
