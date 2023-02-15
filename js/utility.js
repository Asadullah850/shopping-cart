function updatePhoneNumber (isIncrease, id) {
    let inputFieldId = document.getElementById(id);

    let string = inputFieldId.value;
    let pars;

    if (isIncrease) {
        pars = parseInt(string)  + 1;
    }

    else{
        pars = parseInt(string)  - 1;
    }
    inputFieldId.value = pars;
    
    return pars;
   //  console.log(string);
}

function stringToNumber(elemrntId) {
    let id = document.getElementById(elemrntId);
    let idInnerText = id.innerText;
    let parseIn = parseInt(idInnerText);
    return parseIn;
}

function tax() {
    let getIdSub = document.getElementById('sub-total')
    let setSubinnerText = getIdSub.innerText; 
    let parsSubTotalNumber = parseFloat(setSubinnerText);
    let taxCalulet = (parseFloat(parsSubTotalNumber) * 0.04).toFixed(2);

    setValue('tax-amount',taxCalulet)
}
function setValue(id,newValue) {
    let getIdTax = document.getElementById(id)
    let setTaxinnerText = getIdTax.innerText; 
    let parsTexTotalNumber = parseFloat(setTaxinnerText);
    getIdTax.innerText = newValue;
}

function finalTotal() {
    let subTotalId = stringToNumber('sub-total');
    let taxlId = stringToNumber('tax-amount');
    let totalPayAmount = subTotalId - taxlId;
    setValue('final-total',totalPayAmount)
}

document.getElementById('button-chaeck-out').addEventListener('click',function(){
    // document.getElementById('calculation-BOX')
    let p = document.createElement("h4");
        p.innerText = 'Thank You For Buying Our Product';
    document.getElementById('buying-massages').appendChild(p).style.backgroundColor = '#D0B8FF',this.style.color = 'red';
        // document.getElementById(id).setAttribute("disabled", true);
        document.getElementById('button-chaeck-out').setAttribute('disabled',true);
})