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
		this.currentState((err, currentState)=>{
			
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
				throw new Error(err);
			}
		});
	}

	validateFSM(){
		return true;
	}

}

module.exports = fsmr;