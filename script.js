function executar (){

    var n= document.getElementById('txn')
    var tab= document.getElementById('txtab')

    if (n.value.length == 0){
        window.alert('Digite um número!')
    } else {
        var num= Number(n.value)

        tab.innerHTML = ''

        for (var i = 0; i <= 10; i++) {
            var resultadoMultiplo = num * i;
            var item = document.createElement("option")
            item.text = `${num} x ${i} = ${resultadoMultiplo}`
            tab.appendChild(item)
    }
    }
}