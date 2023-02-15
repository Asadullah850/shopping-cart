function calculetSubTotal() {
    let mainsubid = document.getElementById('sub-total');
    let caseTotal = stringToNumber('case-total');
    let phoneTotl = stringToNumber('phone-total');
    let subTotalCalculet = phoneTotl + caseTotal;
    mainsubid.innerText = subTotalCalculet;
    return subTotalCalculet;
}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
   let id =  updatePhoneNumber (true, 'phone-number-field');
   let phonePrice = document.getElementById('phone-total');
   let phnPriceInnerText = phonePrice.innerText;
   let parse = parseInt(phnPriceInnerText);
   parse = 1219 * id;
   phonePrice.innerText = parse;
   calculetSubTotal();
   tax();
   finalTotal();
})
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    let id = updatePhoneNumber (false, 'phone-number-field');
    let phonePrice = document.getElementById('phone-total');
    let phnPriceInnerText = phonePrice.innerText;
    let parse = parseInt(phnPriceInnerText);
    parse = 1219 * id;
    phonePrice.innerText = parse;
    calculetSubTotal();
    tax();

    finalTotal();
})
