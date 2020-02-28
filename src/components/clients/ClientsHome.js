import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import ClientListElement from "./ClientListElement";
import CreateClient from "./modals/CreateClient";

// mobile styling


// desktop styling
import "./clients-desktop-styles.scss"

const ProgramHome = (props) => {
    const [AddClientModal, ToggleAddClientModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(props.coach_clients);

    useEffect(() => {
        if(!props.coach_clients.length) {
            return "";
        }
        let results = props.coach_clients.filter(client => (client.first_name + " " + client.last_name).toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(results);
    }, [searchTerm, props.updates, props.coach_clients]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return(
        <>

        {/* DESKTOP VIEW */}

        <div className="d-client-home">
            <div className="d-client-home-top">
                <div className="d-search-div" >
                    <img className="magnifying-icon" src="https://i.imgur.com/dJIfxYP.png" alt="search"></img>
                    <input 
                        className="search-bar"
                        placeholder="Search"
                        onChange={handleChange}
                        value={searchTerm}
                    />
                </div>
                <button className="add-client-button" onClick={() => ToggleAddClientModal(true)}>Add New Client</button>
            </div>
            <div className="d-client-list-div">
                <div className="client-list-header">
                    <h4 className="header-pic"> </h4>
                    <h4 className="header-name">Name</h4>
                    <h4 className="header-days"> </h4>
                    <h4 className="header-actions">Actions</h4>
                </div>
                {searchResults.map(client => {
                        return(
                            <ClientListElement key={client.id} client={client} id={client.id} first_name={client.first_name} last_name={client.last_name} {...props}/>
                        )
                    })}
            </div>
            
            <CreateClient AddClientModal={AddClientModal} ToggleAddClientModal={ToggleAddClientModal} {...props}/>
        </div>
        </>
    )
}

const mapStateToProps = state => ({
    loggedInUser: state.loggedInUser,
    updates: state.updates,
    coach_clients: state.coach_clients,
    coach_exercises: state.coach_exercises,
    coach_programs: state.coach_programs,
  });
  
  export default connect(
    mapStateToProps,
  )(ProgramHome);