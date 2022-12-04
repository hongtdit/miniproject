// function boollogout() {
//     let setLogout = localStorage.getItem(`boollogout`);
//     let newBool = JSON.parse(setLogout);
//     if (setLogout == false){
//         window.location.href = "./index.html" ;
//     } else {
//         setLogout = false
//         window.location.href = "./index.html";
//     }

// }



let checkLogin = localStorage.getItem(`boolLogin`);
if(checkLogin == `true`){
    let getIdUser = document.getElementById(`user`);
    let getIndexLogin = Number(localStorage.getItem(`indexLogin`));
    let arrUser = JSON.parse(localStorage.getItem(`information`));
    let userName = arrUser[getIndexLogin].username
    getIdUser.innerHTML = userName;
}
// console.log(checkLogin); 



let data = [{
    
        image: "./img/image/oto3.jpg",
        title: "Oto",
        price: "75$"
    }, 
    {
        image: "./img/image/oto4.jpg",
        title: "Oto",
        price: "69$"
    }, 
    {
        image: "./img/image/oto5.jpg",
        title: "Oto",
        price: "102$"
    }, 
    {
        image: "./img/image/oto2.jpg",
        title: "Oto",
        price: "100$"
    },  
    {
        image: "./img/image/oto5.jpg",
        title: "Oto",
        price: "102$"
    },  
    {
        image: "./img/image/oto7.jpg",
        title: "Oto",
        price: "60$"
    }, 
    {
        image: "./img/image/oto2.jpg",
        title: "Oto",
        price: "100$"
    },  
    {
        image: "./img/image/oto4.jpg",
        title: "Oto",
        price: "69$"
    }, 
{
    image: "./img/jeep6.jpg",
    title: "Oto",
    price: "65$"
}, 
{
    image: "./img/jeep1.jpg",
    title: "Oto",
    price: "60$"
}, 
{
    image: "./img/jeep2.jpg",
    title: "Oto-ss2",
    price: "60$"
}, 
{
    image: "./img/jeep3.jpg",
    title: "Oto",
    price: "105$"
},
{
    image: "./img/jeep1.jpg",
    title: "Oto",
    price: "105$"
}, 
{
    image: "./img/jeep5.jpg",
    title: "Oto ",
    price: "75$"
}, 
{
    image: "./img/jeep6.jpg",
    title: "Oto",
    price: "100$"
}, 
{
    image: "./img/jeep6.jpg",
    title: "Oto",
    price: "65$"
}, 
{
    image: "./img/image/oto3.jpg",
    title: "Oto",
    price: "75$"
}, 
{
    image: "./img/image/oto4.jpg",
    title: "Oto",
    price: "69$"
}, 
{
    image: "./img/image/oto5.jpg",
    title: "Oto",
    price: "102$"
}, 
{
    image: "./img/image/oto6.jpg",
    title: "Oto",
    price: "85$"
}, 
{
    image: "./img/image/oto7.jpg",
    title: "Oto",
    price: "60$"
}, 
{
    image: "./img/image/oto8.jpg",
    title: "Oto",
    price: "75$"
}, 
{
    image: "./img/image/oto9.jpg",
    title: "Oto",
    price: "43$"
}, 
{
    image: "./img/image/oto10.jpg",
    title: "Oto",
    price: "95$"
}, 
{
    image: "./img/image/oto11.jpg",
    title: "Moto ",
    price: "85$"
}, 
{
    image: "./img/image/oto12.jpg",
    title: "Oto",
    price: "65$"
}, 
{
    image: "./img/image/oto13.jpg",
    title: "Oto",
    price: "55$"
}, 
{
    image: "./img/image/oto14.jpg",
    title: "Moto",
    price: "75$"
}, 
{
    image: "./img/image/oto15.jpg",
    title: "Oto",
    price: "85$"
}, 
{
    image: "./img/image/oto16.jpg",
    title: "Moto ",
    price: "65$"
}, 
{
    image: "./img/image/oto17.jpg",
    title: "Oto ",
    price: "66$"
},
{
    image: "./img/image/oto18.jpg",
    title: "Oto",
    price: "88$"
}
]
// show toàn bộ list sản phẩm .
function showListProduct() {
    let result = "";
    let showCart = document.getElementById("showCart");
    for (let i = 0; i < data.length; i++) {
        result += `
        <div class="item1">
            <div class="card-imge">
                <img src=${data[i].image} alt="hình ảnh">
            </div>
            <div><h3>${data[i].title}</h3></div>
            <div class="card-display">
                <div class="card-icon"><i class="fa-regular fa-heart"></i></div>
                <div class="card-price">${data[i].price}</div>
            </div>
            <div class="card-onclick">
                <div class="click-box1">Thêm vào giỏ hàng</div>
                <div class="click-box2">Xem chi tiết</div>
            </div>
        </div>
      `
    }
    showCart.innerHTML = result;
}
showListProduct();
// search theo tên sản phẩm


function search() {
    let inputValue = document.getElementById("search").value.toLocaleLowerCase();
    console.log(inputValue);
    let showCart = document.getElementById("showCart");
    let result = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i].title.toLocaleLowerCase().includes(inputValue)) {
            result += `
            <div class="item1">
                <div class="card-imge">
                    <img src=${data[i].image} alt="hình ảnh">
                </div>
                <div><h3>${data[i].title}</h3></div>
                <div class="card-display">
                    <div class="card-icon"><i class="fa-regular fa-heart"></i></div>
                    <div class="card-price">${data[i].price}</div>
                </div>
                <div class="card-onclick">
                    <div class="click-box1">Thêm vào giỏ hàng</div>
                    <div class="click-box2">Xem chi tiết</div>
                </div>
            </div>
          `
       
    }
}
    showCart.innerHTML =result;
   
}
