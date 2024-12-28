function quoteGenerator() {
    let quotes = ["Fix the cause, not the symptom.--Steve Maguire", "Act as if what you do makes a difference. It does--William James", "Programming is thinking, not typing--Casey Patton", "The only way to do great work is to love what you do.-- Steve Jobs"]

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex];
    document.getElementById('quote').textContent = quote;

}











