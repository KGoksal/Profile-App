console.log("Hello world!");
console.log("This is a profile application!");

// DOM Elements
const profileForm = document.getElementById('profileForm'); 
const imageUpload = document.getElementById('imageUpload'); 
const profilePicture = document.getElementById('profilePicture'); 

// Handle profile picture upload
if (imageUpload) {
    imageUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePicture.src = e.target.result;
                // Save to localStorage
                localStorage.setItem('profilePicture', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
}

// Handle form submission
if (profileForm) {
    // Load saved data immediately when form is found
    loadSavedData();
    
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Collect form data
        const profileData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            bio: document.getElementById('bio').value,
            title: document.getElementById('title').value,
            company: document.getElementById('company').value,
            skills: document.getElementById('skills').value.split(',').map(skill => skill.trim())
        };

        // Save to localStorage
        localStorage.setItem('profileData', JSON.stringify(profileData));

        // Show success message with Bootstrap alert
        showAlert('Profile saved successfully!', 'success');
    });
}

// Function to load saved data
function loadSavedData() {
    const savedData = localStorage.getItem('profileData');
    const savedPicture = localStorage.getItem('profilePicture');

    if (savedData) {
        const profileData = JSON.parse(savedData);
        
        // Helper function to safely set input values
        const setInputValue = (id, value) => {
            const element = document.getElementById(id);
            if (element) {
                element.value = value || '';
            }
        };

        setInputValue('firstName', profileData.firstName);
        setInputValue('lastName', profileData.lastName);
        setInputValue('email', profileData.email);
        setInputValue('bio', profileData.bio);
        setInputValue('title', profileData.title);
        setInputValue('company', profileData.company);
        setInputValue('skills', profileData.skills ? profileData.skills.join(', ') : '');
    }

    if (savedPicture && profilePicture) {
        profilePicture.src = savedPicture;
    }
}

// Function to show alert messages
function showAlert(message, type = 'success') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    document.body.appendChild(alertDiv);

    // Remove alert after 3 seconds
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// Load saved data when page loads
window.addEventListener('load', loadSavedData);

// Add this function at the end of the file
function displayProfileOnHome() {
    const profileDisplay = document.getElementById('profileDisplay');
    if (!profileDisplay) return;

    const savedData = localStorage.getItem('profileData');
    if (savedData) {
        const profileData = JSON.parse(savedData);
        profileDisplay.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <p><strong>Name:</strong> ${profileData.firstName} ${profileData.lastName}</p>
                    <p><strong>Email:</strong> ${profileData.email}</p>
                    <p><strong>Title:</strong> ${profileData.title}</p>
                    <p><strong>Company:</strong> ${profileData.company}</p>
                </div>
                <div class="col-md-6">
                    <p><strong>Bio:</strong> ${profileData.bio}</p>
                    <p><strong>Skills:</strong> ${profileData.skills ? profileData.skills.join(', ') : ''}</p>
                </div>
            </div>
        `;
    }
}

// Call this function when the page loads
window.addEventListener('load', displayProfileOnHome);
