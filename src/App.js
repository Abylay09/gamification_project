import React from 'react'
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
import TrainingPage from 'pages/training';
import { Route, Routes, Navigate, useLocation } from "react-router-dom"
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
import Ticket from 'pages/ticket/components/Ticket';
import AccountPage from 'pages/account';
import CardGame from 'pages/games/attentionGames/CardGame';
import { useSelector, useDispatch } from 'react-redux'
import MemoryImages from 'pages/games/memoryGames/MemoryImages';
import Test from 'pages/games/memoryGames/test';
import { setLanguage } from 'redux/features/languageSlice';
import Figures from 'pages/games/thinkingGames/Figures';
import AnotherProfile from 'pages/stats/AnotherProfile';


function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const language = useSelector(state => state.language.language);
  const languages = useSelector(state => state.language.languages);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true
      }
    }
  })
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const changeLanguage = () => {
    dispatch(setLanguage(languages.find(x => x !== language._language)));
    forceUpdate()
  }
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App h-100 " >
        {/* <button className="language-button" onClick={changeLanguage}>
          {languages.find(x => x !== language._language)}
        </button> */}
        <Routes>
          <Route path="/" element={<Navigate to={"/lesson"} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegPage />} />
          <Route path="/restore" element={<RestorePage />} />

          <Route element={<ProtectedRoutes />}>
            <Route path='/lesson' >
              <Route index element={<LessonPage />} />
              <Route path=':id' element={<LessonPage />} />
            </Route>

            <Route path="/lecture" >
              <Route index element={<LecturePage />} />
              <Route path=":id" element={<LecturePage />} />
            </Route>

            <Route path="/lecture-info" >
              <Route index element={<LectureInfoPage />} />
              <Route path=":id" element={<LectureInfoPage />} />
            </Route>

            <Route path="/task/:id" element={<TaskPage />} />

            <Route path="/shop" element={<ShopPage />} />

            <Route path="/ticket" >
              <Route index path="/ticket" element={<TicketPage />} />
              <Route path=":id" element={<Ticket />} />
            </Route>
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/pet" element={<PetPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/stats">
              <Route index path="/stats" element={<StatsPage />} />
              <Route path=":id" element={<AnotherProfile />} />
            </Route>

            <Route path="/profile" element={<AccountPage />} />
            <Route path="/choose-pet" element={<PetSliderPage />} />

            <Route path="/quests">
              <Route index path="/quests" element={<QuestsPage />} />
              <Route path="attention" element={<Game1 />} />
              <Route path="attention-cards" element={<CardGame />} />
              <Route path="memory" element={<Game2 />} />
              <Route path="images" element={<MemoryImages />} />
              <Route path="thinking" element={<Game3 />} />
              <Route path="thinking-figure" element={<Figures />} />
            </Route>
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </QueryClientProvider>

  );
}

export default App;

