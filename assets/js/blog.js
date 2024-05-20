document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  
    if (blogPosts.length === 0) {
      postsContainer.innerHTML = '<p>No blog posts available.</p>';
      return;
    }
  
    blogPosts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <p><strong>Author:</strong> ${post.username}</p>
      `;
      postsContainer.appendChild(postElement);
    });
  
    document.getElementById('modeToggle').addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const modeToggle = document.getElementById('modeToggle');
      if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = '🌜';
      } else {
        modeToggle.textContent = '🌞';
      }
    });
  
    document.getElementById('backButton').addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  });
  