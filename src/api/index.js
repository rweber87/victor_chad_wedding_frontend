
export function login(params){
	return fetch('http://localhost:3000/api/v1/auth', {
		headers: {
			'Accept': 'application/json',
      		'Content-Type': 'application/json'
	    },
	    method: 'POST',
	    body: JSON.stringify(params)
	  }).then( res => res.json() )
}

export function signUp(params){
	return fetch('http://localhost:3000/api/v1/users', {
		headers: {
			'Accept': 'application/json',
      		'Content-Type': 'application/json'
	    },
	    method: 'POST',
	    body: JSON.stringify(params)
	  }).then( res => res.json() )
}