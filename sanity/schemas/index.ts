import { brand } from './documents/brand';
import { page } from './documents/page';
import { product } from './documents/product';

const schemaSingletons = [
    
]
const  schemaDocuments = [
    product,
    page,
    brand
]
//Keep track of your exported schemas! 
//You are exporting default Javascript(Ts) Objects
export const  schemaObjects = [...schemaSingletons,...schemaDocuments];