	if(!this.active){
			this.active = true;
			if(!this.external){
				this.table.element.appendChild(this.getElement());
				this.table.element.style.display = '';
			}

if(typeof this.table[name] === "undefined"){
			this.table[name] = (...args) => {
				this.table.initGuard(name);
				
				return func(...args);
			};
		}else{
			console.warn("Unable to bind table function, name already in use", name);//hello
		}
	}

		if(this._handler){
			lookupIndex = this.table.rowManager.displayPipeline.findIndex((item) => {
				return item.handler === this._handler;
			});

			if(lookupIndex > -1){
				index = lookupIndex;
			}
		}
		
