import { useState } from "react";
import { AddCategory, GifGrid } from "./components"; // el from apunta al archivo index.js de components

export function GifExpertApp(){

    const [ categories, setCategories ] = useState(['Arcane']);

    const onAddCategory = function( newCategory ){

        if( categories.includes( newCategory ) ) return;

        setCategories( [ newCategory , ...categories ] );
    }

    return(
        <>
            <h1>Gif Expert App</h1>

            <AddCategory onNewCategory = { onAddCategory } />

            { 
                categories.map( category => 
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ) 
            }

        </>
    );
}