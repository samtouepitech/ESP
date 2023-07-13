import { useNavigate } from "react-router-dom"
import DecisionBlock from "../../components/decisionBlock/decisionBlock"
import './finished.scss'

/**
 * It returns a div with two DecisionBlock components, one with the text "Relancer une traduction" and
 * the other with the text "Noter la traduction"
 * @returns A React component
 */
const Finished = () => {
    const navigate = useNavigate()
    return (
        <div className="finished">
            <DecisionBlock svg='/img/rotate-left.svg' title='Relancer une traduction' onClick={() => navigate('/translation')} />
            <span className="or">ou</span>
            <DecisionBlock svg='/img/like.svg' title='Noter la traduction' onClick={() => navigate('/notation')} />
        </div>
    )
}

export default Finished