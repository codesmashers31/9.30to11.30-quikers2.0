import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Products = ()=>{

const [ennodaproducts,setEnnodaProducts] = useState([])
const [searchpannuradata,setSearchPannuradata] = useState("")
const [categories,setCategories]  = useState([]);
const [catvalue,setCatValue] = useState("")
const [sortprice, setPrice] = useState("")
const [cart,setCart] = useState(0);



const lowtohigh = [{name:"Price:High-Low"},{name:"Price:Low-High"}]

    const fetchProduct = async()=>{

        const res = await fetch("https://dummyjson.com/products?limit=20");
        const data = await res.json();

        //console.log(data.products);
        setEnnodaProducts(data.products)

        const allCats = data.products.map((items)=> items.category)
        
        //console.log(allCats);

        const unique = Array.from(new Set(allCats))
        
       //console.log(unique);

       setCategories(unique)
       

    }

    useEffect(()=>{
        fetchProduct();
    },[])


    const handlesearch = (e)=>{
    
        setSearchPannuradata(e.target.value)

        //console.log(productsearch);
      

    }
   //console.log(catvalue);
   
   const searchdatas = () => {
  let filtervalues = ennodaproducts;

  // 🟢 Category filter first
  if (catvalue !== "") {
    filtervalues = filtervalues.filter((cat) => cat.category === catvalue);
  }

  // 🟢 Search filter next
  if (searchpannuradata !== "") {
    filtervalues = filtervalues.filter((e) =>
      e.title.toLowerCase().includes(searchpannuradata.toLowerCase())
    );
  }

  if (sortprice ==="Price:Low-High"){
    filtervalues.sort((a,b)=> a.price-b.price)
  }else if (sortprice ==="Price:High-Low"){
     filtervalues.sort((a,b)=> b.price-a.price)
  }

  return filtervalues;
};


    const inthansearchdatas = searchdatas()

    //console.log('Datas',inthansearchdatas);
    
    
    
    const getcatvalue = (e)=>{

        setCatValue(e.target.value)

    }

    const sortitem =(steve)=>{

        setPrice(steve.target.value)
        
    }



    const addtocart = ()=>{

      setCart(cart+1)


    }

    return <>

    <div>
      <Navbar cartcvalue={cart} />
    </div>
    
    <div className="bg-blue-500 h-500">
        <h1 className="text-center p-10 text-2xl">Product List</h1>
       
       <div className="text-center mb-10 flex gap-10 justify-center p-10">
       <input type="text" placeholder="Search" onChange={handlesearch} className="p-2 bg-white w-100 text-2xl rounded-2xl" />
       <select onChange={getcatvalue}
  className="w-100 h-12 px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-900 text-base focus:outline-none focus:border-blue-600 shadow-sm transition-colors"
>
  <option value="" selected disabled>Select One...</option>
  {categories.map((e, i) => (
    <option key={i + 1} value={e}>
      {e.toUpperCase()}
    </option>
  ))}
</select> 

<select onChange={sortitem}
  className="w-100 h-12 px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-900 text-base focus:outline-none focus:border-blue-600 shadow-sm transition-colors"
>
  <option value="" selected disabled>Sort Filter...</option>
   {lowtohigh.map((e,i)=>  (
     <option  key = {i} value={e.name}> {e.name}</option>

   ))}
</select>

       </div>
        
        <div className="flex flex-wrap gap-10 justify-center">

            {inthansearchdatas.map((e)=>(
             
             <div className="bg-white w-60 h-100 rounded p-6" key={e.id}>
                
                <img src={e.images} alt="" />
             <h1>{e.title.length>10?e.title.slice(0,10)+"...":e.title}</h1>
             {e.description.length > 20 ? e.description.slice(0, 30) + "..." : e.description}
             <p className="bg-blue-500 w-20 text-center p-1 m-1 rounded text-white">{e.price}</p>
             <button onClick={addtocart} className="bg-black text-white p-2 w-50 rounded hover:bg-blue-500 hover:text-black">Add to cart</button>
           </div>


            ))}



           
        </div>
    </div>
    
    </>

}

export default Products;