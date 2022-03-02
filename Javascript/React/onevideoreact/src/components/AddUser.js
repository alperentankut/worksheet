import React, { Component } from "react";


class AddUser extends Component {

    render() {
        return (
            <div className="card">
                <h4 className="card-header">Add New User</h4>
                <div className="card-body">
                    <form className="d-grid gap-2">
                        <div className="form-group">
                            <label htmlFor="name"></label>
                            <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Enter Name" 
                            className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"></label>
                            <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Enter email" 
                            className="form-control"/>
                        </div>
                        
                        <button type="submit" className="btn btn-danger">Add New User</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddUser;