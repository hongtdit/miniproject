    var sumPrice =0;
    var listPriceCart = JSON.parse(localStorage.getItem("market") || "[]");
    var listCart=document.getElementById("productCart");
function getListPrice() {
    var listPriceCart = JSON.parse(localStorage.getItem("market") || "[]");
       let data = `<tr>
           <td>Ảnh sản phẩm</td>
           <td>Sản phẩm</td>
           <td>Đơn giá</td>
           <td>Số lượng</td>
           <td>Thành tiền</td>
           <td>Hành động</td>
           </tr>
       `
       for(var i = 0; i < listPriceCart.length; i++) {
           console.log(listPriceCart[i]);
        data += `<tr>
        <td><img src="${listPriceCart[i].image}"></td>
        <td>${listPriceCart[i].title}</td>
           <td> ${listPriceCart[i].price}</td>
           <td>${listPriceCart[i].count}</td>
           <td>${parseInt(listPriceCart[i].price)*parseInt(listPriceCart[i].count)}</td>
           <td> <button onclick="del(${i})">Xóa</button></td>
           </tr>
       `
       listCart.innerHTML=data;
       sumPrice =sumPrice+(parseInt(listPriceCart[i].price)*parseInt(listPriceCart[i].count));
       }
       var price = document.getElementById('price');
       price.innerHTML =`${sumPrice} $`;
   }
   getListPrice();
   function del(i){
   if(listPriceCart.length>0){
    listPriceCart.splice(i,1);
    localStorage.setItem('market', JSON.stringify(listPriceCart));
    console.log(listPriceCart);
    getListPrice();
   }
   }