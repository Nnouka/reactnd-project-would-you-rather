import React, { Component } from 'react';
import { connect } from 'react-redux';
import icon from '../../assets/icons/icon.jpg';
import { Link } from 'react-router-dom';

class QuestionPreview extends Component {
    render () {
        const {question, users, authedUser} = this.props;
        return (
            <li key={question.id}>
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
                        <div className='right'>
                            <h3>Would You Rather...</h3>
                            <p>...{question.optionOne.text}</p>
                            <Link to={`/question/${question.id}`} className='btn'>
                                View All
                            </Link>
                        </div>
                        <div className='clear-fix'></div>
                    </div>
                </div>
            </li>
        );
    }
}

function mapStateToProps({authedUser, users}, {question}) {
    return {
        authedUser,
        users,
        question
    }
}
export default connect(mapStateToProps)(QuestionPreview);