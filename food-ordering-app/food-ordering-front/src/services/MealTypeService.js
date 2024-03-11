import axios from "axios";
import TokenService from "./TokenService";

class MealTypeService{
    const a;
    getAllMealTypes(){
        return axios.get("http://localhost:8088/api/mealType/getAllMealTypes");
    }
    createMealType(fd){
        TokenService.setTokenInHeader();
        return axios.post("http://localhost:8088/api/mealType/createMealType", fd);
    }

    deleteMealType(mealTypeId){
        TokenService.setTokenInHeader();
        return axios.put("http://localhost:8088/api/mealType/deleteMealType/" + mealTypeId);
    }

    updateMealType(mealType){
        TokenService.setTokenInHeader();
        return axios.put("http://localhost:8088/api/mealType/updateMealType", mealType);
    }

}

export default new MealTypeService();