"use client";

import { useEffect, useState } from "react";

export default function TestApiPage() {
  type ApiResponse = Record<string, unknown>; // Replace with a more specific type if known
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/test`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch gagal:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-white shadow p-6 rounded-xl space-y-4">
      <h1 className="text-2xl font-bold text-center">🔎 Tes API Laravel</h1>

      {loading && <p className="text-gray-500">Loading...</p>}

      {data && (
        <div className="space-y-2">
          <p className="text-green-600 font-semibold">✅ API terhubung!</p>
          <pre className="bg-gray-100 p-3 rounded-lg text-sm">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}

      {!loading && !data && (
        <p className="text-red-600 font-semibold">
          ❌ Gagal fetch API. Periksa CORS atau URL.
        </p>
      )}
    </div>
  );
}
