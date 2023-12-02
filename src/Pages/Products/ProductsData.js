import IMG1 from "../../Assets/Images/products/prod_1.jpg"

const ProductsData = [
    {
        title: 'Operating Theatre Equipment',
        products: [
            { 
                name: 'Anaesthesia Machine', 
                link: '/products/anaesthesia-machine',
                subProducts: [
                    { name: 'Subproduct 1', prod_id: 'ST 01' , imgsrc: IMG1 , link: '/products/anaesthesia-machine/product-details' },
                    { name: 'Subproduct 2', prod_id: 'ST 02' , imgsrc: IMG1 , link: '/products/anaesthesia-machine/product-details' }, 
                    { name: 'Subproduct 3', prod_id: 'ST 03' , imgsrc: IMG1 , link: '/products/anaesthesia-machine/product-details' },
                    { name: 'Subproduct 4', prod_id: 'ST 04' , imgsrc: IMG1 , link: '/products/anaesthesia-machine/product-details' },  
                ],
            },
            { name: 'Ventilator', link: '/products/ventilator' },
            { name: 'Defibrillator', link: '/products/defibrillator' },
            { name: 'Electrosurgical Unit', link: '/products/electrosurgical-unit' },
            { name: 'Ultrasonic Scalpel', link: '/products/ultrasonic-scalpel' },
            { name: 'Patient Monitor', link: '/products/patient-monitor' },
            { name: 'Medical Pendant', link: '/products/medical-pendant' },
            { name: 'LED Operating Lamp', link: '/products/led-operating-lamp' },
            { name: 'Operating Lamp', link: '/products/operating-lamp' },
            { name: 'Operating Table', link: '/products/operating-table' },
            { name: 'Delivery Table', link: '/products/delivery-table' },
            { name: 'Suction Unit', link: '/products/suction-unit' },
            { name: 'Syringe Pump', link: '/products/syringe-pump' },
            { name: 'Infusion Pump', link: '/products/Infusion-pump' },
            { name: 'Feeding Pump', link: '/products/Feeding-pump' },
            { name: 'Blood Infusion Warmer', link: '/products/blood-infusion-warmer' },
            { name: 'Operating Microscope', link: '/products/operating-microscope' },
            { name: 'Shockwave Lithotriptermp', link: '/products/shockwave-lithotriptermp' },
            { name: 'Surgical Tools', link: '/products/surgical-tools' },
        ],
    },
   
    {
        title: 'OB/GYN Equipment',
        products: [
            { name: 'Product 4', link: '/product4' },
            { name: 'Product 5', link: '/product5' },
            { name: 'Product 6', link: '/product6' }
        ],
    },
    {
        title: 'Diagnostic Equipment',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'Sterilizer (Autoclave)',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'X-ray Series',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'Laboratory Equipment',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'In-Vitro Diagnostics',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'Hemodialysis Equipment',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'Hospital Furniture',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'Walking Aids',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'First-Aid Products',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'Medical Endoscope',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'Medical Human Model',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'Ophthalmic Equipment',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'Dental Equipment',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'ENT Equipment',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'Home Care Equipment',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'Veterinary Equipment',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'Medical Consumablesoscope',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },
    {
        title: 'Personal Protective Equipment',
        products: ['Product 7', 'Product 8', 'Product 9'],
    },


];

export default ProductsData;