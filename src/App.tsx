import Layout from "./layouts/Layout";
import ActiveNotes from "./pages/active-notes/ActiveNotes";
import ArchivedNotes from "./pages/archived-notes/ArchivedNotes";
import CreateNote from "./pages/create-note/CreateNote";
import Summary from "./pages/summary/Summary";
import UpdateNote from "./pages/update-note/UpdateNote";

function App() {
  return (
    <Layout>
      <ActiveNotes />
      <CreateNote />
      <UpdateNote />
      <Summary />
      <ArchivedNotes />
    </Layout>
  );
}

export default App;
