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
        id: 0,
        image: "./img/image/oto3.jpg",
        title: "Oto",
        price: "75$",
        count:1,
        love:true
    }, 
    {id: 1,
        count:1,
        image: "./img/image/oto4.jpg",
        title: "Oto",
        price: "69$",
        love:false
    }, 
    {   id: 2,
        count:1,
        image: "./img/image/oto5.jpg",
        title: "Oto",
        price: "102$",
        love:false
    }, 
    {   id: 3,
        count:1,
        image: "./img/image/oto2.jpg",
        title: "Oto",
        price: "100$",
        love:false
    },  
    {   id: 4,
        count:1,
        image: "./img/image/oto5.jpg",
        title: "Oto",
        price: "102$",
        love:false
    },  
    {   id: 5,
        count:1,
        image: "./img/image/oto7.jpg",
        title: "Oto",
        price: "60$",
        love:false
    }, 
    {   id: 6,
        count:1,
        image: "./img/image/oto2.jpg",
        title: "Oto",
        price: "100$",
        love:false
    },  
    {   id: 7,
        count:1,
        image: "./img/image/oto4.jpg",
        title: "Oto",
        price: "69$",
        love:false
    }, 
{   id: 8,
    count:1,
    image: "./img/jeep6.jpg",
    title: "Oto",
    price: "65$",
        love:false
}, 
{   id: 9,
    count:1,
    image: "./img/jeep1.jpg",
    title: "Oto",
    price: "60$",
        love:false
}, 
{   id: 10,
    count:1,
    image: "./img/jeep2.jpg",
    title: "Oto-ss2",
    price: "60$",
        love:false
}, 
{   id: 11,
    count:1,
    image: "./img/jeep3.jpg",
    title: "Oto",
    price: "105$",
        love:false
},
{   id: 12,
    count:1,
    image: "./img/jeep1.jpg",
    title: "Oto",
    price: "105$",
        love:false
}, 
{    id: 13,
    count:1,
    image: "./img/jeep5.jpg",
    title: "Oto ",
    price: "75$",
        love:false
}, 
{   id: 14,
    count:1,
    image: "./img/jeep6.jpg",
    title: "Oto",
    price: "100$",
        love:false
}, 
{   id: 15,
    count:1,
    image: "./img/jeep6.jpg",
    title: "Oto",
    price: "65$",
        love:false
}, 
{   id: 16,
    count:1,
    image: "./img/image/oto3.jpg",
    title: "Oto",
    price: "75$",
        love:false
}, 
{   id: 17,
    count:1,
    image: "./img/image/oto4.jpg",
    title: "Oto",
    price: "69$",
        love:false
}, 
{   id: 18,
    count:1,
    image: "./img/image/oto5.jpg",
    title: "Oto",
    price: "102$",
        love:false
}, 
{   id: 19,
    count:1,
    image: "./img/image/oto6.jpg",
    title: "Oto",
    price: "85$",
        love:false
}, 
{   id: 20,
    count:1,
    image: "./img/image/oto7.jpg",
    title: "Oto",
    price: "60$",
        love:false
}, 
{   id: 21,
    count:1,
    image: "./img/image/oto8.jpg",
    title: "Oto",
    price: "75$",
        love:false
}, 
{   id: 22,
    count:1,
    image: "./img/image/oto9.jpg",
    title: "Oto",
    price: "43$",
        love:false
}, 
{   id: 23,
    count:1,
    image: "./img/image/oto10.jpg",
    title: "Oto",
    price: "95$",
        love:false
}, 
{   id: 24,
    count:1,
    image: "./img/image/oto11.jpg",
    title: "Moto ",
    price: "85$",
        love:false
}, 
{   id: 25,
    count:1,
    image: "./img/image/oto12.jpg",
    title: "Oto",
    price: "65$",
        love:false
}, 
{   id: 26,
    count:1,
    image: "./img/image/oto13.jpg",
    title: "Oto",
    price: "55$",
        love:false
}, 
{   id: 27,
    count:1,
    image: "./img/image/oto14.jpg",
    title: "Moto",
    price: "75$",
        love:false
}, 
{id: 28,
    count:1,
    image: "./img/image/oto15.jpg",
    title: "Oto",
    price: "85$",
        love:false
}, 
{id: 29,
    count:1,
    image: "./img/image/oto16.jpg",
    title: "Moto ",
    price: "65$",
        love:false
}, 
{id: 30,
    count:1,
    image: "./img/image/oto17.jpg",
    title: "Oto ",
    price: "66$",
        love:false
},
{id: 31,
    count:1,
    image: "./img/image/oto18.jpg",
    title: "Oto",
    price: "88$",
        love:false
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
                <div class="card-icon"><i class="fa-regular fa-heart" id="heart${i}" onclick="setHeart(${i})"></i></div>
                <div class="card-price">${data[i].price}</div>
            </div>
            <div class="card-onclick">
                <div class="click-box1" onclick="addProduct(${i})">Thêm vào giỏ hàng</div>
                <div class="click-box2">Xem chi tiết</div>
            </div>
        </div>
      `
    }
    
    showCart.innerHTML = result;
    for (let i = 0; i < data.length; i++) {
        if(data[i].love===true)
            {        
                var heart = document.getElementById(`heart${i}`);
                heart.style.color = "red";
            }
    }
}
showListProduct();
// search theo tên sản phẩm
function setHeart(i){
    data[i].love=!data[i].love;
    showListProduct(); 
}

function search() {
    let inputValue = document.getElementById("search").value.toLocaleLowerCase();
    console.log(inputValue);
    let showCart = document.getElementById("showCart");
    let result = "";
   var resultSearch = data.filter(value=>{
    return value.title.toLowerCase().includes(inputValue.toLowerCase());
   } )
 
    console.log(resultSearch);
    for (let i = 0; i < resultSearch.length; i++) {
        result += `
        <div class="item1">
            <div class="card-imge">
                <img src=${resultSearch[i].image} alt="hình ảnh">
            </div>
            <div><h3>${resultSearch[i].title}</h3></div>
            <div class="card-display">
                <div class="card-icon"><i class="fa-regular fa-heart"></i></div>
                <div class="card-price">${resultSearch[i].price}</div>
            </div>
            <div class="card-onclick">
                <div class="click-box1" onclick="addProduct(${i})">Thêm vào giỏ hàng</div>
                <div class="click-box2">Xem chi tiết</div>
            </div>
        </div>
      `
    }
      showCart.innerHTML =result;
}
let productInMarket =JSON.parse(localStorage.getItem("market") || "[]");
var c = 0;
let result = null;
function addProduct(i){
    if(productInMarket.length===0)
        {productInMarket.push(data[i]);}
    else{
        for(let k=0; k<productInMarket.length;k++)
        {
            if(productInMarket[k].id===i){
                productInMarket[k].count=productInMarket[k].count+1;
                c=c+1;
            }
        }
        if(c===0)
        {
            console.log('c',c);
            productInMarket.push(data[i]);
        }
        c=0;
    }
    localStorage.setItem('market', JSON.stringify(productInMarket));
}
