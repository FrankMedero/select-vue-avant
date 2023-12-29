import { ref } from "vue";

const useSelectVue = () => {

    const searchCustomer      = ref(''); // ALMACENA EL VALOR QUE SE ESTA BUSCANDO DEL CLIENTE
    const filteredCustomer    = ref([]); // ALMACENA AL CLIENTE FILTRADO
    let   customerFiltered    = ref([]); // MUESTRA EL O LOS CLIENTES FILTRADOS
    const customerClick       = ref(false); // ACTIVA Y DESACTIVA EL SELECT

    let customer = ref({ // OBJETO DEL CLIENTE
        id: 0,
        customer: '',
    });

    const customers = ref([ // DATOS DE LOS CLIENTES
        {
            id: 1,
            customer: 'Mario'
        },
        {
            id: 2,
            customer: 'Mercedes'
        },
        {
            id: 3,
            customer: 'Joel'
        },
        {
            id: 4,
            customer: 'Javier'
        },
        {
            id: 5,
            customer: 'Raul'
        },
        {
            id: 5,
            customer: 'Raul Noel garcia gracia'
        },
        {
            id: 5,
            customer: 'Raul Noel garcia gracia'
        },
        {
            id: 5,
            customer: 'Raul Noel garcia gracia'
        },
        {
            id: 5,
            customer: 'Raul Noel garcia gracia'
        },
        {
            id: 5,
            customer: 'Raul Noel garcia gracia'
        },
        {
            id: 5,
            customer: 'Raul Noel garcia gracia'
        }
    ]);

    customerFiltered.value = customers; // GUARDA TODOS LOS CLIENTES OBTENIDOS Y LOS MUESTRA
    
    const handleCustomerSearch = () => { // BUSCA AL CLIENTE
        filteredCustomer.value =  customers.value.filter(customer => customer.customer.toLowerCase().includes(searchCustomer.value.toLowerCase()));
        customerFiltered.value = filteredCustomer;
    }

    const handleCustomer = (customerSelected) => { // ASIGNA EL CLIENTE SELECIONADO AL PARAMETRO customer Y TRAE SUS DATOS
        customer.value = customerSelected; // SE ASIGNA EL CLIENTE
        customerClick.value = false;
        console.log(customer.value);
    }

    const resetCustomerSelect = () => { // RESETEA EL SELECT DEL CLIENTE
        customerClick.value = !customerClick.value;
        searchCustomer.value = '';
        customerFiltered.value = customers;
    }

    return {
        customer,
        searchCustomer,
        customerFiltered,
        customerClick,
        handleCustomerSearch,
        handleCustomer,
        resetCustomerSelect
    }
}

export default useSelectVue;