import { useState } from "react"
import PropTypes from 'prop-types'

export function AddCategory( { onNewCategory } ) {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = function( {target} ){
        setInputValue(target.value);
    }

    const onSumbmit = function(event){
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        // setCategories( categories => [inputValue, ...categories] );
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return(
        <form aria-label="form" onSubmit={ onSumbmit }>
            <input 
                type="text" 
                placeholder="Buscar Gif's" 
                onChange={ onInputChange }
                value={ inputValue }
            >

            </input>
        

        </form>
    )
} 

AddCategory.propTypes = {
    onNewCategory: PropTypes.func
}