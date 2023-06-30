import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Prueba de GifItem', () => {

    test('Debe de hacer match con el snapshot', () => { 

        const { container } = render( <GifItem title={ 'title' } url={ 'url' }/> )
        expect( container ).toMatchSnapshot();

     });

     test('debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={ 'title' } url={ 'url' }/>);

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( 'http://localhost/url' );
        expect( alt ).toBe( 'title' );

     })

     test('debe de moestrar el título en el componente', () => {

        render( <GifItem title="title" src="url" /> );
        expect( screen.getByText( 'title' ) ).toBeTruthy();

     })

})