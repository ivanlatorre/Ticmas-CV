document.getElementById('primary').addEventListener('click',function(){
    document.getElementById('izquierda').style.backgroundColor = '#0d6efd';
});
document.getElementById('secondary').addEventListener('click',function(){
    document.getElementById('izquierda').style.backgroundColor = '#6c757d';
});
document.getElementById('success').addEventListener('click',function(){
    document.getElementById('izquierda').style.backgroundColor = '#198754';
});
document.getElementById('danger').addEventListener('click',function(){
    document.getElementById('izquierda').style.backgroundColor = '#dc3545';
});
document.getElementById('warning').addEventListener('click',function(){
    document.getElementById('izquierda').style.backgroundColor = '#ffc107';
});
document.getElementById('info').addEventListener('click',function(){
    document.getElementById('izquierda').style.backgroundColor = '#0dcaf0';
});
document.getElementById('light').addEventListener('click',function(){
    document.getElementById('izquierda').style.backgroundColor = '#f8f9fa';
    document.getElementById("nombre").style.color = 'black';
    document.getElementById("infoTitulo").style.color = 'black';
    document.getElementsByClassName("texto")[0].style.color = 'black';
    document.getElementsByClassName("texto")[1].style.color = 'black';
    document.getElementsByClassName("texto")[2].style.color = 'black';
    document.getElementsByClassName("texto")[3].style.color = 'black';
    document.getElementsByClassName("texto")[4].style.color = 'black';
    document.getElementsByClassName("texto")[5].style.color = 'black';
});
document.getElementById('dark').addEventListener('click',function(){
    document.getElementById('izquierda').style.backgroundColor = '#212529';
});
