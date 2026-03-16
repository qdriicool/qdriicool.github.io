<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Patah Hati? Kamu Tidak Sendiri ❤️‍🩹</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            overflow-x: hidden;
            position: relative;
        }
        /* Animasi hati berjatuhan */
        .heart {
            position: absolute;
            font-size: 20px;
            color: rgba(255, 182, 193, 0.8);
            animation: fall linear infinite;
            pointer-events: none;
        }
         @keyframes fall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        } 
         .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            z-index: 2;
        } 
         .header {
            text-align: center;
            color: white;
            margin-bottom: 40px;
        }
          .header h1 {
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
            animation: pulse 2s infinite;
        }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        {
          .quote {
            background: rgba(255,255,255,0.95);
            padding: 30px;
            border-radius: 20px;
            margin-bottom: 30px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            text-align: center;
            backdrop-filter: blur(10px);
            animation: slideInUp 1s ease-out;
        }
           @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
          .quote p {
            font-size: 1.3em;
            font-style: italic;
            color: #555;
            margin-bottom: 20px;
            line-height: 1.6;
        }
          .quote-author {
            font-weight: bold;
            color: #667eea;
            font-size: 1.1em;
        }
          .actions {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 30px;
        {
            .btn {
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            font-size: 1.1em;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            text-decoration: none;
            display: inline-block;
        }
            .btn-primary {
            background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
            color: white;
        }
            .btn-primary:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(255, 107, 107, 0.4);
        }
            .btn-secondary {
            background: linear-gradient(45deg, #4ecdc4, #44a08d);
            color: white;
        }
            .btn-secondary:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(78, 205, 196, 0.4);
        }
            .mood-tracker {
            background: rgba(255,255,255,0.95);
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            backdrop-filter: blur(10px);
            text-align: center;
        }
            .mood-selector {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin: 20px 0;
            flex-wrap: wrap;
        }
            .mood-btn {
            width: 60px;
            height: 60px;
            border: none;
            border-radius: 50%;
            font-size: 1.5em;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }
            .mood-btn:hover {
            transform: scale(1.2);
        }
        .mood-btn.selected {
            transform: scale(1.3);
            box-shadow: 0 0 20px currentColor;
        }
        .progress-circle {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: conic-gradient(#ff6b6b 0deg, #ddd 0deg);
            margin: 20px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2em;
            font-weight: bold;
            color: #ff6b6b;
            transition: all 0.5s ease;
        }
        .progress-text {
            font-size: 1.2em;
            color: #666;
            margin-top: 10px;
        }
        .tips {
            background: rgba(255,255,255,0.95);
            padding: 30px;
            border-radius: 20px;
            margin-top: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
            backdrop-filter: blur(10px);
        }
        .tip {
            padding: 15px;
            margin: 10px 0;
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            border-radius: 10px;
            opacity: 0;
            transform: translateX(-50px);
            animation: slideInLeft 0.8s forwards;
        }
        .tip:nth-child(1) { animation-delay: 0.1s; }
        .tip:nth-child(2) { animation-delay: 0.2s; }
        .tip:nth-child(3) { animation-delay: 0.3s; }
        @keyframes slideInLeft {
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        @media (max-width: 768px) {
            .header h1 {
                font-size: 2em;
            }
            .actions {
                flex-direction: column;
                align-items: center;
            }
            .btn {
                width: 100%;
                max-width: 300px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>❤️‍🩹 Patah Hati?</h1>
            <p>Kamu tidak sendiri. Waktu akan menyembuhkan.</p>
        </div>
        <div class="quote" id="quoteContainer">
            <p id="quoteText">"Patah hati itu seperti badai. Sakit sekarang, tapi pelangi akan datang setelahnya."</p>
            <div class="quote-author" id="quoteAuthor">- Kamu yang kuat ❤️</div>
        </div>
        <div class="actions">
            <button class="btn btn-primary" onclick="playHealingMusic()">🎵 Dengar Lagu Penyembuh</button>
            <button class="btn btn-secondary" onclick="showRandomTip()">💡 Tips Sembuh</button>
        </div>
        <div class="mood-tracker">
            <h3>🌈 Bagaimana perasaanmu hari ini?</h3>
            <div class="mood-selector">
                <button class="mood-btn" data-mood="1" title="Sangat Sedih 😢">😢</button>
                <button class="mood-btn" data-mood="2" title="Sedih 😞">😞</button>
                <button class="mood-btn" data-mood="3" title="Biasa 😐">😐</button>
                <button class="mood-btn" data-mood="4" title="Baik 😊">😊</button>
                <button class="mood-btn" data-mood="5" title="Bahagia 😍">😍</button>
            </div>
            <div class="progress-circle" id="progressCircle">
                <span id="progressValue">0%</span>
            </div>
            <div class="progress-text" id="progressText">Pilih mood harianmu</div>
        </div>
        <div class="tips">
            <h3>✨ Tips Cepat untuk Hari Ini:</h3>
            <div class="tip">1. Minum air putih banyak-banyak 💧</div>
            <div class="tip">2. Jalan-jalan 10 menit di luar 🚶‍♀️</div>
            <div class="tip">3. Tulis 3 hal yang kamu syukuri 📝</div>
        </div>
    </div>
    <script>
        // Buat hati berjatuhan
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '💔';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(heart);
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
        // Hati jatuh setiap 300ms
        setInterval(createHeart, 300);
        // Quotes inspiratif
        const quotes = [
            { text: "Patah hati itu seperti badai. Sakit sekarang, tapi pelangi akan datang setelahnya.", author: "Kamu yang kuat ❤️" },
            { text: "Waktu adalah dokter terbaik. Bersabarlah dengan dirimu sendiri.", author: "Hati yang bijak 💕" },
            { text: "Kamu lebih kuat dari yang kamu pikirkan. Bangkitlah perlahan.", author: "Dirimu yang hebat ✨" },
            { text: "Setiap luka membawa pelajaran. Kamu akan tumbuh lebih kuat.", author: "Hidup yang penuh cinta 🌸" },
            { text: "Cinta yang sebenarnya akan datang saat kamu siap. Sekarang, cintai dirimu dulu.", author: "Cerminmu 😘" }
        ];
        function getRandomQuote() {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            document.getElementById('quoteText').textContent = randomQuote.text;
            document.getElementById('quoteAuthor').textContent = `- ${randomQuote.author}`;
        }
        // Mood tracker
        let totalMood = 0;
        let moodCount = 0;
        const moodBtns = document.querySelectorAll('.mood-btn');
        moodBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Reset semua
                moodBtns.forEach(b => b.classList.remove('selected'));
                // Pilih yang diklik
                this.classList.add('selected');  
                const moodValue = parseInt(this.dataset.mood);
                totalMood += moodValue;
                moodCount++;
                const averageMood = Math.round((totalMood / moodCount) * 20);
                updateProgress(averageMood);
                // Feedback positif
                const feedbacks = [
                    "Bagus! Satu langkah maju 💪",
                    "Kamu hebat hari ini! 🌟",
                    "Perasaanmu valid, terus maju ya ❤️",
                    "Semangat terus! Hari esok lebih baik 😊"
                ];
                alert(feedbacks[Math.floor(Math.random() * feedbacks.length)]);
            });
        });
        function updateProgress(percent) {
            const circle = document.getElementById('progressCircle');
            const value = document.getElementById('progressValue');
            const text = document.getElementById('progressText');            
            circle.style.background = `conic-gradient(#ff6b6b 0deg, #ff6b6b ${percent}deg, #ddd ${percent}deg)`;
            value.textContent = percent + '%';          
            if (percent > 70) {
                text.textContent = 'Kamu semakin membaik! 🎉';
                text.style.color = '#4ecdc4';
            } else if (percent > 40) {
                text.textContent = 'Sedang dalam proses penyembuhan 💙';
            } else {
                text.textContent = 'Kamu sedang dalam fase sulit, tapi akan membaik 😌';
            }
        }
        // Fitur musik (simulasi)
        function playHealingMusic() {
            const songs = [
                "🎵 'Someone Like You' - Adele",
                "🎵 'Fix You' - Coldplay",
                "🎵 'Lose You To Love Me' - Selena Gomez",
                "🎵 'Survivor' - Destiny's Child"
            ];
            alert(`Memutar: ${songs[Math.floor(Math.random() * songs.length)]}\n\n( Musik ini akan menenangkan hatimu 💖 )`);
        }
        function showRandomTip() {
            const tips = [
                "Luapkan perasaanmu dengan menulis diary 📖",
                "Telepon teman terdekatmu sekarang 📞",
                "Makan es krim favoritmu 🍦",
                "Tonton film komedi malam ini 😂",
                "Olahraga ringan 15 menit 🏃‍♀️"
            ];
            alert(`💡 Tips hari ini:\n\n${tips[Math.floor(Math.random() * tips.length)]}`);
        }
        // Ganti quote setiap 10 detik
        setInterval(getRandomQuote, 10000);
        // Quote awal random
        getRandomQuote();
    </script>
</body>
</html>
