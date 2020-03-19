import React, { Component } from 'react';
import DataTable from '../components/DataTable';
import { fetchUsers } from '../redux/modules/users/actions';
import { connect } from 'react-redux';

class Users extends Component{
    componentDidMount(){
        this.props.fetchUsers();
    }
    render(){
        const { users } = this.props;
        console.log(this.props);
        return (
            <div>
            <h1>Users</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <DataTable users={users}/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

//convert data
const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users.users,
        posts: state.posts.posts
    };
};

const mapDispatchToProps = {
    fetchUsers
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);