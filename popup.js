document.getElementById('get-html').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => document.documentElement.outerHTML
  }, (results) => {
    document.getElementById('output').textContent = results[0].result;

  });
});

