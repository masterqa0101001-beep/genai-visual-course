// Auth Guard — include this in every content page
// Redirects to login.html if not authenticated
(function() {
    var auth = localStorage.getItem('genai_course_auth') || sessionStorage.getItem('genai_course_auth');
    if (auth !== 'authenticated') {
        window.location.href = 'login.html';
    }
})();
