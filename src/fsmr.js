'use strict'

class fsmr{
	/**
	 * [constructor description]
	 * @param  {[type]} fsm [description]
	 * @return {[type]}     [description]
	 */
	constructor(fsm, object){
		this.fsm = Object.assign({}, fsm);
		this.object = Object.assign({}, object);
		this.state = '';
	}
	/**
	 * [transition description]
	 * @param  {[type]} action [description]
	 * @return {[type]}        [description]
	 */
	transition(action){
		let transition = {};
		let nextState = '';
		this.getCurrentState((err, currentState)=>{
			 if(err){
			 	return Promise.reject(new Error(err));
			 }else if(currentState){
			 	transition = this.fsm.transitions.find(itm=>itm.action === action);
			 	if(transition){
			 		nextState = transition.nextState;
			 		this.fsm[transition.action](this.object, currentState, (err, res) =>{
			 			if(err){
			 			return	Promise.reject(new Error(err));
			 			}else if(res){
			 				this.setCurrentState(nextState, (err, res) => {
			 					if(err){
			 						return Promise.reject(new Error(err));
			 					}else if(res){
			 						return Promise.resolve(res);
			 					}
			 				});
			 			}
			 		});
			 	}else{
			 		return Promise.reject(new Error("The specified transition doesn't exist for current state."))
			 	}
			 };
		});
	}
	/**
	 * [getCurrentState description]
	 * @return {[type]} [description]
	 */
	getCurrentState(cb){
		this.fsm.getCurrentState(this.object, (err, currentState) => {
			   if(currentState){
				this.state = currentState;
				cb(null, this.state);
			}else if(err){
				cb(new Error(err), null);
			}
		});
	}

	setCurrentState(state, cb){
		this.fsm.setCurrentState(state, (err, currentState) => {
			   if(currentState){
				this.state = currentState;
				cb(null, this.state);
			}else if(err){
				cb(new Error(err), null);
			}
		});
	}

	validateFSM(){
		return true;
	}

}

module.exports = fsmr;