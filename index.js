let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // There are 17 items in the fighters array. (0-16) integers
    // console.log(Math.floor(Math.random() * 17) + "VS" + Math.floor(Math.random() * 17));
    let random1 = Math.floor(Math.random() * 17);
    let random2 = Math.floor(Math.random() * 17);

    stageEl.innerHTML = fighters[random1] + " VS " + fighters[random2];
})