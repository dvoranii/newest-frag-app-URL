
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import HomePage from './pages/HomePage/index';
import FragrancePage from './pages/FragrancePage/index';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, 
      gcTime: 1000 * 60 * 30, 
      refetchOnWindowFocus: false,
      retry: 1
    },
  },
});


function App() {
    return (
       <QueryClientProvider client={queryClient}>
          <Router>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/fragrance" element={<FragrancePage />} />
              </Routes>
          </Router>
           <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;