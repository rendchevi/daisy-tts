var emo = "sadness"

var emo_colors = {
    'joy': '#ffe600',
    'sadness': '#1a66b2',
    'surprise': '#00af55',
    'anger': '#e3007d',
    'bittersweetness': '#8ca659',
    'delight': '#80ca2a',
    'disappointment': '#0d8b84',
    'envy': '#7e3398',
    'outrage': '#715869',
    'pride': '#f1733e',
}

var weight2opa = {
    0.25:0.70,
    1.0:0.80,
    1.75:0.99,
}


function emotionChange() {

    // Emotion change    
    let emoA = document.getElementById("emotionSelectA").value
    let emoB = document.getElementById("emotionSelectB").value

    let active_emos = {}
    active_emos[emoA] = 1
    active_emos[emoB] = 1

    if (active_emos["joy"] == 1) {
        if (active_emos["sadness"] == 1) {
            emo = "Bittersweetness"
        }
        else if (active_emos["surprise"] == 1) {
            emo = "Delight"
        }
        else if (active_emos["anger"] == 1) {
            emo = "Pride"
        }
        else {
            emo = "Joy"
        }
    }
    else if (active_emos["sadness"] == 1) {
        if (active_emos["surprise"] == 1) {
            emo = "Disappointment"
        }
        else if (active_emos["anger"] == 1) {
            emo = "Envy"
        }
        else {
            emo = "Sadness"
        }
    }
    else if (active_emos["surprise"] == 1) {
        if (active_emos["anger"] == 1) {
            emo = "Outrage"
        }
        else {
            emo = "Surprise"
        }
    }
    else if (active_emos["anger"] == 1) {
        emo = "Anger"
    }

    document.getElementById("emotion").innerHTML = "<b>" + emo + "</b>"
    document.getElementById("emotion").style.color = emo_colors[emo.toLowerCase()]

    // Polarize change
    let polarized = document.getElementById("flexSwitchCheckDefault").checked

    // Intensity change
    let weight = document.getElementById("weight").value
    for (const [key, value] of Object.entries(emo_colors)) {
        document.getElementById("img_"+key).style.opacity = 0.33
    }
    document.getElementById("img_"+emo.toLowerCase()).style.opacity = weight2opa[weight] 
    
    // Intensity change
    let spk = document.getElementById("spk").value

    if (polarized || spk != "0019") {
        document.getElementById("baseline-na-header").textContent = "(Not Supported)"
        //document.getElementById("baseline-na-header").style.color = "#FF3863"
    }
    else {
        document.getElementById("baseline-na-header").textContent = ""
    }

    // Intensity change
    let txt = document.getElementById("txt").value

    // Wave change
    let prefix = "emotion-simulation/assets/waves/"
    let prefix_baseline = "emotion-simulation/assets/waves_baseline/"
    if (weight == 1) {
        weight = "1.0"
    }
    let s = ""
    if (polarized == false) {
        s = "s=" + weight
    }
    else {
        s = "s=-" + weight
    }


    let wavepath = "model=rainbow" + "-" + "spk=" + spk + "-" + "emo=" + emo.toLowerCase() + "-" + s + "-" + "txt=" + txt + ".wav"
    let wavepath_baseline = "model=cloud" + "-" + "spk=" + spk + "-" + "emo=" + emo.toLowerCase() + "-" + s + "-" + "txt=" + txt + ".wav"

    document.getElementById("wave").src = prefix + wavepath
    document.getElementById("wave_baseline").src = prefix_baseline + wavepath_baseline

}