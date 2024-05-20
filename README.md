# MyFirstBlog
My Blog
Description
This project is a personal blog website where users can input and view blog posts. The website includes a landing page with a form for creating new posts and a posts page for viewing all the blog entries. Users can also switch between light and dark mode.

User Story
As a marketing student, I want a personal blog so that I can showcase my thoughts and experiences.

Acceptance Criteria
Landing Page:

Contains a form with labels and inputs for username, blog title, and blog content.
Submitting the form stores the blog post data to localStorage.
After form submission, the user is redirected to the posts page.
If the form is incomplete (missing username, title, or content), a message prompts the user to complete the form.
Posts Page:

Displays a list of blog posts pulled from localStorage.
Each blog entry shows the title, content, and author.
Includes a header with a light mode/dark mode toggle and a "Back" button.
Light mode/dark mode toggle updates the page content's styles to reflect the selection.
"Back" button redirects the user to the landing page for inputting more blog entries.
Footer includes a link to the developer's portfolio.
LocalStorage:

Blog posts are stored as a JSON array, with each object containing the author's username, post title, and post content.

File Structure

my-blog
├── assets
│   ├── css
│   │   ├── blog.css
│   │   ├── form.css
│   │   └── styles.css
│   └── js
│       ├── blog.js
│       └── form.js
├── index.html
├── blog.html
└── README.md


Installation

1. Clone the repository:

git clone https://github.com/yourusername/my-blog.git


2. Navigate to the project directory:

cd my-blog

3. Open index.html in your browser to start the application.


Usage

On the landing page (index.html), fill in the form with your username, blog title, and content.
Click "Submit" to save the blog post and be redirected to the posts page (blog.html).
On the posts page, view all submitted blog posts.
Use the sun/moon emoji button to toggle between light and dark mode.
Click the "Back" button to return to the landing page and add more entries.
In the footer, there's a link to the developer's portfolio.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
License
This project is licensed under the MIT License.



