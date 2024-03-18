
                                                                                        // HIDE THE FAQ QUESTION
function toggleAnswer(id) {
  var answer = document.getElementById(id);
  var toggleSign = document.getElementById('toggle' + id.charAt(id.length - 1));
  
  if (answer.style.display === 'block') {
    answer.style.display = 'none';
    toggleSign.textContent = '+';
  } else {
    answer.style.display = 'block';
    toggleSign.textContent = '-';
  }
}

                                                                                        // OPEN CHAT SUPPORT
function openChatSupport() {
  document.getElementById('chatSupportContainer').style.display = 'flex'; // Show chat
  document.getElementById('chat-icon').style.display = 'none'; // Hide icon
}

function closeChatSupport() {
  document.getElementById('chatSupportContainer').style.display = 'none'; // Hide chat
  document.getElementById('chat-icon').style.display = 'block'; // Show icon
}


                                                                                        //UPLOAD DOCUMENTS
function uploadDocument() {
  // Create a file input dynamically
  var fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.onchange = function(e) {
    // Handle the file upload process here
    // For demonstration, just log the file name
    var fileName = e.target.files[0].name;
    console.log("Uploaded file:", fileName);
    // You can call a function here to display the uploaded file in the chat
  };
  fileInput.click(); // Open the file dialog
}
                                                                                      // SEND A MESSAGE
function setupChat() {
  // Event listener for the input field to detect Enter key press
  var input = document.getElementById('chatInput');
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default action to avoid form submission
      sendMessage();
    }
  });
}

function sendMessage() {
  var input = document.getElementById('chatInput');
  var message = input.value.trim();
  if (message) {
    var chatMessages = document.getElementById('chatMessages');
    var currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    var msgDiv = document.createElement('div');
    msgDiv.className = 'message user-message'; // Use your CSS class for user messages
    msgDiv.innerHTML = `
      <div class="message-text">${message}</div>
      <div class="message-time">${currentTime}</div>
    `;

    chatMessages.appendChild(msgDiv); // Append new message at the end
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the latest message
  }
  input.value = ''; // Clear input after sending
}



// Call setupChat when the page loads to set up the event listener
window.onload = setupChat;





                                                                                  //SEARCH THE QUESTION

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.search-bar input[type="search"]');
  const searchResultsContainer = document.createElement('div');
  searchResultsContainer.className = 'search-results-container';
  searchInput.parentNode.insertBefore(searchResultsContainer, searchInput.nextSibling);

  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    searchResultsContainer.innerHTML = ''; // Clear previous results
    if (searchTerm) {
      searchResultsContainer.style.display = 'block';
      searchInCurrentFAQ(searchTerm);
      searchInExternalFAQ(searchTerm, 'help view all.html');
    } else {
      searchResultsContainer.style.display = 'none';
    }
  });

  function searchInCurrentFAQ(term) {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const questionText = item.querySelector('.faq-question h4').textContent.toLowerCase();
      if (questionText.includes(term)) {
        displayResult(item.querySelector('.faq-question h4').textContent, () => {
          item.querySelector('.faq-question').click();
          item.scrollIntoView();
        });
      }
    });
  }

  function searchInExternalFAQ(term, filePath) {
    fetch(filePath).then(response => response.text()).then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const faqItems = doc.querySelectorAll('.faq-item');
      faqItems.forEach(item => {
        const questionText = item.querySelector('.faq-question h4').textContent.toLowerCase();
        if (questionText.includes(term)) {
          displayResult(item.querySelector('.faq-question h4').textContent, () => {
            window.location.href = filePath + '#' + item.querySelector('.faq-question').getAttribute('onclick').split("'")[1];
          });
        }
      });
    }).catch(console.error);
  }

  function displayResult(text, clickHandler) {
    const resultItem = document.createElement('div');
    resultItem.className = 'search-result-item';
    resultItem.textContent = text;
    resultItem.onclick = clickHandler;
    searchResultsContainer.appendChild(resultItem);
  }
});
