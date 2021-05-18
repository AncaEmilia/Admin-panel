import React from 'react';
import UserItem from './UserItem';

class UserList extends React.Component {
    render() {
        return(
            <div>
                {this.props.users.map((user, index) => {
                        return(
                            <UserItem 
                                key={index}
                                name={user.name} 
                                email={user.email} 
                                img='https://upload.wikimedia.org/wikipedia/commons/5/5f/User_with_smile.svg' 
                                isGoldClient={user.isGoldClient }
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default UserList;

