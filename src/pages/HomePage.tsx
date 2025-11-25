import React, { useEffect, useState } from 'react';

interface Feature {
  id: string;
  title: string;
  description: string;
}

const HomePage: React.FC = () => {
  // Assume 'features' could be fetched from an API
  // It might be undefined initially or if the fetch fails
  const [features, setFeatures] = useState<Feature[] | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const fetchFeatures = async () => {
      setLoading(true);
      try {
        // Simulate a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Simulate data response. To reproduce the original error, you could set this to `undefined` or an empty array.
        const fetchedData: Feature[] | undefined = [
          { id: '1', title: 'Feature One', description: 'Description for feature one.' },
          { id: '2', title: 'Feature Two', description: 'Description for feature two.' },
          { id: '3', title: 'Feature Three', description: 'Description for feature three.' },
        ];
        
        // To test the error scenario, uncomment the line below:
        // const fetchedData: Feature[] | undefined = undefined;

        setFeatures(fetchedData);
      } catch (error) {
        console.error("Failed to fetch features:", error);
        setFeatures(undefined); // Ensure it's undefined on error
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-xl font-medium text-gray-700 dark:text-gray-300">
        Loading home page...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Welcome to Our Site!
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-200">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Defensive check for features array before calling .map() */}
          {features && features.length > 0 ? (
            features.map((feature) => (
              <div key={feature.id} className="p-6 border rounded-lg shadow-md bg-white dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{feature.description}</p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-8">
              {/* This message will appear if features is undefined, null, or an empty array */}
              No features to display at the moment.
            </div>
          )}
        </div>
      </section>

      {/* Other sections can go here */}
      <section className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-inner">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Explore More</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Discover more about our services and solutions. Navigate through our site to find what you need.
        </p>
        {/* Example for a button, assuming a Button component exists in '@/components/ui/button' */}
        {/* <Button className="mt-6">Learn More</Button> */}
      </section>
    </div>
  );
};

export default HomePage;
