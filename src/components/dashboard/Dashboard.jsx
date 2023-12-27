// src/components/Dashboard.jsx
import React, { useState } from 'react';
import image1 from "../../assets/folderimage/tablekidsboy.png";
import image2 from "../../assets/folderimage/tablekidsgirl.png";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const Overview = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">Overview</h2>
      <p>
        Stunting adalah kondisi yang muncul akibat kurang gizi yang berkepanjangan, biasanya dimulai di dalam kandungan.
        Ini menyebabkan pertumbuhan dan perkembangan anak terhambat. Bagian ini memberikan gambaran tentang
        aspek-aspek kunci stunting dan dampaknya.
      </p>
      <br></br>
      <h3 className="text-lg font-semibold mb-2">Indeks Pertumbuhan Anak</h3>
      <p>
        Indeks Pertumbuhan Anak (Child Growth Index atau CGI) adalah metrik kunci untuk menilai pertumbuhan dan perkembangan anak.
        Ini mencakup indikator seperti tinggi untuk usia, berat untuk usia, dan berat untuk tinggi.
        Memantau CGI membantu mengidentifikasi anak-anak yang berisiko mengalami stunting dan memungkinkan intervensi yang sesuai.
      </p>

      <div className='flex justify-center gap-3 pb-5'>
        <div>
         <img 
        src= {image1}
        alt="Table Anak laki-laki - Tinggi Badan menurut usia: 2 hingga 5 tahun (persentil)"
        className="w-full h-full max-w-lg mx-auto my-4 rounded"
        />
        <p className='text-[12px] mx-auto'>Table Anak laki-laki - Tinggi Badan menurut usia: 2 hingga 5 tahun (persentil)</p>
      </div>
      <div>
      <img
        src= {image2}
        alt="Table Anak Perempuan - Tinggi Badan menurut usia: 2 hingga 5 tahun (persentil)"
        className="w-full h-full max-w-lg mx-auto my-4 rounded"
      />
      <p className='text-[12px] mx-auto'>Table Anak Perempuan - Tinggi Badan menurut usia: 2 hingga 5 tahun (persentil)</p>
      </div>

      </div>

      <div className='pt-10'>
      <p>
        Jelajahi data CGI untuk memahami distribusi indeks pertumbuhan dalam berbagai kelompok usia.
        Alat visualisasi data memberikan wawasan tentang prevalensi stunting dan area yang memerlukan perhatian lebih.
      </p>

      </div>
    </div>
  );

  const Statistics = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">Statistik</h2>
      <p>
        Jelajahi statistik terkini terkait stunting. Pahami prevalensi, distribusi geografis,
        dan tren dari waktu ke waktu. Alat visualisasi data tersedia untuk membantu Anda memahami signifikansi masalah ini.
      </p>
    </div>
  );

  const Recommendations = () => (
    <div>
      <h2 className="text-xl font-semibold mb-4">Rekomendasi</h2>
      <p>
        Intervensi dan rekomendasi yang efektif memainkan peran penting dalam mengatasi stunting.
        Bagian ini merinci strategi berbasis bukti, kebijakan, dan praktik-praktik yang dapat dilakukan
        untuk melawan stunting dan mendorong perkembangan anak yang sehat.
      </p>
    </div>
  );

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'overview':
        return <Overview />;
      case 'statistics':
        return <Statistics />;
      case 'recommendations':
        return <Recommendations />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">Stunting Dashboard</h1>
        </div>
      </header>
      <nav className="bg-gray-700 text-white p-2">
        <button
          className={`px-4 py-2 mx-2 ${selectedTab === 'overview' ? 'bg-gray-600' : 'bg-gray-700'}`}
          onClick={() => setSelectedTab('overview')}
        >
          Overview
        </button>
        <button
          className={`px-4 py-2 mx-2 ${selectedTab === 'statistics' ? 'bg-gray-600' : 'bg-gray-700'}`}
          onClick={() => setSelectedTab('statistics')}
        >
          Statistik
        </button>
        <button
          className={`px-4 py-2 mx-2 ${selectedTab === 'recommendations' ? 'bg-gray-600' : 'bg-gray-700'}`}
          onClick={() => setSelectedTab('recommendations')}
        >
          Rekomendasi
        </button>
      </nav>
      <div className="container mx-auto my-8">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Dashboard;
