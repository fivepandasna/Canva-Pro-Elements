document.addEventListener('click', async (event) => {
  event.preventDefault();
  
  // Find the clicked element
  const target = event.target;

  // Traverse upwards to find the nearest `img` or element with `src`
  let srcElement = null;
  let parent = target;

  while (parent) {
    if (parent.tagName === 'IMG' || parent.getAttribute('src')) {
      srcElement = parent;
      break;
    }
    parent = parent.parentElement;
  }

  if (srcElement) {
    const src = srcElement.getAttribute('src');

    if (src) {
      console.log('Image URL:', src);

      // Send the image src to the background script to trigger a download
      chrome.runtime.sendMessage({ action: 'downloadImage', imageUrl: src });
    } else {
      console.log('No image source found.');
    }
  } else {
    console.log('No image element found.');
  }
});
