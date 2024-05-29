
document.getElementById('saveBtn').addEventListener('click', () => {
    alert("clicked4");
    
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files : [ "content.js" ]
        });
    });
    
  

  });
