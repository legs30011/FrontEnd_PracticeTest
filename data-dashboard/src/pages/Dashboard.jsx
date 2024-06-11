import { useState, useEffect } from 'react';
import Widget from '../components/Widget';
import Filter from '../components/Filter';
import { fetchData } from '../services/api';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ startDate: '', endDate: '' });
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        // Verifica si fetchedData es un arreglo antes de establecerlo en el estado
        if (Array.isArray(fetchedData)) {
          setData(fetchedData);
        } else {
          console.error('fetchData() no devolvió un arreglo:', fetchedData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    // Filtrar los datos basado en el filtro
    if (Array.isArray(data)) {
      const filtered = data.filter(item => {
        const itemDate = new Date(item.date);
        const startDate = filter.startDate ? new Date(filter.startDate) : new Date('2000-01-01');
        const endDate = filter.endDate ? new Date(filter.endDate) : new Date();
        return itemDate >= startDate && itemDate <= endDate;
      });
      setFilteredData(filtered);
    }
  }, [data, filter]);

  return (
    <div className="container mx-auto p-4">
      <Filter filter={filter} setFilter={setFilter} />
      <Widget data={filteredData} />
    </div>
  );
};

export default Dashboard;
