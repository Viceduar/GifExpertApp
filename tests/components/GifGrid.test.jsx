import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";


describe('Prueba de componente <GifGrid />', () => { 
    
    const category = 'Arcane';

    test('debe de mostrar el loading incialmentes', () => { 

        render( <GifGrid category={ category }/> );
        
        expect( screen.getByText( 'Cargando...' )).toBeTruthy();
        expect( screen.getByText( category )).toBeTruthy();

     })

 })