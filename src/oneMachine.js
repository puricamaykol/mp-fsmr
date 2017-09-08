'use strict'

const invoiceFSM = () => {
	//Se ejecuta antes de ejecutar una accion
	getCurrentState: (object, done) => {
		//define a function that fetch for the current state
		//Maybe from a Redis cache o from your favorite DB
		 let error = null;
		 let currentState = 'state1',
		 userClass.getCurrentState(object.invoiceId)
		 .then(currentState=>done(null, currentState))
		 .catch(error=>done(error, null));


		 //done(error, currentState);
	},
	setCurrentState: (state, cb) => {
		//Something async goin on here
		done(null, "OK");
	},
	//This object contain properties regarding to the actual object
	//It can be pass on initialization and overwritten in any action
	//or OnStart method
	properties: {},
	states: {
		state1: {
			initial: true,
			onStart: () => {
				/*Excecute something as soon as the state change is performed
				  like sending an email or push notification 
				*/
			},
		transitions: [
			/*
				A set of name value pairs representing the actions
				and the state to swtch into once the action is successfully performed
			 */
			{action:'action1', nextState:'state2'},
			{action:'action2', nextState:'state3'},

		]	
			
		},
		state2: {
			onStart: () => {},
		transitions: [
			{action1:'state2'},
			{action1: 'state2'},

		]	
			
		},
	/**
	 * A set of functions representing the actions
	 * that may cause a state change
	 * Each function will receive properties define for the object current state
	 *  (In case you need to act differently 
	 * depending on the current state), a done cb which should receive a success or fail
	 * and any other params
	 * properties, currentState and done params are defined and passed in by the fsm runner
	 * so you can't do it when calling transition() method
	 * @type {Object}
	 */
	actions: {
		action1: (properties, currentState, done) => {

		}	
	}
	},
}


fsmr.init(invoiceFSM, {});

fsmr.transition('action1', param1, param2).then().catch();