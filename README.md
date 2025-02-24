# Profile App 
A simple and responsive profile management web application.

## Description 

This web application allows users to create and manage their personal profiles. Built with HTML, CSS, and JavaScript, it features a clean interface for profile management and viewing.
<img width="1402" alt="Screenshot 2025-02-23 at 3 49 07 PM" src="https://github.com/user-attachments/assets/e59152ea-05b4-41b2-891a-9a8a248bb8fb" />

## Features 

### Home Page 
- Welcome section with profile overview
- Sample profile image display
- Features and benefits section
- Responsive navigation
- Turquoise-themed design

### Profile Page 
- Profile picture upload
- Personal information form
- Professional details
- Skills section
- Light blue background
- Data saving functionality

## Project Structure 📂
```bash
project/
├── index.html          # Main page
├── pages/
│   └── profile.html    # Profile editor
├── scripts/
│   └── script.js       # JavaScript code
└── styles/
    └── styles.css      # CSS styles
```


## How to Use 

### 1. View Home Page
- Open `index.html`
- View profile information
- Navigate using the menu

### 2. Edit Profile
- Click "Profile" in navigation
- Upload profile picture
- Fill in your information:
  - Name
  - Email
  - Bio
  - Professional details
  - Skills
- Click "Save Profile"

### 3. View Updated Profile
- Return to Home page
- See your saved information displayed

## Features Implemented ⚙

### Profile Management
- Picture upload
- Information storage
- Auto-loading saved data
- Success notifications

### Design Elements 🎨
- Turquoise navigation (#40E0D0)
- Light blue profile page (#e6f3ff)
- Responsive layout
- Mobile-friendly design

## Storage 💾
- All data saved in browser's localStorage
- Profile picture stored as base64
- Data persists between sessions

## Browser Compatibility 🌐
- Chrome
- Firefox
- Safari
- Edge

## Future Updates 🚀
1. User authentication
2. Server storage
3. Profile sharing
4. More profile sections
5. Data export

## Getting Started 🎯

1. Download all files
2. Maintain folder structure
3. Open `index.html` in browser
4. Start using the app

> No installation or server setup required!

## Code Examples 💡

### Profile Picture Upload
```javascript
imageUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePicture.src = e.target.result;
            localStorage.setItem('profilePicture', e.target.result);
        };
        reader.readAsDataURL(file);
    }
});
```

### Profile Data Storage
```javascript
profileForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const profileData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        // ... other fields
    };
    localStorage.setItem('profileData', JSON.stringify(profileData));
});
```

## File Descriptions 📄

### index.html
- Main landing page
- Displays profile information
- Navigation menu
- Welcome section

### profile.html
- Profile editing interface
- Form for user information
- Picture upload functionality
- Save functionality

### script.js
- Handles form submission
- Manages local storage
- Implements picture upload
- Displays success messages

### styles.css
- Custom styling
- Color themes
- Responsive design rules
- Layout formatting

## Contributing 🤝
Feel free to fork this project and make improvements!
