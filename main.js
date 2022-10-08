const computeVolumeButton = document.getElementById("compute-volume");
computeVolumeButton.addEventListener("click", () => {
    const dose = getDoseValue();
    const proof = getProofValue();
    const volume = (dose * 100) / 0.8 / proof;
    setVolumeValue(volume.toFixed(2));
});
const computeDoseButton = document.getElementById("compute-dose");
computeDoseButton.addEventListener("click", () => {
    const volume = getVolumeValue();
    const proof = getProofValue();
    const dose = (volume / 100) * 0.8 * proof;
    setDoseValue(dose.toFixed(2));
});

const proofInput = document.getElementById("proof");
const volumeInput = document.getElementById("volume");
const doseInput = document.getElementById("dose");

function getProofValue() {
    return parseFloat(proofInput.value);
}

function getVolumeValue() {
    return parseFloat(volumeInput.value);
}

function setVolumeValue(value) {
    volumeInput.value = value;
}

function getDoseValue() {
    return parseFloat(doseInput.value);
}

function setDoseValue(value) {
    doseInput.value = value;
}
