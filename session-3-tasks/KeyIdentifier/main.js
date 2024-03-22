const container = document.querySelector('.container');
function getKeynCode(event) {
  container.innerHTML = `
  <div class="result">
    <button class="button key">Press Key: ${event.key === " " ? 'Space' : event.key}</button> 
    <button class="button code">Press Code: ${event.code}</button>
  </div>`;
}

document.addEventListener("keydown", getKeynCode);