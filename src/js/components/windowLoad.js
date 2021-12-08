import { 
  preLoader,
  gsapRegisters,
  setupOwners,
} from './index.js';
 


window.addEventListener('load', function() {
  // Setup Basic Functionality
  preLoader();
  gsapRegisters();
  setupOwners();
    
  if ($(window).width() <= 1024) {
    
  }
  else {
  
  }  
});

window.addEventListener('resize', function() {

  if ($(window).width() < 1024) {

  }
  else {

 }
});