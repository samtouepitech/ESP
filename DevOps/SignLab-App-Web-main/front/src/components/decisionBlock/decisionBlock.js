import './decisionBlock.scss'

/**
 * It returns a div with an image and a span inside of it
 * @returns A div with an image and a span
 */
const DecisionBlock = ({svg, title, onClick}) => {
    return (
        <div className='decisionBlock' onClick={onClick}>
            <img src={svg}></img>
            <span>{title}</span>
        </div>
    )
}

export default DecisionBlock