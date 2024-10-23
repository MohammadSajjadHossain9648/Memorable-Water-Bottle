// check -> local storage is empty or not
const getLocalStorageData = () => {
    const localStorageData = localStorage.getItem('cart');
    if(localStorageData){
        //convert local storage JSON string to JS object and return it
        const cartObject = JSON.parse(localStorageData);
        return cartObject;
    }
    return [];
}


// add -> add bottle id with local storage saved data and again save it to local storage
const addToLS = (id) => {
    // add -> add bottle id to stored data
    const cartData = getLocalStorageData();
    cartData.push(id);

    //convert local storage JS object to JSON string and return it to local storage
    const cartString = JSON.stringify(cartData);
    localStorage.setItem('cart', cartString);
}


export {addToLS, getLocalStorageData};