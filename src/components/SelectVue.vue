<script setup>
import useSelectVue from '../components/composables/useSelectVue.js';

const {
    customer,
    searchCustomer,
    customerFiltered,
    customerClick,
    handleCustomerSearch,
    handleCustomer,
    resetCustomerSelect
} = useSelectVue();

</script>

<template>
    <!-- CONTENEDOR DEL SELECT -->
    <div class="form-data-flex">

        <!-- SELECT -->
        <div :class="[customerClick ? 'form-select-wrapper active' : 'form-select-wrapper']">
        
            <!-- PARTE 1 SELECT HABILTADO/INAHABILITADO -->
            <div class="form-select-btn" @click="resetCustomerSelect">
                <span v-if="customer.customer != ''">{{ customer.customer }}</span>
                <span v-else>Seleccione una opción</span>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <!-- PARTE 1 SELECT HABILTADO/INAHABILITADO -->
        
            <!-- PARTE 2 CONETIDO DEL SELECT -->
            <div class="form-content-select">

                <!-- INPUT DE LAS BUSQUEDA -->
                <div class="form-search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Buscar" v-model="searchCustomer" @keyup="handleCustomerSearch">
                </div>
                <!-- INPUT DE LAS BUSQUEDA -->

                <!-- MOSTRANDO LA DATA -->
                <ul class="form-options">
                    <li v-for='(customer, i) in customerFiltered.value' :key="i" @click="handleCustomer(customer)"> {{ customer.customer }}</li>
                </ul>
                <!-- MOSTRANDO LA DATA -->
    
            </div>
            <!-- PARTE 2 CONETIDO DEL SELECT  -->
        
        </div>
        <!-- SELECT -->

    </div>
    <!-- CONTENEDOR DEL SELECT -->
</template>

<style scoped>
    .form-data-flex {
        width: 250px;
    }
</style>