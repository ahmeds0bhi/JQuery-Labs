let id;
$("#btn").on("click", function(){
     id =  $("#inputData").val()
    console.log(id);
    if (id =="" || id == 0 ){
    alert("please add correct value")
    }
    else {
        callAjax()}
})

function callAjax (){
    $.ajax({
        url:`https://dummyjson.com/products/${id}`,
        success:function(res){
            console.log(res);
            $("#rowData").html(
                `
                <div class="col-md-6 mt-2 ">
    <div class="item">
    <h4>Title : ${res.title}</h4>
    <p>Descreption : ${res.description}</p> 
    <p>Price : ${res.price}</p> 
    <p>Discount Percentage : ${res.discountPercentage}</p> 
    <p>Rating : ${res.rating}</p> 
    <p>Brand : ${res.brand}</p> 
    <p>Category : ${res.category}</p> 
    </div>
    </div>
    <div class="col-md-6" id="imgData">
    <img class="w-100 border" src = ${res.thumbnail} />
    </div>
    </div>`)
        },
        error:function(err){
            alert("There is an error")
        }
    })
}