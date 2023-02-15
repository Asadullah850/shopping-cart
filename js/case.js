
document.getElementById('btn-case-plus').addEventListener('click',function(){
    let id =  updatePhoneNumber (true, 'case-number-field');
    let phonePrice = document.getElementById('case-total');
    let phnPriceInnerText = phonePrice.innerText;
    let parse = parseInt(phnPriceInnerText);
    parse = 59 * id;
    phonePrice.innerText = parse;
    calculetSubTotal();
    tax();
    finalTotal()

 })
 document.getElementById('btn-case-minus').addEventListener('click',function(){
     let id = updatePhoneNumber (false, 'case-number-field');
     let phonePrice = document.getElementById('case-total');
     let phnPriceInnerText = phonePrice.innerText;
     let parse = parseInt(phnPriceInnerText);
   
     parse = 59 * id;
     phonePrice.innerText = parse;
     calculetSubTotal();
     tax();
     finalTotal()
 })
 