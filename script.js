const message = "Dear Special Someone,\n\nIn this huge universe 🌌,\nmy heart found you.\n\nEvery moment feels special.\nI really like you! 💖\n\nWill you be my girlfriend?";

let charIndex = 0;
let isTyping = false;

// 1. OPEN LETTER LOGIC
function openLetter() {
    const wrapper = document.getElementById("envelope-wrapper");
    if (wrapper.classList.contains("open")) return;

    wrapper.classList.add("open");

    // Reset text and typing
    document.getElementById("typeText").innerHTML = "";
    document.getElementById("response-options").style.opacity = "0"; // Hide buttons
    document.getElementById("response-options").style.display = "flex"; // Ensure buttons are visible
    charIndex = 0;
    isTyping = true;
    
    // Start typing after the envelope opens
    setTimeout(typeWriter, 1000);

    const music = document.getElementById("music");
    music.volume = 0.3;
    music.play().catch(() => {});
}

    // Play Music
    const audio = document.getElementById("music");
    if (audio) {
        audio.volume = 0.5;
        audio.play().catch(() => {});
    }

    // Initial Heart Rain
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeartDrop, i * 150);
    }

// CHANGE 2: Update this function to trigger the buttons
function typeWriter() {
    if (charIndex < message.length && isTyping) {
        document.getElementById("typeText").innerHTML += message.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 70);
    } else if (charIndex >= message.length) {
        // This line makes the buttons appear only when typing is DONE
        document.getElementById("response-options").style.opacity = "1";
    }
}

// 3. CLOSE LETTER LOGIC
function closeLetter() {
    document.getElementById("envelope-wrapper").classList.remove("open");
    isTyping = false;
    const audio = document.getElementById("music");
    if (audio) audio.pause();
}


// 4. "NO" BUTTON TELEPORT
function moveNo() {
    const btn = document.getElementById("no-btn");
    // Calculate random position
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    btn.style.position = "fixed";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

// 5. BACKGROUND EFFECTS (Stars & Sparkles)

// Cursor Sparkles
document.addEventListener("mousemove", (e) => {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = e.clientX + "px";
    s.style.top = e.clientY + "px";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 800);
});

// Floating Stars
function createFloatingStar() {
    const star = document.createElement("div");
    star.className = "floating-star";
    star.innerHTML = "⭐";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = "105vh";
    star.style.opacity = Math.random();
    star.style.position = "fixed";
    star.style.pointerEvents = "none";
    star.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 20000);
}
setInterval(createFloatingStar, 1500);

// Shooting Stars
function createShootingStar() {
    const ss = document.createElement("div");
    ss.className = "shooting-star";
    ss.style.top = Math.random() * 50 + "vh";
    ss.style.left = "-5vw";
    document.body.appendChild(ss);
    setTimeout(() => ss.remove(), 3000);
}
setInterval(createShootingStar, 6000);

// Click Heart Rain
function createHeartDrop() {
    const heart = document.createElement("div");
    heart.className = "heart-drop";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.position = "fixed";
    heart.style.top = "-5vh";
    heart.style.animation = `fall ${Math.random() * 2 + 3}s linear forwards`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

document.addEventListener("click", (e) => {
    // Only trigger if not clicking the envelope
    if(!e.target.closest('.envelope-wrapper')) {
        for (let i = 0; i < 5; i++) {
            const h = document.createElement("div");
            h.className = "click-heart";
            h.innerHTML = "💖";
            h.style.left = e.clientX + "px";
            h.style.top = e.clientY + "px";
            h.style.position = "fixed";
            
            const dx = (Math.random() - 0.5) * 200 + "px";
            const dy = (Math.random() - 0.5) * 200 + "px";
            h.style.setProperty('--dx', dx);
            h.style.setProperty('--dy', dy);
            
            document.body.appendChild(h);
            setTimeout(() => h.remove(), 1000);
        }
    }
});
function sayYes() {
    // 1. Hide the Yes/No buttons
    document.getElementById("response-options").style.display = "none";
    
    // 2. Change the text to your special message
    const textElement = document.getElementById("typeText");
    textElement.innerHTML = "<h1 style='color: #ff4d6d; font-size: 30px; text-align: center; margin-top: 20px; line-height: 1.4;'>You are my Baby right now !! 💖✨\n Love U Baby <3</h1>";
    
    // 3. Change falling stars to "Love Mode" colors
    const stars = document.querySelectorAll('.falling-star');
    stars.forEach(star => {
        star.style.color = Math.random() > 0.5 ? "#ff4d6d" : "#ffd700"; // Pink or Gold
        star.style.textShadow = "0 0 10px #ff4d6d";
    });

    // 4. Trigger extra heart rain
    for (let i = 0; i < 50; i++) {
        setTimeout(createHeartDrop, i * 100);
    }
}
    
    // 3. Trigger a heart explosion
    for (let i = 0; i < 40; i++) {
        setTimeout(createHeartDrop, i * 100);
    }


// This function makes the NO button jump away
function moveNo() {
    const btn = document.getElementById("no-btn");
    
    // Calculate random position across the WHOLE screen
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    // Set position to fixed so it can leave the envelope area
    btn.style.position = "fixed";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
    btn.style.zIndex = "1000";
}
// Function to create twinkling stars falling from the top
function createTwinkleStar() {
    const star = document.createElement("div");
    star.className = "falling-star";
    
    // Randomly choose between a few star shapes
    const shapes = ["⭐", "✨", "✺", "*"];
    star.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
    
    // Random horizontal position
    star.style.left = Math.random() * 100 + "vw";
    
    // Random fall speed (between 3 and 7 seconds)
    const duration = Math.random() * 4 + 3;
    star.style.animationDuration = `${duration}s, 1.5s`; // fall speed, twinkle speed
    
    document.body.appendChild(star);
    
    // Remove star after it falls off screen
    setTimeout(() => {
        star.remove();
    }, duration * 1000);
}

// Start spawning stars automatically
setInterval(createTwinkleStar, 300);