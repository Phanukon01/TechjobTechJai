export default function Dashboard({ user }) {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-4">Welcome, {user?.username}</p>
        <p className="text-sm text-blue-600">Role: {user?.role}</p>
      </div>
    </div>
  );
}