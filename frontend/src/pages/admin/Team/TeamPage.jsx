import { useState } from "react";
import styles from "../../../styles/admin/TeamPage.module.css";

import Sidebar from "../../../components/Sidebar";
import AddMemberModal from "./AddMemberModal";
import DeleteConfirmModal from "./DeleteConfirmModal";
import { RiEditLine } from "react-icons/ri";

export default function TeamPage() {
  const [team, setTeam] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [memberToDelete, setMemberToDelete] = useState(null);

  const handleAddMember = (newUser) => {
    // Restrict 1 admin
    if (newUser.role === "Admin") {
      const adminExists = team.some((m) => m.role === "Admin");
      if (adminExists) {
        alert("Only one Admin account can exist.");
        return;
      }
    }

    setTeam([...team, newUser]);
    setShowAddModal(false);
  };

  const handleDeleteClick = (member) => {
    setMemberToDelete(member);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (memberToDelete.role === "Admin") {
      alert("Admin cannot be deleted.");
      setShowDeleteModal(false);
      return;
    }

    // Remove member
    setTeam(team.filter((m) => m.email !== memberToDelete.email));
    setShowDeleteModal(false);
  };

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <Sidebar />

      <div className={styles.pageWrapper}>
        <h2 className={styles.title}>Team</h2>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th></th>
                <th>Full Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Role</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {team.length === 0 ? (
                <tr>
                  <td colSpan="6" className={styles.empty}>
                    No team members added yet.
                  </td>
                </tr>
              ) : (
                team.map((member, index) => (
                  <tr key={index}>
                    {/* Profile Column */}
                    <td>
                      <img
                        src={member.avatar || "/default-avatar.png"}
                        className={styles.profileImg}
                      />
                    </td>

                    <td>{member.name}</td>
                    <td>{member.phone}</td>
                    <td>{member.email}</td>
                    <td>{member.role}</td>

                    <td className={styles.actions}>
                      <span
                        className={styles.editIcon}
                        title="Edit"
                        onClick={() => alert("Open edit modal")}
                      >
                        <RiEditLine />
                      </span>

                      {/* Only non-admin can be deleted */}
                      {member.role !== "Admin" && (
                        <span
                          className={styles.deleteIcon}
                          title="Delete"
                          onClick={() => handleDeleteClick(member)}
                        >
                        <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.833333 13.3333C0.833333 13.7754 1.00893 14.1993 1.32149 14.5118C1.63405 14.8244 
                          2.05797 15 2.5 15H9.16667C9.60869 15 10.0326 14.8244 10.3452 14.5118C10.6577 14.1993 10.8333 
                          13.7754 10.8333 13.3333V3.33333H0.833333V13.3333ZM2.5 5H9.16667V13.3333H2.5V5ZM8.75 0.833333L7.91667 0H3.75L2.91667 0.833333H0V2.5H11.6667V0.833333H8.75Z" fill="#545454"/>
                        </svg>
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          <button
            className={styles.addBtn}
            onClick={() => setShowAddModal(true)}>
            <span className={styles.addBtnIcon}>+</span> Add Team Members
          </button>
        </div>
      </div>

      {showAddModal && (
        <AddMemberModal
          onClose={() => setShowAddModal(false)}
          onSave={handleAddMember}
        />
      )}

      {showDeleteModal && (
        <DeleteConfirmModal
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
}
