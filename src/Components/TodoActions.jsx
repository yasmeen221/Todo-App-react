const TodoActions = ({ length, filterComLen ,handel}) => {
  // handel
  return (
    <div className="meta">
      <div className="progress-wrapper">
        <progress value={filterComLen} max={length}></progress>
        <span>
          {filterComLen}/{length} completed
        </span>
      </div>
      <div className="actions">
        <button type="submit" className="actions__clear-btn" onClick={handel}>
          Clear
        </button>
        <button type="submit" className="actions__check-btn">
          Check all
        </button>
      </div>
    </div>
  );
};

export default TodoActions;
