chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'downloadImage' && message.imageUrl) {
    const imageUrl = message.imageUrl;

    chrome.downloads.download({
      url: imageUrl,
      filename: `downloaded-image.jpg`, // You can make this dynamic if needed
      conflictAction: 'uniquify'
    }, (downloadId) => {
      console.log('Download started with ID:', downloadId);
    });
  }
});
