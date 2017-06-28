var baseURL = 'https://boiling-castle-32125.herokuapp.com/api/v1'

export function login(params){
	return fetch(baseURL + '/auth', {
		headers: {
			'Accept': 'application/json',
      		'Content-Type': 'application/json'
	    },
	    method: 'POST',
	    body: JSON.stringify(params)
	  }).then( res => res.json() )
}

export function signUp(params){
	return fetch(baseURL + '/users', {
		headers: {
			'Accept': 'application/json',
      		'Content-Type': 'application/json'
	    },
	    method: 'POST',
	    body: JSON.stringify(params)
	  }).then( res => res.json() )
}