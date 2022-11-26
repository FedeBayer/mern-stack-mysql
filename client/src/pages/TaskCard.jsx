function TaskCard({ task }) {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done === 1 ? "✔️" : "❌"}</span>
      <span>{task.createdAt}</span>
      <button>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default TaskCard;
