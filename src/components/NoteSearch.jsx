import React from "react";

function NoteSearch({ onSearch }) {
  return (
    <div className="note-search">
      <h1>Notes</h1>
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Cari catatan ..."
          className="search-input"
          onChange={onSearch}
        />
      </div>
    </div>
  );
}

export default NoteSearch;
