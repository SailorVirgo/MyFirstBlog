document.getElementById('blogForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();
  
  if (!username || !title || !content) {
    alert('Please fill out all fields.');
    return;
  }
  
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  const newPost = { username, title, content };
  blogPosts.push(newPost);
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  
  window.location.href = 'blog.html';
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
