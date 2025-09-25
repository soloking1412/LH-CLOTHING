// Test script to check profile visibility
// Run this in your browser console at localhost:3000/profile

console.log('🔍 Checking profile visibility...');

// Check if user is logged in
const authState = document.querySelector('.profile-container');
if (authState) {
  console.log('✅ Profile container found');
  
  // Check for profile sections
  const sections = document.querySelectorAll('.profile-section');
  console.log(`📋 Found ${sections.length} profile sections`);
  
  // Check for user info
  const userInfo = document.querySelector('.info-display');
  if (userInfo) {
    console.log('✅ User info display found');
    
    // Check individual info items
    const infoItems = userInfo.querySelectorAll('.info-item');
    console.log(`📝 Found ${infoItems.length} info items`);
    
    infoItems.forEach((item, index) => {
      const label = item.querySelector('.info-label')?.textContent?.trim();
      const value = item.querySelector('.info-value')?.textContent?.trim();
      console.log(`${index + 1}. ${label}: "${value}"`);
    });
  } else {
    console.log('❌ User info display not found');
  }
  
  // Check for order history
  const orderHistory = document.querySelector('.orders-container');
  if (orderHistory) {
    console.log('✅ Order history container found');
  } else {
    console.log('❌ Order history container not found');
  }
  
} else {
  console.log('❌ Profile container not found');
}

// Check for any CSS issues
const computedStyles = window.getComputedStyle(document.querySelector('.profile-section'));
console.log('🎨 Profile section background:', computedStyles.backgroundColor);
console.log('🎨 Profile section opacity:', computedStyles.opacity);
console.log('🎨 Profile section visibility:', computedStyles.visibility);
console.log('🎨 Profile section display:', computedStyles.display);
