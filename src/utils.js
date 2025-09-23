const getItemFromLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    if (item) {
        return JSON.parse(item);
    }
    return [];
}

const setItemToLocalStorage = (key, value) => {
    const data=JSON.parse(localStorage.getItem(key));
    if(data){
        data.push(value);
        return localStorage.setItem(key, JSON.stringify(data));
    }   else{
        const arr=[];
        arr.push(value);
        return localStorage.setItem(key, JSON.stringify(arr));
    }
}           
export { getItemFromLocalStorage, setItemToLocalStorage };