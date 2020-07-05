import React, { Component } from 'react';
import { connect } from 'react-redux';
import icon from '../../assets/icons/icon.jpg';
import Poll from './Poll';
import  requireAuth from '../guest/Authenticator';
import PollResult from './PollResult';

class Question extends Component {
    render(){
        const {question, users, authedUser} = this.props;
        const isAnswered = question !== undefined && (question.optionOne.votes.findIndex(uid => uid === authedUser) > -1 
                            || question.optionTwo.votes.findIndex(uid => uid === authedUser) > -1);
        return (
            question === undefined ? <div>Question not found</div> :
                <li>
                    <div className='card shadow'>
                        <div className='card-header-sm logo-bg'>
                            {`${question.author === authedUser 
                            ? "You Ask:"
                            : users[question.author].name + ' Asks: '
                            }`}
                        </div>
                        <div className='card-content'>
                            <div className='left'>
                                <img 
                                src={users[question.author].avatarUrl === '' 
                                    ? icon : users[question.author].avatarURL}
                                alt={`avatar of ${users[question.author].name}`}
                                className='question-avatar'
                                />
                            </div>
                            <div className='right w-60'>
                                {isAnswered ? <PollResult question={question} /> : <Poll question={question} />}
                            </div>
                            <div className='clear-fix'></div>
                        </div>
                    </div>
                </li>
            );
    }
}

function mapStateToProps({authedUser, users, questions}, props) {
    const {id} = props.match.params;
    return {
        authedUser,
        users,
        question: questions[id]
    }
}

export default requireAuth(connect(mapStateToProps)(Question));