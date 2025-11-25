import React, { useEffect, useState } from 'react';

interface Item {
  id: string;
  name: string;
}

interface PageData {
  title: string;
  items: Item[];
}

const HomePage: React.FC = () => {
  // Initialize pageData as undefined to simulate data loading state
  const [pageData, setPageData] = useState<PageData | undefined>(undefined);

  useEffect(() => {
    // Simulate data fetching from an API or async source
    const fetchData = async () => {
      try {
        // Simulate a network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Simulate successful data fetch
        setPageData({
          title: "Welcome to our Home Page!",
          items: [
            { id: '1', name: 'Showcase Item 1' },
            { id: '2', name: 'Showcase Item 2' },
            { id: '3', name: 'Showcase Item 3' },
            { id: '4', name: 'Showcase Item 4' }
          ]
        });

        // Uncomment the line below to simulate a case where 'items' might be an empty array
        // setPageData({ title: "Welcome!", items: [] });

        // Uncomment the line below to simulate a case where data fetching fails or returns undefined
        // setPageData(undefined);

      } catch (error) {
        console.error("Failed to fetch homepage data:", error);
        // Optionally set an error state or display an error message
        setPageData(undefined); // Ensure pageData is undefined on error too
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 dark:text-gray-100 animate-fade-in">
        {pageData?.title || "Loading Homepage..."}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
        {/* Defensive programming: Ensure pageData.items is an array before mapping. */}
        {/* If pageData is undefined or pageData.items is undefined, it defaults to an empty array. */}
        {(pageData?.items || []).map(item => (
          <div key={item.id} className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{item.name}</h2>
            <p className="text-gray-600 dark:text-gray-400">Details for {item.name} go here.</p>
          </div>
        ))}

        {/* Optional: Display a loading message when data is still being fetched */}
        {!pageData && (
          <div className="col-span-full text-center py-10 text-gray-500 dark:text-gray-400">
            <p>Fetching exciting content for you...</p>
          </div>
        )}

        {/* Optional: Display a message when no items are available after loading */}
        {pageData && pageData.items.length === 0 && (
          <div className="col-span-full text-center py-10 text-gray-500 dark:text-gray-400">
            <p>No items to display at the moment. Please check back later!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
