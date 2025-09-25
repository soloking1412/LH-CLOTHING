// Test script to debug profile dropdown
// Run this in your browser console at localhost:3000

console.log('🔍 Testing profile dropdown...');

// Check if user is logged in
const userProfile = document.querySelector('.user-profile');
if (userProfile) {
  console.log('✅ User profile found');
  
  // Check dropdown
  const dropdown = userProfile.querySelector('.profile-dropdown');
  if (dropdown) {
    console.log('✅ Profile dropdown found');
    console.log('Dropdown styles:', window.getComputedStyle(dropdown));
    
    // Force show dropdown for testing
    dropdown.style.opacity = '1';
    dropdown.style.visibility = 'visible';
    dropdown.style.transform = 'translateY(0)';
    dropdown.style.display = 'block';
    
    console.log('🎯 Dropdown should now be visible!');
    
    // Check dropdown items
    const items = dropdown.querySelectorAll('a, button');
    console.log(`📋 Found ${items.length} dropdown items:`);
    items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.textContent.trim()}`);
    });
    
  } else {
    console.log('❌ Profile dropdown not found');
  }
  
} else {
  console.log('❌ User profile not found - user might not be logged in');
}

// Check for any CSS conflicts
const header = document.querySelector('.header');
if (header) {
  console.log('🎨 Header z-index:', window.getComputedStyle(header).zIndex);
}
