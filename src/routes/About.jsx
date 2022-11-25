/* eslint linebreak-style: ["error", "windows"] */
const AboutScreen = () => {
  const location = [
    {
      city: 'Bogota',
      country: 'COL',
      address: 'Callr 116 554',
      phone: '+57 (1) 752-5200',
    },
    {
      city: 'Hermosillo',
      country: 'MEX',
      address: 'Blvd. Morelos 1054',
      phone: '+52 (662) 260-5042',
    },
    {
      city: 'Manizalez',
      country: 'COL',
      address: 'Cr21 23-19',
      phone: '+57 (601) 705-0000',
    },
    {
      city: 'Sao Paulo',
      country: 'BRA',
      address: 'Avenida dos Bandeirantes 423',
      phone: '+55 (11) 122-5669',
    },
  ];

  return (
    <div className="container page-about">
      <div className="info-container">
        <p>
          THIS APP IS CREATED BY,MUHAMMAD RAAD, Gasangwa Thomas,Favour Amarachi ,Afolabi Akorede,
          MUHAMMAD IBRAHIM
        </p>

        <h2>Locations</h2>

        <div className="stores">
          {
            location.map((item) => (
              <div key={item.city}>
                <p className="no-margin-padding"><strong>{`${item.city} (${item.country})`}</strong></p>
                <p className="no-margin-padding"><small>{item.address}</small></p>
                <p><a href={`tel:${item.phone}`}>{item.phone}</a></p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
