const container = document.querySelector('.container');
function getKeynCode(event) {
  container.innerHTML = `
  <div class="result">
    <button class="button key">Press Key: ${event.key === " " ? 'Space' : event.key}</button> 
    <button class="button code">Press Code: ${event.code}</button>
  </div>`;
  /* soundHtml(event); */
  deleteExistingAudio();
  const audio = soundHtml(event);
  container.insertAdjacentElement("beforebegin", audio);
  audio.play();
}

function deleteExistingAudio() {
  document.querySelector("audio")?.remove();
}


function soundHtml(event) {
  let keyCode = event.code;
  let keyEvent = event.key;
  let audioDiv = document.createElement('audio');
  audioDiv.setAttribute('id', keyCode);
  audioDiv.setAttribute('src', `./keys-code/key-${keyEvent === " " ? 'space-bar' : keyEvent}.m4a`);
 /*  container.appendChild(audioDiv);
  playSound(keyCode); */
  return audioDiv;
}

function playSound(soundId) {
  const sound = document.getElementById(soundId);
  sound.play();
}

document.addEventListener("keyup", getKeynCode);