export default function Product (){
   // const products= ["Cupcake", "Gumdrop", "Honeybunch", "Mi amor", "Gumdrop"];
    //const productList= products.map ((product) => <h3 key= {product}>{product}</h3>);

   /*const products= [
        {id: 1, name: "Zinoleesky", ticketcost: 200},
        {id: 2, name: "Dbanj", ticketcost: 30000},
        {id: 3, name: "Olamide", ticketcost: 800},
        {id: 4, name: "Wizkid", ticketcost: 5000},
        {id: 5, name: "Wildjay", ticketcost: 90},
        {id: 6, name: "Zinoleesky", ticketcost: 5000},
        {id: 7, name: "Davido", ticketcost: 5},
    ];*/
    const fruits= ["Pineapple", "Cashew", "Grapes"];

    //const productList= products.map ((product) => (<h3 key={product.id}> {product.name} : ${product.ticketcost} </h3> ));
   
   const fruitsList= fruits.map((fruit, index) =><h3 key= {index} > {fruit} </h3> );
    return <div>{fruitsList}</div>;

}