import { FunctionComponent } from 'react'

interface ProgressbarProps {
    Text: String,
    Percent: number,
}

const Progressbar: FunctionComponent<ProgressbarProps> = ({ Text, Percent }) => {
    return (
        <div>
            <svg height="40" width="100%" viewBox="0 0 400 40">

                <g fill="none" stroke="white" strokeWidth="25">
                    <path strokeLinecap="round" d="M20 20 l360 0" />
                </g>
                <g fill="none" stroke="#ed9130" strokeWidth="25">
                    <path strokeLinecap="round" d={"M20 20 l" + (Percent * 3.6) + " 0"} />

                </g>
                <text x="50%" y="25" fill="#0f0f0f" textAnchor='middle'>
                    {Text + ': ' + Percent + '%'}
                </text>
            </svg>
        </div>
    )
}
export default Progressbar