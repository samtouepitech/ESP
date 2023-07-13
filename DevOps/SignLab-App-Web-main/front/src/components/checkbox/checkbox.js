import './checkbox.scss'

/**
 * It returns a div with two divs inside, each containing a div and a span
 * @returns A div with two divs inside.
 */
const Checkbox = ({ setC, choice }) => {
    return (
        <div className='notation-checkbox'>
            <div className='choice'>
                <div className='white-circle' onClick={() => setC(true)}>
                    {choice && <div className='blue-circle' />}
                </div>
                <span>Oui</span>
            </div>
            <div className='choice'>
                <div className='white-circle' onClick={() => setC(false)}>
                    {!choice && <div className='blue-circle' />}
                </div>
                <span>Non</span>
            </div>
        </div>
    )
}

export default Checkbox