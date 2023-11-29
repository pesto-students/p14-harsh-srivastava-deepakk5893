function displayWindowProperties() {
  console.log('User Agent:', navigator.userAgent);
  console.log('Screen Width:', screen.width);
  console.log('Screen Height:', screen.height);
  console.log('Current URL:', location.href);
  console.log('Current Path:', location.pathname);

  // Storing and retrieving data from sessionStorage
  sessionStorage.setItem('mykey_1', 'Hello, sessionStorage!');
  const sessionData = sessionStorage.getItem('mykey_1');
  console.log('Data from sessionStorage:', sessionData);

  // Storing and retrieving data from localStorage
  localStorage.setItem('my_key1', 'Hello, localStorage!');
  const localData = localStorage.getItem('my_key1');
  console.log('Data from localStorage:', localData);
}

window.addEventListener('DOMContentLoaded', displayWindowProperties);