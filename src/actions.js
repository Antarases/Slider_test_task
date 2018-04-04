export const CHANGE_SLIDE = "CHANGE_SLIDE";

export function changeSlide(direction, currentSlide, slides_quantity){
    if(direction === 'next'){
        if(currentSlide !== (slides_quantity-1)){
            currentSlide++;
        } else{
            currentSlide = 0;
        }
    } else if(direction === 'prev'){
        if(currentSlide !== 0){
            currentSlide--;
        } else{
            currentSlide = slides_quantity-1;
        }
    }

    return {
        type: CHANGE_SLIDE,
        currentSlide
    };
};
