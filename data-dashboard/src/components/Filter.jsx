/* eslint-disable react/prop-types */

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h3 className="text-2xl font-semibold mb-4">Filter</h3>
      <div className="flex space-x-4">
        <label className="block">
          <span className="text-gray-700">Start Date:</span>
          <input
            type="date"
            value={filter.startDate}
            onChange={e => setFilter({ ...filter, startDate: e.target.value })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">End Date:</span>
          <input
            type="date"
            value={filter.endDate}
            onChange={e => setFilter({ ...filter, endDate: e.target.value })}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
      </div>
    </div>
  );
};

export default Filter;
