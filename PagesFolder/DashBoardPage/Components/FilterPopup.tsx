'use client';

import { useEffect, useState } from 'react';

interface FilterPopupProps {
  onClose: () => void;
  onApply: (filters: { startDate: string; endDate: string; status: string }) => void;
  onClear: () => void;
  filter:{startDate:string,endDate:string,status:string}
}

export default function FilterPopup({
  onClose,
  onApply,
  onClear,
  filter
}: FilterPopupProps) {
  const [startDate, setStartDate] = useState(filter.startDate);
  const [endDate, setEndDate] = useState(filter.endDate);
  const [status, setStatus] = useState(filter.status);
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Filter</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Date Filters */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm"
            />
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm"
            >
              <option value="">All</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between gap-3">
          <button
            onClick={() => {
              setStartDate('');
              setEndDate('');
              setStatus('');
              onClear();
            }}
            className="w-full border border-gray-300 rounded-lg py-2 text-sm hover:bg-gray-100"
          >
            Clear
          </button>

          <button
            onClick={() =>{
              onApply({ startDate, endDate, status })
              onClose()
            }
            }
            className="w-full bg-black text-white rounded-lg py-2 text-sm hover:bg-gray-900"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
