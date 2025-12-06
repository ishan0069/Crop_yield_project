import React from "react";

const Output = ({ visible, onClose, data }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="w-full max-w-2xl bg-white rounded p-6 shadow-lg">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-semibold">Analysis result</h2>
          <button onClick={onClose} className="text-gray-500">
            Close
          </button>
        </div>

        <div className="mt-4 space-y-3">
          <div>
            <div className="text-xs text-black-600">Query</div>
            <div className="text-sm">
              {data?.crop} — {data?.district} — {data?.year}
            </div>
          </div>

          <div>
            <div className="text-xs text-black-600">Estimated yield</div>
            <div className="text-2xl font-bold">
              {data?.predictedYield ?? "—"} t/ha
            </div>
          </div>

          <div>
            <div className="text-xs text-black-600">
              Top months (sowing/growth/flowering/harvest)
            </div>
            <div className="mt-2 flex gap-2">
              {(data?.recommendedMonths ?? []).map((m) => (
                <div key={m} className="px-3 py-1 bg-gray-100 rounded text-sm">
                  {m}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs text-black-600">
              Monthly suitability (0-100)
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {(data?.monthly ?? []).map((r) => (
                <div key={r.month} className="p-2 border rounded text-xs">
                  {r.month}: {r.score}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="px-3 py-2 border rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Output;