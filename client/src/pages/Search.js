import React , { useEffect, useState } from "react";
import API from "../utils/googleAPI";

//STANDARD COMPONENTS
import SearchBar from "../components/searchbar";
import BookInfo from "../components/book-info";



function Search () {

const [books,setBooks]=useState([]);
 
useEffect(()=>{
    loadBooks()
},[])

function loadBooks(){
    API.getBooks().then(res=>setBooks(res.data)).catch(err=>console.log(err))
};

    return (

                <div>
                    <SearchBar/>
                   THIS NOT IS THE SEARCH PAGE

                   {books.length ? (
              <ul>
                {books.map(book => {
                  return (
                    <p key={book._id}>
                      <a href={"/books/" + book._id}>{book.title} by {book.author}</a>
                    </p>
                  );
                })}
              </ul>
            ) : (
              <h3>No books were found.</h3>
            )}
              
                </div>


            
       
    )
}

export default Search;


