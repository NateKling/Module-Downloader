chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
    chrome.action.setBadgeText({
        text: "Rec",
      });
      
  });
  
  chrome.action.onClicked.addListener(async (tab) => {
    
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
    
  });