const Notes = ({ notes }) => {
  return (
    <div className="flex h-full flex-wrap content-start gap-4 overflow-y-auto p-6">
      {notes.length === 0 ? (
        <p className="text-sm text-gray-500">Your notes will appear here.</p>
      ) : (
        notes.map((note, index) => (
          <article
            key={`${note.task}-${index}`}
            className="flex h-52 w-40 flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-md"
          >
            <div>
              <h3 className="truncate text-sm font-semibold text-gray-800">
                {note.task}
              </h3>
              <p className="mt-1 line-clamp-4 whitespace-pre-wrap text-xs text-gray-500">
                {note.details}
              </p>
            </div>
          </article>
        ))
      )}
    </div>
  );
};

export default Notes;
