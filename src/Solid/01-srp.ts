(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    
        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    
    }
    
    class CartBloc {
        //Todo lo relacionado al carrito de compras 
        anADDToCart(productId: number) {
            console.log('Agregando al carrito ', productId );
        }
    }
    class MailerBloc {
        //Todo lo relacionado al correo de notificación
        notifyClients(){
            console.log("Enviando correo a los clientes");
        }
    }

    const productBloc = new ProductBloc();
    const cartBloc    = new CartBloc();
    const mailerBloc  = new MailerBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    mailerBloc.notifyClients();
    cartBloc.anADDToCart(10);









})();