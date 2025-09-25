"use client";

import { useEffect, useState } from "react";

// Define User type based on your Laravel User model
interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string | null;
  created_at: string;
  updated_at: string;
}

// API Response type for users endpoint
interface UsersApiResponse {
  data: User[];
  message?: string;
  status?: string;
}

export default function TestApiPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: UsersApiResponse = await response.json();

        // Handle different response formats
        if (Array.isArray(result)) {
          setUsers(result);
        } else if (result.data && Array.isArray(result.data)) {
          setUsers(result.data);
        } else {
          throw new Error("Invalid API response format");
        }
      } catch (err) {
        console.error("Fetch users gagal:", err);
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="bg-white shadow p-6 rounded-xl space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-[#3C5148]">
        👥 Data Users dari API Laravel
      </h1>

      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#3C5148]"></div>
          <p className="ml-3 text-gray-500">Loading users...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 font-semibold">❌ Error: {error}</p>
          <p className="text-red-500 text-sm mt-1">
            Periksa CORS, URL API, atau koneksi ke server Laravel.
          </p>
        </div>
      )}

      {!loading && !error && users.length > 0 && (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-600 font-semibold">
              ✅ API terhubung! Ditemukan {users.length} users.
            </p>
          </div>

          {/* Users Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-[#3C5148] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    ID: {user.id}
                  </span>
                </div>

                <h3
                  className="font-semibold text-[#3C5148] mb-2 truncate"
                  title={user.name}
                >
                  {user.name}
                </h3>

                <p
                  className="text-sm text-gray-600 mb-3 truncate"
                  title={user.email}
                >
                  📧 {user.email}
                </p>

                <div className="space-y-1 text-xs text-gray-500">
                  <p>📅 Dibuat: {formatDate(user.created_at)}</p>
                  {user.email_verified_at && (
                    <p className="text-green-600">✅ Email terverifikasi</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Raw JSON (for debugging) */}
          <details className="mt-6">
            <summary className="cursor-pointer text-[#3C5148] font-semibold hover:text-[#678E4D]">
              🔍 Lihat Raw JSON Response
            </summary>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm mt-2 overflow-x-auto">
              {JSON.stringify(users, null, 2)}
            </pre>
          </details>
        </div>
      )}

      {!loading && !error && users.length === 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
          <p className="text-yellow-600 font-semibold">
            ⚠️ API terhubung, tapi tidak ada data users.
          </p>
          <p className="text-yellow-500 text-sm mt-1">
            Pastikan tabel users di Laravel memiliki data.
          </p>
        </div>
      )}
    </div>
  );
}
