import React, { Component } from 'react';
import { deleteUser } from '../redux/modules/users/actions';
import { connect } from 'react-redux';
class DataTable extends Component {
    deleteUser = id => {
        this.props.deleteUser(id);
    }

    render() {
        const { users } = this.props;
    
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) => {
                        return (
                            <tr key={index}>
                                <th scope="row"> {user.id }</th>
                                <td>{ user.first_name }</td>
                                <td>{ user.last_name }</td>
                                <td>{ user.email }</td>
                                <td>
                                    <button 
                                        type="button" 
                                        className="btn btn-danger"
                                        onClick={() => this.deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )
                        
                    })}
                </tbody>
            </table>
        );
    }
}

const mapDispatchToProps = {
    deleteUser
}

export default connect(null,mapDispatchToProps)(DataTable);