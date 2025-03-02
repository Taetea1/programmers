function solution(date1, date2) {
    let [year, month, day]=date1;
    let [year2, month2, day2]=date2;
    
    if(year<year2){
        return 1;
    }else if(year===year2){
        if(month<month2){
            return 1;
        } else if(month===month2){
            if(day<day2){
                return 1;
            } else {
                return 0;
            }
        } else{
            return 0;
        }
    }else{
        return 0;
    }
}