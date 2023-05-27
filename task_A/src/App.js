import AnotherUserParticipation from "./components/AnotherUserParticipation";
import PollDisplay from "./components/PollDisplay";
import UserParticipation from "./components/UserParticipation";
import { AppProvider } from "./components/context";
function App() {
  return (
    <div>
        <AppProvider>
           <UserParticipation/>
           <AnotherUserParticipation/>
        </AppProvider>
    </div>
  );
}

export default App;
