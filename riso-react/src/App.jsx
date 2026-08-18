import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AproposPage from './pages/AproposPage';
import MembresPage from './pages/MembresPage';
import HistoirePage from './pages/HistoirePage';
import ValeursPage from './pages/ValeursPage';
import ActivitesPage from './pages/ActivitesPage';
import NosServicesPage from './pages/NosServicesPage';
import ActualitesPage from './pages/ActualitesPage';
import ContactPage from './pages/ContactPage';
import EcolesUniversitesPage from './pages/EcolesUniversitesPage';
import TemoignagesPage from './pages/TemoignagesPage';
import ForumEchange from './pages/ForumEchange';
import AssembleeGenerale from './pages/AssembleeGenerale';
import FormationEsatic from './pages/FormationEsatic';
import ForumEmploi from './pages/ForumEmploi';
import FormationEna from './pages/FormationEna';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="apropos" element={<AproposPage />} />
          <Route path="membres" element={<MembresPage />} />
          <Route path="histoire" element={<HistoirePage />} />
          <Route path="valeurs" element={<ValeursPage />} />
          <Route path="activites" element={<ActivitesPage />} />
          <Route path="nos-services" element={<NosServicesPage />} />
          <Route path="actualites" element={<ActualitesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="ecoles-universites" element={<EcolesUniversitesPage />} />
          <Route path="temoignages" element={<TemoignagesPage />} />
          <Route path="forum" element={<ForumEchange />} />
          <Route path="assemblee-generale" element={<AssembleeGenerale />} />
          <Route path="formation-esatic" element={<FormationEsatic />} />
          <Route path="forum-emploi" element={<ForumEmploi />} />
          <Route path="formation-ena" element={<FormationEna />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
