// $(function(){
//     $.ajax({   // {url ,success ,error ,Data, type}
//         url: "https://dummyjson.com/products",
//         success:function(result){
//             console.log(result.products);
//             var cartona = ``;
//             for (var i=0; i < result.products.length; i++){
//                 cartona += `
//                 <div class="col-md-4">
//                  <div class="item">
//                      <img class="w-100 border" src = "${result.products[i].thumbnail}" />
//                      <h4>${result.products[i].title}</h4>
//                      <p>${result.products[i].description}</p> 
//                  </div>
//              </div>
//                 `
//                 document.getElementById("rowData").innerHTML = cartona;
//             }
//         },
//         error:function(){
//             alert(" Go to the hell")
//         },
//         data: {},
//         type: "GET"
//     })
// })

$(function(){
    $.ajax({
        url:"https://dummyjson.com/products",
        success: function(result){
            console.log(result);
          $(result.products).each(function(index , object){
            console.log(index , object);
            $("#rowData").append(`
            <div class="col-md-4">
                  <div class="item">
                      <img class="w-100 border" src = "${result.products[index].thumbnail}" />
                      <h4>${result.products[index].title}</h4>
                      <p>${result.products[index].description}</p> 
                  </div>
              </div>
            `)
          })
            
        }
    })
})
