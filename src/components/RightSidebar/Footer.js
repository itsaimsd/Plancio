import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ task, closeSidebar, handleDelete }) => {
  return (
    <div className="sidebar-footer">
      <div className="footer-content">
        <FontAwesomeIcon
          icon={faTimes}
          className="close-icon"
          onClick={closeSidebar} // Close sidebar
        />
        <span>Created Today</span>
        <FontAwesomeIcon
          icon={faTrash}
          className="delete-icon"
          onClick={() => handleDelete(task.id, task.text)} // Pass task ID and name to delete
        />
      </div>

      {/* Save Button */}
      <div className="save-footer">
        <button className="save-button">Save</button>
      </div>
    </div>
  );
};

export default Footer;