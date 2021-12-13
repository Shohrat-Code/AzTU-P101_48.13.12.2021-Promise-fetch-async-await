$(document).ready(function() {

    // let MyCallback = (age, TrueCase, FalseCase) => {
    //     if (age >= 18) {
    //         TrueCase();
    //     } else {
    //         FalseCase();
    //     }
    // }

    // let Func1 = () => {
    //     console.log("True case");
    // }

    // let Func2 = () => {
    //     console.log("False case");
    // }

    // MyCallback(15, Func1, Func2);

    // let MyPromise = new Promise((resolve, reject) => {

    //     let age = 15;

    //     if (age >= 18) {
    //         resolve();
    //     } else {
    //         reject();
    //     }

    // });

    // MyPromise
    //     .then(() => {
    //         console.log("True case");
    //     })
    //     .catch(() => {
    //         console.log("False case");
    //     })

    // fetch("https://jsonplaceholder.typicode.com/posts?_page=2&_limit=12", {
    //         method: "get"
    //     })
    //     .then(data => {
    //         return data.json();
    //     }).then(result => {
    //         console.log(result);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });


    //Load more
    // <div class="col-lg-3">
    //                     <div class="card" style="width: 18rem;">
    //                         <div class="card-body">
    //                             <h5 class="card-title">User id: 13</h5>
    //                             <h6 class="card-subtitle mb-2 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, placeat.</h6>
    //                             <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla amet iste consequuntur ullam ipsam fugit.</p>
    //                         </div>
    //                     </div>
    //                 </div>

    let productsContainer = $("#productsContainer");
    let loadMore = $("#loadMore");
    let pageNumber = 1;

    let GetDat = (page) => {
        $("#demo").introLoader();

        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=16`, {
                method: "get"
            })
            .then(data => {
                return data.json();
            }).then(result => {
                result.forEach(element => {
                    let card = $(`<div class="col-lg-3">
                                    <div class="card" style="width: 18rem;">
                                        <div class="card-body">
                                            <h5 class="card-title">User id: ${element.id}</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">${element.title}</h6>
                                            <p class="card-text">${element.body}</p>
                                        </div>
                                    </div>
                                </div>`);

                    productsContainer.append(card);


                });

                if (result.length < 16) {
                    loadMore.hide(500);
                }
            })
            .catch(error => {
                console.log(error);
            }).finally(() => {
                $("#demo").hide();
            });
    }

    GetDat(pageNumber);

    // loadMore.click(function(e) {
    //     e.preventDefault();
    //     pageNumber++;
    //     GetDat(pageNumber);
    // });


    window.onscroll = () => {
        // console.log(window.document.documentElement.scrollTop);
        // console.log(window.innerHeight);
        // console.log(window.document.documentElement.offsetHeight);

        if (window.document.documentElement.scrollTop + window.document.documentElement.clientHeight >= window.document.documentElement.offsetHeight - 200) {
            pageNumber++;
            GetDat(pageNumber);
        }
    }

    // fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=8", {
    //         method: "get"
    //     })
    //     .then(data => {
    //         return data.json();
    //     }).then(result => {

    //         result.forEach(element => {
    //             let card = $(`<div class="col-lg-3">
    //             <div class="card" style="width: 18rem;">
    //                 <div class="card-body">
    //                     <h5 class="card-title">User id: ${element.id}</h5>
    //                     <h6 class="card-subtitle mb-2 text-muted">${element.title}</h6>
    //                     <p class="card-text">${element.body}</p>
    //                 </div>
    //             </div>
    //         </div>`);

    //             productsContainer.append(card)
    //         });


    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
});