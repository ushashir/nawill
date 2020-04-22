document.getElementById('btn-RM').addEventListener('click', showMore);

function showMore(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'inc/readmore.html', true);

    xhr.onload = function(){
        if(this.status === 200) {
            document.getElementById('insertMore').innerHTML = this.responseText;
        } else if (this.status = 404 ) {
            document.getElementById('insertMore').innerHTML = 'Not Found';
        }
    }
   
    xhr.onerror = function () {
        console.log('Request Error....')
    }

    xhr.send();
}