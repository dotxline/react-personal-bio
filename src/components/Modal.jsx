import React from 'react';

class Modal extends React.Component {
    render() {
        return (
            <div id="imgModal" className="modal">
                <div id="modal-content">
                    <span className="close">&times;</span>
                </div>
            </div>
        );
    }
};

export default Modal;
