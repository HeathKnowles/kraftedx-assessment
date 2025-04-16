'use client'

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const earningsData = [
  { date: 'Apr 1', amount: 300 },
  { date: 'Apr 5', amount: 450 },
  { date: 'Apr 10', amount: 700 },
  { date: 'Apr 14', amount: 950 },
]

export default function CreatorDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fefcea] to-[#e0f7fa] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">👋 Welcome back, Creator!</h1>
          <form action="/" method="post">
            <button type="submit" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow">
              Logout
            </button>
          </form>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Posts', value: 124 },
            { label: 'Followers', value: 3921 },
            { label: 'Earnings', value: '$1,230' },
            { label: 'Engagement', value: '87%' },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-md transition">
              <p className="text-gray-500 text-sm">{item.label}</p>
              <p className="text-2xl font-semibold text-gray-800 mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Earnings Chart */}
        <div className="bg-white rounded-2xl shadow p-6 mb-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Earnings Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="amount" stroke="#14b8a6" strokeWidth={3} dot={{ r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Posts */}
        <div className="bg-white rounded-2xl shadow p-6 mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Recent Posts</h2>
            <button className="bg-teal-500 hover:bg-teal-600 text-white text-sm px-4 py-2 rounded-lg shadow">
              + Create New
            </button>
          </div>

          <ul className="space-y-4">
            {[
              { title: 'My Creative Process', date: 'April 14, 2025', views: 350 },
              { title: 'Top 5 Tools I Use', date: 'April 10, 2025', views: 280 },
              { title: 'Making Passive Income as a Creator', date: 'April 1, 2025', views: 500 },
            ].map((post) => (
              <li key={post.title} className="border rounded-lg px-4 py-3 hover:bg-gray-50 transition">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-800">{post.title}</p>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                  <p className="text-sm text-gray-600">{post.views} views</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Calendar */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Content Calendar</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { day: 'Mon', content: 'Post: Workflow tips' },
              { day: 'Tue', content: 'Story: Studio tour' },
              { day: 'Wed', content: 'Live: Q&A session' },
              { day: 'Thu', content: 'Post: New artwork' },
            ].map((item) => (
              <div key={item.day} className="bg-teal-50 p-4 rounded-lg border border-teal-100 text-center">
                <p className="font-medium text-gray-700">{item.day}</p>
                <p className="text-sm text-gray-600 mt-1">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}