import React from 'react';

interface EntityRankingProps {
  data: {
    entity: string;
    apl: number;
    ppl: number;
  }[];
}

const EntityRanking: React.FC<EntityRankingProps> = ({ data }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Entity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                APL
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                PPL
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{item.entity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.apl}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.ppl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EntityRanking;