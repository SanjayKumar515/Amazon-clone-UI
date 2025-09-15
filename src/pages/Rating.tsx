import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const RatingStar = ( { stars }: { stars: number } ) => {
    return (
        <div className="flex">
            { Array.from( { length: 5 }, ( _, index ) => {
                let number = index + 0.1;

                let starIcon;
                if ( stars >= index + 1 ) {
                    starIcon = <AiFillStar className="text-[#ffd700]" />;
                } else if ( stars >= number ) {
                    starIcon = <BsStarHalf className="text-[#ffd700]" />;
                } else {
                    starIcon = <AiOutlineStar className="icon" />;
                }

                return (
                    <span key={ index }>
                        { starIcon }
                    </span>
                );
            } ) }
        </div>
    );
};

export default RatingStar;
