import Markdown from 'markdown-to-jsx';

const HackCard = (props) => {
    const issue = props.single_issue
    return (
        <div>
            {issue.body}
        </div>
    )
}
export default HackCard