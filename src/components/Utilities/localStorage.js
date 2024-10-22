// check -> local storage is empty or not
const checkLocalStorage = () => {
    const localStorageData = localStorage.getItem('cart');
    if(localStorageData){
        //convert and return local storage JSON string to JS object
        const cartObject = JSON.parse(localStorageData);
        return cartObject;
    }
    return [];
}


// add -> add bottle id with local storage saved data and again save it to local storage
const addToLS = (id) => {
    // add -> add bottle id to stored data
    const cartData = checkLocalStorage();
    cartData.push(id);

    //convert and return local storage JS object to JSON string
    const cartString = JSON.stringify(cartData);
    localStorage.setItem('cart', cartString);
}


export {addToLS};