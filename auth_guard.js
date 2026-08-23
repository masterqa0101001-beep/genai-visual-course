// Auth Guard — include this in every content page
// Redirects to login.html if not authenticated
// Version check: invalidates old sessions when password changes
(function() {
    var AUTH_VERSION = '3';  // Bump this when password changes
    var auth = localStorage.getItem('genai_course_auth') || sessionStorage.getItem('genai_course_auth');
    var version = localStorage.getItem('genai_auth_version') || sessionStorage.getItem('genai_auth_version');
    if (auth !== 'authenticated' || version !== AUTH_VERSION) {
        localStorage.removeItem('genai_course_auth');
        sessionStorage.removeItem('genai_course_auth');
        localStorage.removeItem('genai_auth_version');
        sessionStorage.removeItem('genai_auth_version');
        window.location.href = 'login.html';
    }
})();
