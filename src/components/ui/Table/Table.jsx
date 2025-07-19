import "./Table.scss";

const Table = ({ headers = [], data = [], renderCell }) => {
  return (
    <div className="vira-store-table">
      <table>
        <thead>
          <tr>
            {headers.map((item, index) => (
              <td key={index}>{item}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => {
                const key = Object.keys(row)[colIndex];
                const value = row[key];

                return (
                  <td key={colIndex}>
                    {renderCell ? renderCell(row, key, value) : value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
