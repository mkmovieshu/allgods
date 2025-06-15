function toggleSection(tab, deity, section) {
  const contentDiv = document.getElementById(section);
  if (contentDiv.style.display === 'block') {
    contentDiv.style.display = 'none';
    return;
  }

  if (section === 'videos') {
    fetch(`content/${deity}/videos.json`)
      .then(res => res.json())
      .then(videos => {
        let html = `<div class="video-container"><iframe width="100%" height="200" src="${videos[0]}" frameborder="0"></iframe></div>`;
        contentDiv.innerHTML = html;
        contentDiv.style.display = 'block';
      });
  } else {
    fetch(`content/${deity}/${section}.txt`)
      .then(res => res.text())
      .then(data => {
        contentDiv.innerHTML = `<p>${data}</p>`;
        contentDiv.style.display = 'block';
      });
  }
}
