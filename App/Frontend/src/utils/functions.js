export function generateUniqueKey() {
    return Math.random().toString(36).substr(2, 9);
  }

export function updateLocalStorage(state){
  window.localStorage.setItem("cart",JSON.stringify(state))
}