function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    showAllTabs : document.querySelector("#showAllTabs").checked 
  });
}

function restoreOptions() {

  function setShowAllTabs(result) {
    document.querySelector("#showAllTabs").checked = result.showAllTabs || true;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var showAllTabs = browser.storage.local.get("showAllTabs");
  showAllTabs.then(setShowAllTabs, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

