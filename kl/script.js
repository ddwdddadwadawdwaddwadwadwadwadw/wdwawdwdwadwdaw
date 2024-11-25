document.addEventListener('DOMContentLoaded', function() {
    const audioElement = document.getElementById('background-audio');
    let audioPlayed = false;

   
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioSource = audioContext.createMediaElementSource(audioElement);
    const analyser = audioContext.createAnalyser();
    
    audioSource.connect(analyser);
    analyser.connect(audioContext.destination);
    
    analyser.fftSize = 512; 
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    let lastBeatTime = 0;
    const beatThreshold = 150; 
    const beatInterval = 1000; 

 
    function detectBeat() {
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;

      
        for (let i = 0; i < bufferLength / 4; i++) {
            sum += dataArray[i]; // Sum the low frequencies
        }

        const average = sum / (bufferLength / 4);

       
        if (average > beatThreshold && (Date.now() - lastBeatTime) > beatInterval) {
            lastBeatTime = Date.now(); // Update the last beat time
            triggerZoom();
        }

       
        if (!audioElement.paused) {
            requestAnimationFrame(detectBeat);
        }
    }

  
    function triggerZoom() {
        document.body.classList.add('zoom');

        
        setTimeout(() => {
            document.body.classList.remove('zoom');
        }, 300); // Same duration as CSS animation (0.3s)
    }

    
    document.body.addEventListener('click', function() {
        if (!audioPlayed) {
            audioContext.resume(); // Required for some browsers to start the AudioContext
            audioElement.play();
            audioPlayed = true;
            detectBeat(); // Start detecting beats
        }
    });
});
