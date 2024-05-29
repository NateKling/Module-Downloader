function saveHTMLTextAndHeaders() {
    // Extract all text
   
    const bodyText = document.body.innerText;
    alert(bodyText);
    // Extract all headers
    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    alert(headers);
    let headersText = '';
    headers.forEach(header => {
      headersText += header.innerText + '\n';
    });
    
    // Save the data
    const data = {
      bodyText: bodyText,
      headersText: headersText,
      url: window.location.href,
      timestamp: new Date().toISOString()
    };
    /*
    chrome.storage.local.set({ 'pageData': data }, () => {
      console.log('Data saved');
    });
    */
  }
  
  saveHTMLTextAndHeaders();