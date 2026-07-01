// --- 1. Tab Switching Logic ---
function switchTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from sidebar menu
    document.querySelectorAll('.nav-menu li').forEach(li => {
        li.classList.remove('active');
    });

    // Show clicked tab
    document.getElementById(tabId).classList.add('active');
    
    // Highlight clicked menu item
    event.currentTarget.classList.add('active');
}

// --- 2. Photo Management Logic ---
// We use localStorage so it saves on the computer even if you refresh
let photos = JSON.parse(localStorage.getItem('shopPhotos')) || [
    "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&q=80",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
];

function renderPhotos() {
    const gallery = document.getElementById('adminGallery');
    gallery.innerHTML = ''; // Clear current
    
    photos.forEach((url, index) => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.innerHTML = `
            <img src="${url}" alt="Shop Photo">
            <button class="btn btn-danger" onclick="deletePhoto(${index})">Delete</button>
        `;
        gallery.appendChild(card);
    });
    
    // Save to local storage
    localStorage.setItem('shopPhotos', JSON.stringify(photos));
}

function addPhoto() {
    const input = document.getElementById('newPhotoUrl');
    const url = input.value.trim();
    
    if(url !== "") {
        photos.push(url);
        input.value = ''; // clear input
        renderPhotos();
    } else {
        alert("Please enter an image URL");
    }
}

function deletePhoto(index) {
    if(confirm("Are you sure you want to delete this photo?")) {
        photos.splice(index, 1);
        renderPhotos();
    }
}

// --- 3. Notification System Logic ---
// Simulated messages from the homepage form
const messages = [
    { name: "Rahul Das", phone: "9876543210", service: "Flight Booking", msg: "I need a ticket to Delhi for tomorrow.", date: "Just now" },
    { name: "Priya Sharma", phone: "8765432109", service: "Aadhaar Services", msg: "Can I update my address today?", date: "2 hours ago" },
    { name: "Amit Kumar", phone: "7654321098", service: "Computer Repair", msg: "My laptop is overheating.", date: "Yesterday" }
];

function renderMessages() {
    const inbox = document.getElementById('inboxList');
    document.getElementById('notifBadge').innerText = messages.length;
    
    messages.forEach(m => {
        const msgHtml = `
            <div class="message-card">
                <div class="msg-header">
                    <span class="sender-name">👤 ${m.name} - 📞 ${m.phone}</span>
                    <span class="service-tag">${m.service}</span>
                </div>
                <p>💬 "${m.msg}"</p>
                <small style="color: #64748b; margin-top: 10px; display: block;">⏳ Received: ${m.date}</small>
            </div>
        `;
        inbox.innerHTML += msgHtml;
    });
}

// Initialize Dashboard
window.onload = () => {
    renderPhotos();
    renderMessages();
};