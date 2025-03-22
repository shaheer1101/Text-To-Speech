function speakText() {
    let text = document.getElementById("textInput").value;
    let speech = new SpeechSynthesisUtterance(text);

    let voices = window.speechSynthesis.getVoices();
    
    let femaleVoice = voices.find(voice => voice.name.includes("Female") || voice.name.includes("Samantha") || voice.name.includes("Google UK English Female"));

    if (femaleVoice) {
        speech.voice = femaleVoice;
    }

    speech.lang = "en-US";
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1.2; 

    window.speechSynthesis.speak(speech);
}

window.speechSynthesis.onvoiceschanged = function() {
    speakText();
};
