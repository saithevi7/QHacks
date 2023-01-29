// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBru6ibmStwxwnwFAYQIOU62F-rmG-VQFc',
	authDomain: 'bank-authentication-88d1d.firebaseapp.com',
	databaseURL: 'https://bank-authentication-88d1d-default-rtdb.firebaseio.com',
	projectId: 'bank-authentication-88d1d',
	storageBucket: 'bank-authentication-88d1d.appspot.com',
	messagingSenderId: '87842566861',
	appId: '1:87842566861:web:a860fa8c2199438b396f84',
	measurementId: 'G-53DSE4JDXS',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth();
const database = firebase.database();

// Set up our register function
function register() {
	// Get all our input fields
	email = document.getElementById('email').value;
	password = document.getElementById('password').value;
	full_name = document.getElementById('full_name').value;

	// Validate input fields
	if (validate_email(email) == false || validate_password(password) == false) {
		alert('Email or Password is Wrong');
		return;
		// Don't continue running the code
	}

	// Move on with Auth
	auth
		.createUserWithEmailAndPassword(email, password)
		.then(function () {
			// Declare user variable
			var user = auth.currentUser;

			// Add this user to Firebase Database
			var database_ref = database.ref();

			// Create User data
			var user_data = {
				email: email,
				full_name: full_name,
				last_login: Date.now(),
			};

			// Push to Firebase Database
			database_ref.child('users/' + user.uid).set(user_data);

			// Done
			alert('User Created.');
			window.location.replace('http://127.0.0.1:5500/website/login/login.html');
		})

		.catch(function (error) {
			// Firebase will use this to alert of its errors
			var error_code = error.code;
			var error_message = error.message;

			alert(error_message);
		});
}

// Set up our login function
function login() {
	// Get all our input fields
	email = document.getElementById('email').value;
	password = document.getElementById('password').value;

	// Validate input fields
	if (validate_email(email) == false || validate_password(password) == false) {
		alert('Email or Password is Wrong!');
		return;
		// Don't continue running the code
	}

	auth
		.signInWithEmailAndPassword(email, password)
		.then(function () {
			// Declare user variable
			var user = auth.currentUser;

			// Add this user to Firebase Database
			var database_ref = database.ref();

			// Create User data
			var user_data = {
				last_login: Date.now(),
			};

			// Push to Firebase Database
			database_ref.child('users/' + user.uid).update(user_data);

			// Done
			alert('User Logged In.');
			window.location.replace(
				'http://127.0.0.1:5500/website/Banking%20After%20Access/home.html'
			);
		})
		.catch(function (error) {
			// Firebase will use this to alert of its errors
			var error_code = error.code;
			var error_message = error.message;

			alert(error_message);
		});
}

// Validate Functions
function validate_email(email) {
	expression = /^[^@]+@\w+(\.\w+)+\w$/;
	if (expression.test(email) == true) {
		// Email is good
		return true;
	} else {
		// Email is not good
		return false;
	}
}

function validate_password(password) {
	// Firebase only accepts lengths greater than 6
	if (password < 6) {
		return false;
	} else {
		return true;
	}
}

function validate_field(field) {
	if (field == null) {
		return false;
	}

	if (field.length <= 0) {
		return false;
	} else {
		return true;
	}
}
