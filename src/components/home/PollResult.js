import React, { Component } from 'react';
import { connect } from 'react-redux';

class PollResult extends Component {
    render() {
        const {user, question} = this.props;
            let optionOneVotes = 0;
            let optionTwoVotes = 0;
            let totalVotes = 1;
            let optionOnePercent = 0;
            let optionTwoPercent = 0;
            let anOne = false;
            let anTwo = false;
        if(question !== undefined && user !== undefined) {
            optionOneVotes = question.optionOne.votes.length;
            optionTwoVotes = question.optionTwo.votes.length;
            totalVotes = optionOneVotes + optionTwoVotes;
            optionOnePercent = ((optionOneVotes / totalVotes) * 100).toFixed(2);
            optionTwoPercent = ((optionTwoVotes / totalVotes) * 100).toFixed(2);
            anOne = user.answers[question.id] !== undefined && user.answers[question.id] === 'optionOne';
            anTwo = user.answers[question.id] !== undefined && user.answers[question.id] === 'optionTwo';
        }
        return (
            question === undefined ? <div></div> :
            <div>
                <h3>Results: </h3>
                <ul>
                    <li>
                        <div className={`card shadow ${anOne ? 'your-answer' : ''}`}>
                            <div className='answer-badge' style={{display: `${anOne ? 'inline-table' : 'none'}`}}>
                                <div className='answer-badge-content'>Your Answer</div>
                            </div>
                            <div className='card-content'>
                                <p>{`Would You rather ${question.optionOne.text}?`}</p>
                                <div className='progress-container'>
                                    <div className='progress-content' style={{width: `${optionOnePercent}%`}}>{optionOnePercent}%</div>
                                </div>
                                <div className='center'>{`${optionOneVotes} out of ${totalVotes} votes`}</div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={`card shadow ${anTwo ? 'your-answer' : ''}`}>
                            <div className='answer-badge' style={{display: `${anTwo ? 'inline-table' : 'none'}`}}>
                                <div className='answer-badge-content'>Your Answer</div>
                            </div>
                            <div className='card-content'>
                                <p>{`Would You rather ${question.optionTwo.text}?`}</p>
                                <div className='progress-container'>
                                    <div className='progress-content' style={{width: `${optionTwoPercent}%`}}>{optionTwoPercent}%</div>
                                </div>
                                <div className='center'>{`${optionTwoVotes} out of ${totalVotes} votes`}</div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}
function mapStateToProps({users, authedUser}, {question}) {
    return {
        user: users[authedUser],
        question
    }
}
export default connect(mapStateToProps)(PollResult);