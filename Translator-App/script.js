async function translateText() {

    const text = document.getElementById("inputText").value;
    const target = document.getElementById("language").value;

    const response = await fetch(
        "https://libretranslate.de/translate",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                q: text,
                source: "en",
                target: target,
                format: "text"
            })
        }
    );

    const data = await response.json();

    document.getElementById("outputText").value =
        data.translatedText;
}
