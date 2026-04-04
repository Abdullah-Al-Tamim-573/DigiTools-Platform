import imgpart from "../../../assets/products/portfolio.png"

const Card = ({cardData, handleRemoveCardData}) => {

    let {id, icon, alt, name, price} = cardData;

    let handleRemoveItmes = () => {
           
    }
    
    return (
        <>
            <div className="shadow-2xl rounded-[10px] flex justify-between items-center p-5 py-14 md:py-17">
                  <div className="flex gap-4 items-center">
                         <img src={icon} alt={alt} />
                         <div className="flex flex-col gap-1">
                                <h4 className="text-xl font-semibold">{name}</h4>
                                <p className="!text-[#627382]">${price}</p>
                         </div>
                  </div>

                  <button onClick={() => handleRemoveCardData(cardData)} className="!text-[#FF3980] btn font-bold">
                        Remove
                  </button>

            </div>
        </>
    );
};

export default Card;