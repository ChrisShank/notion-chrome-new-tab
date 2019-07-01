// Get the current tab
chrome.tabs.getCurrent(function(tab) {
  // Update the current tab so it redirects to notion.so and is highlighted
  chrome.tabs.update(tab.id, {
    url: "https://notion.so",
    highlighted: true
  });
});
