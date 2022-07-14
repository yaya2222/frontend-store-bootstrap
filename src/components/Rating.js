import PropTypes from "prop-types"


const Rating = ({ value, text, color }) => {
    return (
        <div className="rating">
            <span>
                {[1, 2, 3, 4, 5].map(numOfStar =>
                    <i key={numOfStar+"num of star"} 
                    style={{ color }}
                        className={
                            value >= numOfStar ? 'fas fa-star'
                                : value >= numOfStar - 0.5 ? 'fas fa-star-half-alt'
                                    : 'far fa-star'}>
                    </i>
                )}
            </span>
            <span>{text ?? ""}</span>
        </div>
    )
}

Rating.defaultProps = {
    color: "#f8e825"
}

Rating.prototype = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Rating