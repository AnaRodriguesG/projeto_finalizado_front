function logout() {
    // Remove o token do localStorage ou sessionStorage
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('nomeUsuario');
    
    // Redireciona para a página de login
    window.location.href = 'Login.html';
}

function logout_2() {
    // Remove o token do localStorage ou sessionStorage
    localStorage.removeItem('usuarioLogado');
    localStorage.removeItem('nomeUsuario');
    
    // Redireciona para a página de login
    window.location.href = 'Cadastro.html';
}