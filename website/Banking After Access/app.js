// web app's Firebase configuration
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

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function () {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
});

let popup = document.getElementById('popup');

function openPopup() {
	popup.classList.add('open-popup');
}

function closePopup() {
	popup.classList.remove('open-popup');
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize variables
const auth = firebase.auth();
const database = firebase.database();
const user = auth.currentUser;
