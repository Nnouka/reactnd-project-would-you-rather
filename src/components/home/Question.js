import React, { Component } from 'react';
import { connect } from 'react-redux';
import icon from '../../assets/icons/icon.jpg';
import Poll from './Poll';
import PollResult from './PollResult';
import Login from '../guest/Login';
import _404 from '../errors/_404';

class Question extends Component {
    render(){
        const {question, users, authedUser, isAuthenticated, match} = this.props;
        const isAnswered = question !== undefined && (question.optionOne.votes.findIndex(uid => uid === authedUser) > -1 
                            || question.optionTwo.votes.findIndex(uid => uid === authedUser) > -1);
        return (
            isAuthenticated ? 

            // eslint-disable-next-line react/jsx-pascal-case
            (question === undefined ? <_404 /> :
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
            ): <Login intendedUrl={`/questions/${match.params.id}`}/>
            );
    }
}

function mapStateToProps({authedUser, users, questions}, props) {
    const {id} = props.match.params;
    return {
        authedUser,
        users,
        question: questions[id],
        isAuthenticated: authedUser !== null
    }
}

export default connect(mapStateToProps)(Question);