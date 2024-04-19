
function salvar(event){
    event.preventDefault()
    const form = document.querySelector('input[name="form"]').value
    console.log(form)
    const div = document.querySelector('div');
    div.textContent = form;
  
}
