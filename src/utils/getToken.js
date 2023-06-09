export default function getToken () {
    const { token } = localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')) : '';
    return token;
} 