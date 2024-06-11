/* eslint-disable react/prop-types */

const Widget = ({ data }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4">Data Widget</h3>
      <ul>
        {data.map(item => (
          <li key={item.id} className="border-b border-gray-200 py-2 flex justify-between items-center">
            <span className="text-gray-700">{item.name}</span>
            <span className="text-gray-500">{item.date}</span>
            <span className="text-gray-900 font-medium">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Widget;
