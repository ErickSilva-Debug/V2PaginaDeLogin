const handleSubmit = (e) => {
  e.preventDefault();


  switch (password) {
    case 'louvor':
      window.location.href = 'https://www.youtube.com/watch?v=td6ylTIEQVw'; 
    case 'Jesus':
      window.location.href = 'https://www.youtube.com/watch?v=pgzReOzQgNI'; 
      break;
    case 'loira':
      window.location.href = 'https://www.youtube.com/watch?v=AzHSVEDWpp4&list=LL&index=4'; 
      break;
    case 'dance':
      window.location.href = 'https://www.youtube.com/watch?v=uFmqAQarRdM';
      break;
    case 'dragon':
      window.location.href = 'https://www.youtube.com/watch?v=SuX1SXRzQy4'; 
      break;
    case 'senha': 
      handleLogin(); 
      break;
    default:
      alert('Senha incorreta!');
      return; 
  }
};
