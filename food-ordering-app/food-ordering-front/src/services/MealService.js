import axios from "axios";
import TokenService from "./TokenService";


class MealService{

    getAllMeals(){
        TokenService.setTokenInHeader();
        return axios.get("http://localhost:8088/api/meal/getAllMeals");
    }

    createMeal(fd) {
        TokenService.setTokenInHeader();
        return axios.post("http://localhost:8088/api/meal/createMeal", fd, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    deleteMeal(mealId){
        TokenService.setTokenInHeader();
        return axios.put("http://localhost:8088/api/meal/deleteMeal/" + mealId);
    }

    getAllMealTypes(){
        TokenService.setTokenInHeader();
        return axios.get("http://localhost:8088/api/mealType/getAllMealTypes");
    }

    updateMeal(meal){
        TokenService.setTokenInHeader();
        return axios.put("http://localhost:8088/api/meal/updateMeal", meal);
    }

    getMealsByMealTypeId(mealTypeId){
        return axios.get("http://localhost:8088/api/meal/getMealsByMealTypeId/" + mealTypeId);
    }

    sendItemsForFinalOrder(itemsFromCartFinalOrder){
        // jedino ako je korisnik ulogovan, stavlja se token u header-u
        TokenService.setTokenInHeader();
        return axios.post("http://localhost:8088/api/finalOrder/createFinalOrder", itemsFromCartFinalOrder); 
    }

    getFinalOrderById(finalOrderId){
        return axios.get("http://localhost:8088/api/finalOrder/getFinalOrderById/" + finalOrderId);
    }

    getOrderItemsByFinalOrderId(finalOrderId){
        return axios.get("http://localhost:8088/api/finalOrder/getOrderItemsByFinalOrderId/" + finalOrderId);
    }

    getAllActiveFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get("http://localhost:8088/api/finalOrder/getAllActiveFinalOrders");
    }
    
    getAllDeliveredFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get("http://localhost:8088/api/finalOrder/getAllDeliveredFinalOrders");
    }

    getMyActiveFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get("http://localhost:8088/api/finalOrder/getAllMyActiveFinalOrders");
    }

    getMyDeliveredFinalOrders(){
        TokenService.setTokenInHeader();
        return axios.get("http://localhost:8088/api/finalOrder/getAllMyDeliveredFinalOrders");
    }

   changeFinalOrderStatus(finalOrderWithStatusAndId){
        TokenService.setTokenInHeader();
        return axios.put("http://localhost:8088/api/finalOrder/changeStatus", finalOrderWithStatusAndId);
    }

    deleteFinalOrder(finalOrderId){
        TokenService.setTokenInHeader();
        return axios.delete("http://localhost:8088/api/finalOrder/deleteFinalOrder/" + finalOrderId);
    }

}

export default new MealService();