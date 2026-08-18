export default function History() {
  const timelineItems = [
    {
      year: '2024',
      number: '6',
      date: '07 Décembre 2024',
      location: 'ESATIC, Treichville',
      description: "Adoption de la matrice d\u2019action triennale 2025-2027",
    },
    {
      year: '2024',
      number: '5',
      date: '29 Juin 2024',
      location: 'ESATIC, Treichville',
      description: 'Assemblée Générale Élective du Président du RISO pour la mandature 2024-2027',
    },
    {
      year: '2015',
      number: '4',
      date: '5 au 11 Avril 2015',
      location: 'ENA, Cocody',
      description: 'Formation à la maîtrise de la rédaction administrative',
    },
    {
      year: '2015',
      number: '3',
      date: '1er au 11 Avril 2015',
      location: 'CIERPA, Cocody',
      description: "Formation à l\u2019appropriation des tests psychotechniques",
    },
    {
      year: '2014',
      number: '2',
      date: '8 Mai 2014',
      location: 'ESATIC, Treichville',
      description: 'Lancement officiel des activités du RISO',
    },
    {
      year: '2014',
      number: '1',
      date: '12 Mars 2014',
      location: 'CIERPA, Cocody',
      description: 'Cérémonie de remise de cartes de membres aux 100 premiers adhérents',
    },
  ];

  return (
    <section id="histoire" className="history-section">
      <div className="container">
        <div className="timeline-container">
          <div className="timeline">
            {timelineItems.map((item) => (
              <div key={item.number} className="timeline-item" data-year={item.year}>
                <div className="timeline-marker">
                  <span className="timeline-number">{item.number}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-location">{item.location}</div>
                  <div className="timeline-description">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
