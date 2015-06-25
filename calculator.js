var calculator = function() {

    var calciOuterDiv = document.createElement('div');
    calciOuterDiv.id = 'calciOuterDiv';
    var calciInputText = document.createElement('input');
    calciInputText.type = 'text';
    calciInputText.className = 'numberField';
    calciOuterDiv.appendChild(calciInputText);
    var calciButtonContainer = document.createElement('div');
    calciButtonContainer.className = 'calciButtonDiv';

    var inputStyle = document.createElement('div');

    var clearButton = this.buttonCreation({
        textValue: "c",
        value: "clear"
    }, 'clearButtonStyle');
    inputStyle.appendChild(clearButton);
    calciButtonContainer.appendChild(inputStyle);

    //append buttons to the calculator.
    for (var i = 0; i < this.calciData.data.length; i++) {
        var btnclassName = "calciButton";
        var calciButton = this.buttonCreation(this.calciData.data[i], btnclassName);
        calciButtonContainer.appendChild(calciButton);
    }
    calciOuterDiv.appendChild(calciButtonContainer);

    //button actions after the window has loaded 
    window.onload = function() {
        this.bindEvents();
    }.bind(this);

    //return the calculator component.
    return calciOuterDiv;

};
//calculator data 
calculator.prototype.calciData = {
        data: [{
                textValue: "9",
                value: "9",
                id: "9"
            }, {
                textValue: "8",
                value: "8",
                id: "8"
            }, {
                textValue: "7",
                value: "7",
                id: "7"
            }, {
                textValue: "+",
                value: "+",
                id: "plus"
            }, {
                textValue: "6",
                value: "6",
                id: "6"
            }, {
                textValue: "5",
                value: "5",
                id: "5"
            }, {
                textValue: "4",
                value: "4",
                id: "4"
            }, {
                textValue: "-",
                value: "-",
                id: "sub"
            }, {
                textValue: "3",
                value: "3",
                id: "3"
            }, {
                textValue: "2",
                value: "2",
                id: "2"
            }, {
                textValue: "1",
                value: "1",
                id: "1"
            }, {
                textValue: "x",
                value: "*",
                id: "mul"
            }, {
                textValue: "0",
                value: "0",
                id: "0"
            }, {
                textValue: ".",
                value: ".",
                id: "dot"
            }, {
                textValue: "/",
                value: "/",
                id: "div"
            }, {
                textValue: "=",
                value: "=",
                id: "eq"
            },



        ]
    }

//button creation.
calculator.prototype.buttonCreation = function (data, btnclassName) {
            var calciButton = document.createElement('button');
            calciButton.className = btnclassName;
            if (data.textValue === '=') {
                calciButton.style.backgroundColor = 'rgb(250, 159, 103)';
                calciButton.style.borderColor = 'rgb(250, 159, 103)';
            }

            var text = document.createTextNode(data.textValue);
            calciButton.value = data.value;
            calciButton.appendChild(text);
            return calciButton;
        }

//fire events on div click..
calculator.prototype.bindEvents = function() {
    var claciButtonDivElems = document.getElementsByClassName('calciButtonDiv');

    for (var i = 0; i < claciButtonDivElems.length; i++) {
        claciButtonDivElems[i].addEventListener('click', function(j) {
            return function(event) {
                var event = event.target;
                console.log(event);
                var selectedValue = event.value;
                if (selectedValue == '=') {

                    try {
                        document.getElementsByClassName('numberField')[j].value = eval(document.getElementsByClassName('numberField')[j].value);

                    } catch (e) {
                        alert('Enter only numbers to perform calculation.');
                        document.getElementsByClassName('numberField')[j].value = "";
                    }

                } else if (selectedValue == 'clear') {
                    document.getElementsByClassName('numberField')[j].value = "";
                } else {
                    document.getElementsByClassName('numberField')[j].value = document.getElementsByClassName('numberField')[j].value + selectedValue;
                }
                console.log("number field is.." + document.getElementsByClassName('numberField')[j].value);
            }
        }(i), false);
    }
}


// obj = new A


// obj.method()

// method.bind(obj, i,)
