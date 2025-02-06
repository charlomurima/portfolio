//////////////////////////////////////////////////////////////////////////////
//////////Projects & Certificates/////////////////////////////////////////////
// Show Projects Section with Smooth Slide-In Transition
function showProjects() {
    const projectsSection = document.getElementById('projects-section');
    const certificatesSection = document.getElementById('certificates-section');

    // Ensure Projects are displayed
    projectsSection.classList.remove('hidden');
    setTimeout(() => {
        projectsSection.classList.remove('opacity-0', 'translate-y-10');
        projectsSection.classList.add('opacity-100', 'translate-y-0');
    }, 10);

    // Hide Certificates Section
    certificatesSection.classList.add('opacity-0', 'translate-y-10');
    setTimeout(() => {
        certificatesSection.classList.add('hidden');
    }, 700); // Wait for the transition to complete
}

// Show Certificates Section with Smooth Slide-In Transition
function showCertificates() {
    const projectsSection = document.getElementById('projects-section');
    const certificatesSection = document.getElementById('certificates-section');

    // Ensure Certificates are displayed
    certificatesSection.classList.remove('hidden');
    setTimeout(() => {
        certificatesSection.classList.remove('opacity-0', 'translate-y-10');
        certificatesSection.classList.add('opacity-100', 'translate-y-0');
    }, 10);

    // Hide Projects Section
    projectsSection.classList.add('opacity-0', 'translate-y-10');
    setTimeout(() => {
        projectsSection.classList.add('hidden');
    }, 700); // Wait for the transition to complete
}

// Close all sections when clicking outside the projects section
document.addEventListener('click', function(event) {
    var projectSection = document.getElementById('projects');
    var projectsSection = document.getElementById('projects-section');
    var certificatesSection = document.getElementById('certificates-section');
    
    // Check if the click is outside the project section
    if (!projectSection.contains(event.target)) {
        projectsSection.classList.add('opacity-0', 'translate-y-10');
        certificatesSection.classList.add('opacity-0', 'translate-y-10');
        setTimeout(function() {
            projectsSection.classList.add('hidden');
            certificatesSection.classList.add('hidden');
        }, 700); // Wait for the fade-out effect before hiding
    }
});

function openModal(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('imageModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('imageModal').classList.add('hidden');
}

// Close modal when clicking outside the image
document.getElementById('imageModal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////