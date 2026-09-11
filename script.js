// Smooth scroll
function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Apply button -> auto fill form
document.querySelectorAll('.apply-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
        const role = btn.getAttribute('data-role');
        document.getElementById('role').value = role;
        scrollToSection('internForm');
        document.getElementById('internForm').style.boxShadow = "0 0 0 2px #7c5cff";
        setTimeout(()=> document.getElementById('internForm').style.boxShadow="none", 1000);
    });
});

// Form submission
document.getElementById('internForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    
    document.getElementById('successMsg').innerText = 🎉 Thanks ${name}! Your application for ${role} at NEXIO is submitted. We will email you soon!;
    
    // Clear form
    this.reset();

    // Simple confetti effect
    document.body.style.background = "#0a0a0b";
    console.log("NEXIO Internship Application:", {name, role});
});

// Navbar scroll effect
window.addEventListener('scroll',()=>{
    const nav = document.querySelector('.navbar');
    if(window.scrollY > 50) nav.style.background = "rgba(10,10,11,0.95)";
    else nav.style.background = "rgba(10,10,11,0.8)";
});
