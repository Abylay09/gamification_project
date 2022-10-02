import Layout from 'layout/Layout';
import LessonPage from 'pages/lesson';
import PetSliderPage from 'pages/pet-selection';
import RegPage from './pages/registration';
import LecturePage from 'pages/lecture';
import LectureInfoPage from 'pages/Lecture-info';
import PetPage from 'pages/pet';
import QuestsPage from 'pages/quests';
import ShopPage from 'pages/shop';
import TicketPage from 'pages/ticket';
import StatsPage from 'pages/stats';
import ProfilePage from 'pages/profile';
import { Route, Routes } from "react-router-dom"
import './App.scss';
import LoginPage from 'pages/login';
import ErrorPage from 'pages/error-page';
import ProtectedRoutes from 'utils/ProtectedRoutes';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import RestorePage from 'pages/restore';
import TaskPage from 'pages/tasks';
import Game1 from 'pages/games/attentionGames/game1';
import Game2 from 'pages/games/memoryGames/game1';
import Game3 from 'pages/games/thinkingGames/game1';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App h-100" >
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegPage />} />
          <Route path="/restore" element={<RestorePage />} />

          <Route path='/' element={<ProtectedRoutes />}>
            <Route index path="/" element={<ProfilePage />} />
            <Route path="/lessons" element={<LessonPage />}>
              <Route path=":id" element={<LessonPage />} />
            </Route>
            <Route  path="/lecture" element={<LecturePage />}>
              <Route path=":id" element={<LecturePage />} />
            </Route>
            <Route path="/task/:id" element={<TaskPage />} />
            <Route path="/lecture-info" element={<LectureInfoPage />} >
                <Route path=":id" element={<LectureInfoPage />} />
            </Route>
            <Route path="/pet" element={<PetPage />} />
            <Route path="/quests" element={<QuestsPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/ticket" element={<TicketPage />} />
            <Route path="/choose-pet" element={<PetSliderPage />} />
            <Route path="/stats" element={<StatsPage />} />

            <Route path="/ticket" element={<TicketPage />} />
            <Route path="/choose-pet" element={<PetSliderPage />} />
            <Route path="/stats" element={<StatsPage />} />

            {/* <Route path="/attention" element={<Game1 />} />
            <Route path="/memory" element={<Game2/>} />
            <Route path="/thinking" element={<Game3/>} /> */}

          </Route>
          <Route path="*" element={<ErrorPage />} />
          {/* <Route path="/profile" element={<ProfilePage />} /> */}
        </Routes>
      </div>
    </QueryClientProvider>

  );
}

export default App;
