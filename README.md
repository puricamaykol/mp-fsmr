Finite State Machines Runner 
===================

This is a work in progress.

It'll receive an FSM object and process the transition to its next state.

This is a draft object:

```javascript
'use strict'

const invoiceFSM = () => {
	getCurrentState: (object, done) => {
		//define a function that fetch for the current state
		//Maybe from a Redis cache o from your favorite DB
		 let error = null;
		 let currentState = 'state1',
		 userClass.getCurrentState(object.invoiceId)
		 .then(currentState=>done(null, currentState))
		 .catch(error=>done(error, null));
	},
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
			{action1:'state2'},
			{action1: 'state2'},

		]	
			
		},
		state2: {
			onStart: () => {},
		transitions: [
			{action1:'state2'},
			{action1: 'state2'},

		]	
			
		},
	actions: {
		action1: (properties, currentState, done, ...params) => {}	
	}
	},
}


```

Once its created the FSM object you can trigger the transition like this:

```javascript
fsmr.init(invoiceFSM, {});

fsmr.transition('action1', param1, param2).then().catch();
```



