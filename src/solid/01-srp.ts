(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductServices{


        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
        
    }

    class Mailer {

        private masterEmail: string = 'leonel@gmail.com';

        sendEmail(emailList: string[], template: 'to-clients'|'to-admins'){
            console.log('Eviando correo a los clientes', template);
        }

    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productServices: ProductServices;
        private mailer: Mailer;

        //inyectar dependencias
        constructor(productServices:ProductServices, mailer:Mailer){
            this.productServices = productServices;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            //nota: utilizó la responsabilidad unica de la clase productServices
            this.productServices.loadProduct(id);
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productServices.saveProduct(product)
        }
    
        notifyClients() {
            this.mailer.sendEmail(["jorge@gmail.com"],"to-admins")
        }
    
        
    
    }

    class CartBloc{

        private itemsInCart: Object[] = [];

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }

    }
    

    const mailer = new Mailer();
    const productServices = new ProductServices();

    const productBloc = new ProductBloc(productServices,mailer);
    const cartBloc = new CartBloc();


    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);








})();