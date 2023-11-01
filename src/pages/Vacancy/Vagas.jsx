import React, { useEffect, useState } from 'react';
import { CardProject } from '../../components/CardProject/CardProject';
import { Wrapper } from './styles';
import { Spin } from 'antd';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';
import { SearchComponent } from '../../components/Input/InputSearch';
import { SelectFilter } from '../../components/SelectFilter/SelectFilter';

export const Vagas = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    tecnologias: [],
    laboratorio: [],
    areaVaga: [],
    nivel: [],
  });

  const fetchProjects = async () => {
    try {
      const vagasCollection = collection(db, 'vaga');
      let q = query(vagasCollection);

      // Aplicar filtros, se houver algum selecionado
      if (selectedFilters.tecnologias.length > 0) {
        q = query(q, where('tecnologias', 'array-contains-any', selectedFilters.tecnologias));
      }
      if (selectedFilters.laboratorio.length > 0) {
        q = query(q, where('laboratorio', 'array-contains-any', selectedFilters.laboratorio));
      }
      if (selectedFilters.areaVaga.length > 0) {
        q = query(q, where('areaVaga', 'array-contains-any', selectedFilters.areaVaga));
      }
      if (selectedFilters.nivel.length > 0) {
        q = query(q, where('nivel', 'array-contains-any', selectedFilters.nivel));
      }

      const querySnapshot = await getDocs(q);
      const projectsData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      if (searchText === '') {
        setProjects(projectsData);
      } else {
        const filteredProjects = projectsData.filter((project) => {
          const lowerCaseSearchText = searchText.toLowerCase();
          const lowerCaseTitle = project.tituloProjeto.toLowerCase();
          const lowerCaseArea = project.areaVaga.map(area => area.toLowerCase()).join(' ');
          const lowerCaseLaboratorio = project.laboratorio.map(lab => lab.toLowerCase()).join(' ');
          const lowerCaseTecnologias = project.tecnologias.map(tech => tech.toLowerCase()).join(' ');
          const lowerCaseNivel = project.nivel.map(n => n.toLowerCase()).join(' ');

          return (
            lowerCaseTitle.includes(lowerCaseSearchText) ||
            lowerCaseArea.includes(lowerCaseSearchText) ||
            lowerCaseLaboratorio.includes(lowerCaseSearchText) ||
            lowerCaseTecnologias.includes(lowerCaseSearchText) ||
            lowerCaseNivel.includes(lowerCaseSearchText)
          );
        });

        setProjects(filteredProjects);
      }

      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar os dados do Firebase:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [searchText, selectedFilters]);

  return (
    isLoading ? (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    ) : (
      <>
        <SearchComponent onSearchTextChange={setSearchText} />
        <SelectFilter onFilterChange={setSelectedFilters} />
        <Wrapper>
          {projects && projects.length > 0 ? (
            projects.map((project, index) => (
              <CardProject key={project.id} data={project} />
            ))
          ) : (
            <div>Nenhum projeto disponível.</div>
          )}
        </Wrapper>
      </>
    )
  );
};
