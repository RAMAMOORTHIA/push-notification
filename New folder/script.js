document.addEventListener('DOMContentLoaded', function() {
    let notifications = document.querySelector('.notifications');
  
    function createToast(type, title, text) {
      // Create a new toast element
      let newToast = document.createElement('div');
      newToast.classList.add('toast', type);
  
      // Icon element
      let iconElement = document.createElement('i');
      iconElement.classList.add('fa-solid');
      if (type === 'success') {
        iconElement.classList.add('fa-circle-check');
      } else if (type === 'error') {
        iconElement.classList.add('fa-exclamation-circle');
      } else if (type === 'warning') {
        iconElement.classList.add('fa-exclamation-triangle');
      } else if (type === 'info') {
        iconElement.classList.add('fa-info-circle');
      }
  
      // Title and text content
      let contentDiv = document.createElement('div');
      contentDiv.classList.add('content');
      let titleDiv = document.createElement('div');
      titleDiv.classList.add('title');
      titleDiv.textContent = title;
      let textSpan = document.createElement('span');
      textSpan.textContent = text;
      
      // Close button
      let closeButton = document.createElement('i');
      closeButton.classList.add('fa-solid', 'fa-xmark');
      closeButton.onclick = function() {
        newToast.remove();
      };
  
      // Constructing the toast structure
      contentDiv.appendChild(titleDiv);
      contentDiv.appendChild(textSpan);
      newToast.appendChild(iconElement);
      newToast.appendChild(contentDiv);
      newToast.appendChild(closeButton);
  
      // Append the toast to the notifications container
      notifications.appendChild(newToast);
  
      // Auto remove after 5 seconds
      setTimeout(function() {
        newToast.remove();
      }, 5000);
    }
  
    // Event handlers for each button
    document.getElementById('success').onclick = function() {
      createToast('success', 'Success', 'This is a success toast.');
    };
  
    document.getElementById('error').onclick = function() {
      createToast('error', 'Error', 'This is an error toast.');
    };
  
    document.getElementById('warning').onclick = function() {
      createToast('warning', 'Warning', 'This is a warning toast.');
    };
  
    document.getElementById('info').onclick = function() {
      createToast('info', 'Info', 'This is an info toast.');
    };
  
  });