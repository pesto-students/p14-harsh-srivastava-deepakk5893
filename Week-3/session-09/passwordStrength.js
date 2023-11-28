function isStrongPassword(password) {
	if (password.length < 8) {
		return false;
	}

	const containsPasswordString = /password/i;
	if (containsPasswordString.test(password)) {
		return false;
	}

	const containsUppercase = /[A-Z]/;
	if (!containsUppercase.test(password)) {
		return false;
	}

	return true;
}

isStrongPassword('testsadasdApassword')