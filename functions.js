var price = {

    btn1: {
        prix: 78.6,
        id: "days1",
        vd: "days11"
    },
    btn2: {
        prix: 98.6,
        id: "days2",
        vd: "days12"
    },
    btn3: {
        prix: 72,
        id: "days3",
        vd: "days13"
    }
}

function price_car(pr) {
    var result = 0
    for (var i in price) {
        if (pr === i) {
            for (var j in price[i]) {
                var idd = price[i].id
                var vdd = price[i].vd
                result = price[i].prix * $('#' + idd).val()
            }
        }
    }
    $('#' + vdd).append('<h1>YOUR TOTAL IS <span id="res" ></span></h1>')
    $("#res").html(result + " TND")
    $('#' + vdd).append('<h2> the car will be delievred to your adress </h2>')
}

var obj = {}
function getMessage(event){
    event.preventDefault()
    obj.name=$("#name1").val()
    obj.mail=$("#mail1").val()
    obj.message=$("#message1").val()
    console.log(obj)
}

