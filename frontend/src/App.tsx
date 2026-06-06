import { useState } from 'react';
import ReportForm from './components/ReportForm';
import MapComponent from './components/Map';
import StatsBar from './components/StatsBar';

function App() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [activeTab, setActiveTab] = useState<'map' | 'report'>('map');

  const handleReportSuccess = () => {
    setRefreshTrigger((prev) => prev + 1);
    setActiveTab('map');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary-600">SafeMap</h1>
              <p className="text-sm text-gray-600">Anonymous Safety Reporting Platform</p>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('map')}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  activeTab === 'map'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Map View
              </button>
              <button
                onClick={() => setActiveTab('report')}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  activeTab === 'report'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Report Incident
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === 'map' ? (
          <>
            <StatsBar key={refreshTrigger} />
            <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ height: '600px' }}>
              <MapComponent refreshTrigger={refreshTrigger} />
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                🔴 High Risk | 🟡 Moderate Risk | 🟢 Low Risk
              </p>
            </div>
          </>
        ) : (
          <div className="max-w-3xl mx-auto">
            <ReportForm onSuccess={handleReportSuccess} />
          </div>
        )}
      </main>

      <footer className="bg-white mt-12 py-6 shadow-md">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            SafeMap - Building safer communities through anonymous reporting
          </p>
          <p className="text-xs text-gray-500 mt-2">
            All reports are anonymous and locations are fuzzed for privacy
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
