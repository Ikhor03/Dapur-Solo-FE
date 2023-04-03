import axios from "axios";

export const getProduct = async () => {
    return await axios.get('http://localhost:3000/api/products');
}
export const getCategory = async () => {

}
export const getTagByCategory = async () => {

}