function isStrongPassword(password){
	if( (password.length < 8) || password.includes('password') || !containsUppercase(password) ){
		return false
	}
	return true
}

function containsUppercase(str) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toUpperCase()) {
			return true
		}
	}
	return false
}

isStrongPassword('testsadasdApassword')