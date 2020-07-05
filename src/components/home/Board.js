import React, { Component } from 'react';
import icon from '../../assets/icons/icon.jpg';

class Board extends Component {
    render() {
        const {user, rank} = this.props;
        const boardColors = [
                'gold', 'silver', 'brown'
        ];
        let qCount = 0;
        let aCount = 0;
        let score = 0;
        if(user !== undefined && user !== null) {
            aCount = Object.keys(user.answers).length;
            qCount = user.questions.length;
            score = qCount + aCount;
        }
        return (
            <li>
                <div className='card shadow'>
                        <div className='board-badge' style={{
                            backgroundColor: rank - 1 >= boardColors.length ? 'turquoise' : boardColors[rank - 1]
                            }}>
                            <div className='board-badge-content'>{rank}</div>
                        </div>
                    <div className='card-content'>
                        <div className='left w-30'>
                            <img 
                                src={user.avatarUrl === '' 
                                    ? icon : user.avatarURL}
                                alt={`avatar of ${user.name}`}
                                className='question-avatar'
                            />
                        </div>
                        <div className='left w-40'>
                            <h3>{user.name}</h3>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>Answered Questions</td>
                                        <td>{aCount}</td>
                                    </tr>
                                    <tr>
                                        <td>Created Questions</td>
                                        <td>{qCount}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='left w-25'>
                            <div className='card shadow'>
                                <div className='score-header'>
                                    Score
                                </div>
                                <div className='card-body center'>
                                    <div className='score'>
                                        {score}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='clear-fix'></div>
                    </div>
                </div>
            </li>
        );
    }
}

export default Board;