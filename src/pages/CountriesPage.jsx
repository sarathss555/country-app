import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { fetchCountries, setFilter, loadMore } from '../actions';
import Footer from '../components/Footer';
import '../styles/Countries.scss';

const slides = [
  "../images/img1.png",
  "../images/img2.png",
];

const sideImage = '../images/img1.png';

const CountriesPage = () => {
  const dispatch = useDispatch();
  const { countries, filtered, region, visible, status } = useSelector((state) => state.countries);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCountries());
    }
  }, [dispatch, status]);

  const regions = ['All', ...new Set(countries.map((c) => c.region).filter(Boolean))];

  return (
    <>
      <Container className="my-4">
        {/* Header */}
        <div className="header">
          <div className="logo">🌍 CountryApp</div>
          <div className="d-flex gap-2 flex-wrap justify-content-end">
            {regions.map((r) => (
              <Button
                key={r}
                variant={region === r ? 'primary' : 'outline-primary'}
                className={region === r ? 'active-filter' : ''}
                onClick={() => dispatch(setFilter(r))}
              >
                {r}
              </Button>
            ))}
          </div>
        </div>

        {/* Welcome Text with Horizontal Lines */}
        <div className="welcome-container text-center my-4 position-relative">
          <div className="d-flex justify-content-between align-items-center">
            <div style={{ width: '40%', display: 'flex', justifyContent: 'flex-start' }}>
              <hr style={{ width: '100%', marginTop: '0em' }} />
            </div>
            <h1 className="mx-2">Welcome</h1>
            <div style={{ width: '40%', display: 'flex', justifyContent: 'flex-end' }}>
              <hr style={{ width: '100%', marginBottom: '0.2em' }} />
            </div>
          </div>
        </div>

        {/* Two Column Slider Section */}
        <Row className="mb-4" style={{ gap: '3%' }}>
          <Col style={{ width: '65%' }} className="d-flex flex-column align-items-center justify-content-center">
            <div className="slider-container w-100 text-center">
              <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <Button className="slider-btn me-2" onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}>
                ◀
              </Button>
              <Button className="slider-btn ms-2" onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}>
                ▶
              </Button>
              <div className="mt-2">
                {slides.map((_, i) => (
                  <span key={i} style={{ padding: 4 }}>{i === currentSlide ? '●' : '○'}</span>
                ))}
              </div>
            </div>
          </Col>
          <Col style={{ width: '32%' }} className="d-flex align-items-center justify-content-center">
            <img src={sideImage} alt="Side" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          </Col>
        </Row>

        {/* Country List as 2-column grid */}
        <Row>
          {/* {filtered.slice(0, visible).map((country) => (
            <Col key={country.name.common} xs={12} md={6} className="mb-4">
              <Card className="p-2 h-100">
                <Row className="align-items-center">
                  <Col xs={4} md={4} style={{ maxWidth: '35%' }}>
                    <Image
                      src={country.flags?.png || ''}
                      alt={country.name.common}
                      fluid
                      rounded
                      style={{ border: '2px solid #ccc', padding: '2px' }}
                    />
                  </Col>
                  <Col xs={8} md={8}>
                    <Card.Title className="mb-1">{country.name.common}</Card.Title>
                    <Card.Text className="text-muted">{country.region}</Card.Text>
                    <Card.Text><strong>Capital:</strong> {country.capital?.[0]}</Card.Text>
                    <Card.Text><strong>Population:</strong> {country.population.toLocaleString()}</Card.Text>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))} */}
          {filtered?.slice(0, visible).map((country, i) => {
            const name = country?.name || 'Unnamed';
            const region = country?.region || 'Unknown';
            const flag = country?.flag || 'https://via.placeholder.com/150?text=No+Flag';

            return (
              <Col key={`${name}-${i}`} xs={12} md={6} className="mb-4">
                <Card className="p-2 h-100">
                  <Row className="align-items-center">
                    <Col xs={4} md={4} style={{ maxWidth: '35%' }}>
                      <Image
                        src={flag}
                        alt={name}
                        fluid
                        rounded
                        style={{ border: '2px solid #ccc', padding: '2px' }}
                      />
                    </Col>
                    <Col xs={8} md={8}>
                      <Card.Title className="mb-1">{name}</Card.Title>
                      <Card.Text className="text-muted">{region}</Card.Text>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}

        </Row>

        {/* Load More */}
        {visible < filtered.length && (
          <div className="text-center">
            <Button onClick={() => dispatch(loadMore())}>Load More</Button>
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default CountriesPage;