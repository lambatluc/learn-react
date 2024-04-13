// Function to handle resize event
function handleResize() {
    // Your resize event handling code here
}

// Function to handle visibility change
function handleVisibilityChange() {
    if (document.hidden) {
        // User left the tab, do something
        console.log('User left the tab');
        // Add your code here to handle user leaving the tab
    } else {
        // User came back to the tab, do something if needed
        console.log('User came back to the tab');
        // Add your code here to handle user coming back to the tab
    }
}

// Function to handle focus event
function handleFocus() {
    console.log('User came back to the tab');
    // Add your code here to handle user coming back to the tab
}

// Function to handle blur event
function handleBlur() {
    console.log('User left the tab');
    // Add your code here to handle user leaving the tab
}

// Add event listener for resize
window.addEventListener('resize', handleResize);
    
// Add event listener for visibility change
document.addEventListener('visibilitychange', handleVisibilityChange);

// Add event listener for focus
window.addEventListener('focus', handleFocus);

// Add event listener for blur
window.addEventListener('blur', handleBlur);

// Function to remove event listeners
function removeEventListeners() {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('focus', handleFocus);
    window.removeEventListener('blur', handleBlur);
}

// Call removeEventListeners function to remove event listeners
removeEventListeners();