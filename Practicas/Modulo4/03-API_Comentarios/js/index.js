
$(document).ready(function(e){
    
    $.ajax({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts/1/comments",
    })
    
    .done(function(response){
        let contenedor= $('#contenedor');
        
        let nav= `<nav><h1>Comentarios</h1></nav>`;
        let main= `<div id='main'></div>`
        
        contenedor.append(nav);
        contenedor.append(main);
        
        for(i=0; i<5; i++){
            
            console.log(response[i]); //para ver que viene
            let comments= $('#main');
            let posts= `<div class='comments'><li>
                            <h4 class='nombre'>${response[i].name}</h4>
                            <p class='email'>${response[i].email}</p>
                            <p class='body'>${response[i].body}</p>
                            </li></div>`;
            
            comments.append(posts);
            contenedor.append(comments);
        }
        

    });
});