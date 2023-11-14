export const Filter = function Filter({ filter, handleFilterChange }) {
  return (
    <input
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};