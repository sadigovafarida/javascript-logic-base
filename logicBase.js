const userAge = prompt('Saisissez votre âge:');
const isAdult = userAge >= 18;
!isAdult && console.log('Bonjour simple user!');
isAdult && console.log('VOus êtes majeur');

const userRole = prompt('Quel est votre rôle dans la société');
const isAdmin = userRole === 'admin';
isAdult && isAdmin && console.log('Bienvenu Admin');

const userPassword = prompt('Saisissez votre mot de passe');
const isMaster = userPassword.length >= 5;
isAdult && isMaster && isAdmin && console.log('Bienvenue master user');
