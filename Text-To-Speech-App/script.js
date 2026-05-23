function speakText() {
    const text = document.getElementById("text").value;

    if (!text) return;

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";

    window.speechSynthesis.speak(speech);
}
